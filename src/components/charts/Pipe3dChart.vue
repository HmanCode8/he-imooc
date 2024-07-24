<template>
    <div class>
        <div class="chart-container w-full h-60">
            <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
        </div>
    </div>
</template>

<script setup>
import { h, onMounted, ref, toRef, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import bgimage from "@/assets/imgs/main/title-h-third.png";
import useRootFontSize from '@/hooks/useRootFontSize';

const rootFontSize = useRootFontSize();

const fontSize = toRef(rootFontSize.value);

const props = defineProps({

    legend: {
        type: Array
    },
    pieChartData: {
        type: Object,
        required: false,
        default: [
            { name: "燃气", value: 60, color: "#FF6384" },
            { name: "供水", value: 23, color: "#FFCE56" },
            { name: "雨水", value: 25, color: "#36A2EB" },
            { name: "污水", value: 99, color: "#FFA07A" },
            { name: "道路", value: 60, color: "#0F7C7C" },
            { name: "桥梁", value: 23, color: "#0F7C7C" },
            { name: "路灯", value: 25, color: "#3B40A2" },
        ]
    }
});

const target = ref(null);
let mChart = null;
onMounted(() => {
    mChart = echarts.init(target.value);
});

const handleResize = () => {
    if (mChart) {
        mChart.resize();
    }
    renderChart();
};
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
    let option = {
        //   title: {
        //     text: "总数            324个",
        //     textStyle: {
        //       color: "#fff",
        //       fontFamily:"PangMenZhengDao",
        //     },
        //     right:15,
        //     top:20
        //   },
        legend: {
            icon: "none",
            orient: "vertical", // 改为垂直排列
            data: pieData.map((dItem, dIndex) => {
                return {
                    name: dItem.name,
                    textStyle: {
                        rich: {
                            iconName: {
                                width: 12,
                                height: 12,
                                backgroundColor: dItem.itemStyle.color
                            },
                            percent: {
                                color: dItem.itemStyle.color
                            },
                            name: {
                                fontSize: fontSize.value,
                                width: 20,
                                padding: [0, 0, 0, 10]
                            },
                            value: {
                                fontFamily: "PangMenZhengDao",
                                fontSize: fontSize.value,
                                width: 20,
                                padding: [0, 0, 0, 30]
                            },
                            percent: {
                                fontFamily: "PangMenZhengDao",
                                fontSize: fontSize.value,
                                padding: [0, 0, 0, 30]
                            },
                            unit: {
                                color: "#ACDCE4",
                                fontSize: fontSize.value,
                                padding: [0, 0, 0, 5]
                            }
                        }
                    }
                };
            }),
            left: "40%", // 调整位置
            top: "26%", // 调整位置
            itemGap: 10, // 调整间距
            itemWidth: 12,
            itemHeight: 12,
            selectedMode: false, // Disable legend selection
            textStyle: {
                color: "#fff",
                fontSize: fontSize.value,
                fontFamily: "Source Han Sans CN",
                rich: {
                    name: {
                        fontSize: fontSize.value,
                        width: 40,
                        padding: [0, 0, 0, 10]
                    },
                    value: {
                        fontSize: fontSize.value,
                        width: 20,
                        padding: [0, 0, 0, 30]
                    },
                    percent: {
                        fontSize: fontSize.value,
                        padding: [0, 0, 0, 30]
                    },
                    unit: {
                        fontSize: fontSize.value,
                        padding: [0, 0, 0, 5]
                    }
                }
            },
            formatter: name => {
                let obj = pieData.find(item => item.name === name);
                let datas = pieData;
                let total = 0;
                let target = obj.value;
                for (let i = 0; i < datas.length; i++) {
                    total += Number(datas[i].value);
                }
                const arr = [`{iconName|}{name|${name}}{percent|(${(target / total * 100).toFixed(2)}%)}{value|${obj.value}个}`];
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
            top: "2%",
            width: "40%",
            show: false,
            boxHeight: 60
        },
        series: series,
        graphic: [
            {
                type: "text",
                left: "44%",
                top: "15%",
                style: {
                    text: "总数",
                    textAlign: "center",
                    fill: "#fff",
                    fontSize: fontSize.value,
                }
            },
            {
                type: "text",
                right: "10%",
                top: "15%",
                style: {
                    text: "324个",
                    textAlign: "center",
                    fontSize: fontSize.value,
                    fill: "#ffff00"
                }
            },
            {
                type: "image",
                left: "44%",
                top: "20%",
                style: {
                    image: bgimage,
                    width: 250,
                    height: 10
                }
            }
        ]
    };
    return option;
}
const serData = props.pieChartData.map((dItem, index) => {
    return {
        ...dItem,
        value: Number(dItem.value),
        itemStyle: {
            color: dItem.color
        }
    };
});
const renderChart = (fontSize) => {

    // 传入数据生成 option
    const option = getPie3D(serData, 0.8);
    mChart.setOption(option);
};
</script>