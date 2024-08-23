<template>
    <div class>
        <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, toRef, watch } from "vue";
import * as echarts from "echarts";
import bgimage from "@/assets/imgs/main/title-h-third.png";

import "echarts-gl";
import _ from "lodash";
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    haveTotal: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number || String,
        default: 0
    },
    graphicTitle: {
        type: String,
        default: '总数'
    }
});

const colors = ['#3796FF', '#FFF500', '#23FF5F', '#FF3784', '#FFA514', '#AF5AFF', '#FFCE56', '#36A2EB', '#FFA07A']
const target = ref(null);
const rootFontSize = useRootFontSize();
const chartData = toRef(props.data);
let mChart = null;
onMounted(() => {
    mChart = echarts.init(target.value);
});
onUnmounted(() => {
    mChart.dispose();
})

watch([chartData, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    if (mChart) {
        mChart.resize();
    }
});

const handleResize = () => {
    const rootFontSize = useRootFontSize();
    renderChart(rootFontSize.value);
    mChart && mChart.resize();

};
const renderChart = (fontSize) => {
    const total = props.total !== 0 ? props.total : _.sum(_.map(chartData.value, d => Number(d.value)), "value");

    // const total = props.data.reduce((acc, cur) => acc + Number(cur.value), 0);
    // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
    function getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        h
    ) {
        // 计算
        let midRatio = (startRatio + endRatio) / 2;

        let startRadian = startRatio * Math.PI * 2;
        let endRadian = endRatio * Math.PI * 2;
        let midRadian = midRatio * Math.PI * 2;

        // 如果只有一个扇形，则不实现选中效果。
        // if (startRatio === 0 && endRatio === 1) {
        //     isSelected = false;
        // }
        isSelected = false;
        // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
        k = typeof k !== "undefined" ? k : 1 / 3;

        // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
        let offsetX = isSelected ? Math.sin(midRadian) * 0.1 : 0;
        let offsetY = isSelected ? Math.cos(midRadian) * 0.1 : 0;

        // 计算高亮效果的放大比例（未高亮，则比例为 1）
        let hoverRate = isHovered ? 1.05 : 1;

        // 返回曲面参数方程
        return {
            u: {
                min: -Math.PI,
                max: Math.PI * 3,
                step: Math.PI / 32
            },

            v: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 20
            },

            x: function (u, v) {
                if (u < startRadian) {
                    return (
                        offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                    );
                }
                if (u > endRadian) {
                    return (
                        offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                    );
                }
                return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y: function (u, v) {
                if (u < startRadian) {
                    return (
                        offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
                    );
                }
                if (u > endRadian) {
                    return (
                        offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
                    );
                }
                return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            z: function (u, v) {
                if (u < -Math.PI * 0.5) {
                    return Math.sin(u);
                }
                if (u > Math.PI * 2.5) {
                    return Math.sin(u) * h * 0.1;
                }
                return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
            }
        };
    }

    // 生成模拟 3D 饼图的配置项
    function getPie3D(pieData, internalDiameterRatio) {
        let series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        let legendData = [];
        let k =
            typeof internalDiameterRatio !== "undefined"
                ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
                : 1 / 3;

        // 为每一个饼图数据，生成一个 series-surface 配置
        for (let i = 0; i < pieData.length; i++) {
            sumValue += pieData[i].value;

            let seriesItem = {
                name:
                    typeof pieData[i].name === "undefined"
                        ? `series${i}`
                        : pieData[i].name,
                type: "surface",
                parametric: true,
                wireframe: {
                    show: false
                },
                pieData: pieData[i],
                pieStatus: {
                    selected: false,
                    hovered: false,
                    k: 1 / 10
                }
            };

            if (typeof pieData[i].itemStyle != "undefined") {
                let itemStyle = {};

                typeof pieData[i].itemStyle.color != "undefined"
                    ? (itemStyle.color = pieData[i].itemStyle.color)
                    : null;
                typeof pieData[i].itemStyle.opacity != "undefined"
                    ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                    : null;

                seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
        }

        // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
        // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
        for (let i = 0; i < series.length; i++) {
            endValue = startValue + series[i].pieData.value;

            series[i].pieData.startRatio = startValue / sumValue;
            series[i].pieData.endRatio = endValue / sumValue;
            series[i].parametricEquation = getParametricEquation(
                series[i].pieData.startRatio,
                series[i].pieData.endRatio,
                false,
                false,
                k,
                series[i].pieData.value
            );

            startValue = endValue;

            legendData.push(series[i].name);
        }

        // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
        series.push({
            name: "mouseoutSeries",
            type: "surface",
            parametric: true,
            wireframe: {
                show: false
            },
            itemStyle: {
                opacity: 0.1,
                color: "#E1E8EC"
            },
            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -0.5 : -5;
                }
            }
        });

        // // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
        series.push({
            name: "mouseoutSeries",
            type: "surface",
            parametric: true,
            wireframe: {
                show: false
            },
            itemStyle: {
                opacity: 0.1,
                color: "rgba(101, 153, 164, 0.24)"
            },
            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -5 : -7;
                }
            }
        });
        series.push({
            name: "mouseoutSeries",
            type: "surface",

            parametric: true,
            wireframe: {
                show: false
            },
            itemStyle: {
                opacity: 0.1,
                color: "#E1E8EC"
            },
            parametricEquation: {
                u: {
                    min: 0,
                    max: Math.PI * 2,
                    step: Math.PI / 20
                },
                v: {
                    min: 0,
                    max: Math.PI,
                    step: Math.PI / 20
                },
                x: function (u, v) {
                    return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2.2;
                },
                y: function (u, v) {
                    return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2.2;
                },
                z: function (u, v) {
                    return Math.cos(v) > 0 ? -7 : -7;
                }
            }
        });

        // 准备待返回的配置项，把准备好的 legendData、series 传入。
        const option = {
            legend: {
                icon: "none",
                orient: "vertical", // 改为垂直排列
                data: pieData.map((dItem, dIndex) => {
                    return {
                        name: dItem.name,
                        textStyle: {
                            rich: {
                                iconName: {
                                    width: fontSize,
                                    height: fontSize,
                                    // itemGap: fontSize,
                                    backgroundColor: dItem.itemStyle.color
                                },
                                percent: {
                                    color: dItem.itemStyle.color
                                },
                                name: {
                                    fontSize,
                                    width: fontSize * 4, // 增加宽度
                                    padding: [0, 0, 0, fontSize * 0.5] // 增加padding
                                },
                                value: {
                                    fontFamily: "PangMenZhengDao",
                                    fontSize,
                                    width: fontSize * 4, // 增加宽度
                                    padding: [0, 0, 0, fontSize * 0.5] // 增加padding
                                },
                                percent: {
                                    fontFamily: "PangMenZhengDao",
                                    fontSize,
                                    padding: [0, 0, 0, fontSize] // 增加padding
                                },
                            }
                        }
                    };
                }),
                left: fontSize * 14, // 调整位置
                top: fontSize * 4, // 调整位置
                itemGap: fontSize * 0.3, // 调整间距
                itemWidth: fontSize,
                itemHeight: fontSize,
                selectedMode: false, // Disable legend selection
                textStyle: {
                    color: "#fff",
                },
                formatter: name => {
                    let obj = pieData.find(item => item.name === name);
                    let datas = pieData;
                    let total = 0;
                    for (let i = 0; i < datas.length; i++) {
                        total += Number(datas[i].value);
                    }
                    const arr = [`{iconName|}{name|${name}}{value|${obj.value}${obj.unit}}`];
                    return arr.join("");
                }
            },
            xAxis3D: {},
            yAxis3D: {},
            zAxis3D: {},
            grid3D: {
                viewControl: {
                    autoRotate: true // Auto-rotate
                },
                left: "2%",
                top: "0%",
                width: "50%",
                show: false,
                boxHeight: 40
            },
            series,

        };
        if (props.haveTotal) {
            const t = props.graphicTitle === '总数'
            const leftItem = {
                type: "text",
                left: "30%",
                top: "15%",
                style: {
                    text: `${total}`,
                    textAlign: "center",
                    fontSize,
                    fill: "#ffff00"
                }
            }
            const rightItem = {
                type: "text",
                right: '20%',
                top: "15%",
                style: {
                    text: `${total}`,
                    textAlign: "center",
                    fontSize,
                    fill: "#ffff00"
                }
            }
            const item = t ? rightItem : leftItem
            const defaultGraphic = [
                {
                    type: "text",
                    left: t ? "44%" : "16%",
                    top: "15%",
                    style: {
                        text: props.graphicTitle,
                        textAlign: "center",
                        fill: "#fff",
                        fontSize
                    }
                },
                item
            ]
            const unit = chartData.value[0].unit
            option.graphic = [
                {
                    type: "text",
                    left: t ? "44%" : "16%",
                    top: "15%",
                    style: {
                        text: props.graphicTitle,
                        textAlign: "center",
                        fill: "#fff",
                        fontSize
                    }
                },
                {
                    type: "text",
                    left: "30%",
                    top: t ? "15%" : '12%',
                    style: {
                        text: `${total}`,
                        textAlign: "center",
                        fontSize: t ? fontSize : fontSize * 1.5,
                        fill: t ? "#ffff00" : "#4aa5b5",
                        fontWeight: "bold"
                    }
                },
                {
                    type: "text",
                    left: "37%",
                    top: t ? "15%" : '12%',
                    style: {
                        text: `${unit}`,
                        textAlign: "center",
                        fontSize: t ? fontSize : fontSize * 1.5,
                        fill: '#fff',
                        fontWeight: "bold"
                    }
                },
            ]
            if (t) {
                const g = {
                    type: "image",
                    left: t ? "44%" : "24%",
                    top: "20%",
                    style: {
                        image: bgimage,
                        width: 250,
                        height: 10
                    }
                }
                option.graphic = [...defaultGraphic, g]
            }
        }
        return option;
    }

    const serData = _.map(chartData.value, (dItem, index) => {
        return {
            ...dItem,
            value: Number(dItem.value),
            itemStyle: {
                color: colors[index]
            }
        };
    });
    // 传入数据生成 option
    const option = getPie3D(serData, 0.8);
    mChart.setOption(option);
};
</script>