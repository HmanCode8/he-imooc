<template>
    <div class>
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
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
        type: Number,
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

let mChart = null;
onMounted(() => {
    nextTick(() => {
        if (target.value) {
            mChart = echarts.init(target.value);
            renderChart(rootFontSize.value);
        }
    });
});


watch([props.data, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    mChart && mChart.resize();
});

const renderChart = (fontSize) => {
    const unit = props.data[0].unit || "";
    const total = props.total !== 0 ? props.total : _.sum(_.map(props.data, d => Number(d.value)), "value");
    const optionData = _.map(props.data, (dItem, index) => {
        return {
            ...dItem,
            value: Number(dItem.value),
            itemStyle: {
                color: colors[index]
            }
        };
    })
    function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
        const midRatio = (startRatio + endRatio) / 2;
        const startRadian = startRatio * Math.PI * 2;
        const endRadian = endRatio * Math.PI * 2;
        const midRadian = midRatio * Math.PI * 2;
        // 如果只有一个扇形，则不实现选中效果。
        if (startRatio === 0 && endRatio === 1) {
            isSelected = false;
        }
        k = typeof k !== "undefined" ? k : 1 / 3;
        const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
        const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
        // 鼠标滑过时外环放大大小
        const hoverRate = isHovered ? 1.05 : 1;
        // 返回曲面参数方程
        return {
            u: { min: -Math.PI, max: Math.PI * 3, step: Math.PI / 32 },
            v: { min: 0, max: Math.PI * 2, step: Math.PI / 20 },

            x(u, v) {
                if (u < startRadian) { return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate; }
                if (u > endRadian) { return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate; }
                return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y(u, v) {
                if (u < startRadian) { return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate; }
                if (u > endRadian) { return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate; }
                return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            z(u, v) {
                if (u < -Math.PI * 0.5) { return Math.sin(u); }
                if (u > Math.PI * 2.5) { return Math.sin(u) * h * 0.1; }
                // 当前图形的高度是Z根据h（每个value的值决定的）
                return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
            }
        };
    }
    // 可做为调整内环大小 0为实心圆饼图，大于0 小于1 为圆环
    function getPie3D(pieData, internalDiameterRatio) {
        const series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        const legendData = [];
        const k = typeof internalDiameterRatio !== "undefined" ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;
        for (let i = 0; i < pieData.length; i += 1) {
            sumValue += pieData[i].value;
            const seriesItem = {
                name: typeof pieData[i].name === "undefined" ? `series${i}` : pieData[i].name,
                type: "surface",
                parametric: true,
                wireframe: { show: false },
                pieData: pieData[i],
                pieStatus: { selected: false, hovered: false, k }
            };
            if (typeof pieData[i].itemStyle !== "undefined") {
                const { itemStyle } = pieData[i];
                // eslint-disable-next-line no-unused-expressions
                typeof pieData[i].itemStyle.color !== "undefined" ? (itemStyle.color = pieData[i].itemStyle.color) : null;
                // eslint-disable-next-line no-unused-expressions
                typeof pieData[i].itemStyle.opacity !== "undefined" ? (itemStyle.opacity = pieData[i].itemStyle.opacity) : null;
                seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
        }
        for (let i = 0; i < series.length; i += 1) {
            endValue = startValue + series[i].pieData.value;
            series[i].pieData.startRatio = startValue / sumValue;
            series[i].pieData.endRatio = endValue / sumValue;
            series[i].parametricEquation = getParametricEquation(
                series[i].pieData.startRatio,
                series[i].pieData.endRatio,
                false,
                false,
                k,
                10 // 在此处传入饼图初始高度h
            );
            startValue = endValue;
            legendData.push(series[i].name);
        }
        const t = props.graphicTitle === '总数'
        // 准备待返回的配置项，把准备好的series 传入。
        const option = {
            // title: {
            //     // text: "立体旋转饼图/环图",
            //     top: "1%",
            //     textAlign: "left",
            //     left: "1%",
            //     textStyle: {
            //         color: "#38adb9",
            //         fontSize: 32,
            //         fontWeight: "600"
            //     }
            // },
            legend: {
                show: true,
                type: "scroll",
                right: 50,
                top: 20,
                orient: "vertical", // 纵向
                icon: "rect", // icon 类型
                itemHeight: 12, // icon高度
                itemWidth: 12, // icon 宽度
                itemGap: 8, // 图例间隔
                textStyle: {
                    color: "#fff",
                    fontSize,
                    fontWeight: "400"
                },
                formatter: name => {
                    if (pieData.length) {
                        const item = pieData.filter(item => item.name === name)[0];
                        return `  ${name}：${item.value}${unit}`;
                    }
                }
            },
            color: ["#5394f7", "#fdf551", "#79fb75", "#f2a940", "#5394f7", "#fdf551", "#79fb75", "#f2a940", "#ffda49"],
            tooltip: {
                formatter: params => {
                    if (params.seriesName !== "mouseoutSeries") {
                        return `${params.marker}${params.seriesName}：${pieData[params.seriesIndex].value}${unit}`;
                    }
                    return "";
                }
            },
            xAxis3D: { min: -1, max: 1 },
            yAxis3D: { min: -1, max: 1 },
            zAxis3D: { min: -1, max: 1 },
            grid3D: {
                show: false,
                boxHeight: 40, // 修改立体饼图的高度
                top: "-10%",
                left: "-20%",
                viewControl: {
                    // 3d效果可以放大、旋转等，
                    alpha: 20, // 饼图翻转的程度
                    beta: 30,
                    rotateSensitivity: 1,
                    zoomSensitivity: 0,
                    panSensitivity: 0,
                    autoRotate: true, // 是否自动旋转
                    distance: 300 // 距离越小看到的饼图越大
                }
            },
            graphic: [
                {
                    type: "text",
                    left: '20%',
                    top: 0,
                    style: {
                        text: '总数',
                        textAlign: "center",
                        fill: "#fff",
                        fontSize
                    }
                },
                {
                    type: "text",
                    left: "30%",
                    top: 0,
                    style: {
                        text: `${total}`,
                        textAlign: "center",
                        fontSize: t ? fontSize : fontSize * 1.5,
                        fill: '#ffff00',
                        fontWeight: "bold"
                    }
                },
                {
                    type: "text",
                    left: "40%",
                    top: 0,
                    style: {
                        text: `${unit}`,
                        textAlign: "center",
                        fontSize: t ? fontSize : fontSize * 1.5,
                        fill: '#fff',
                        fontWeight: "bold"
                    }
                },
                {
                    type: "image",
                    left: "20%",
                    itemGap: 10,
                    top: "0%",
                    style: {
                        image: bgimage,
                        width: 130,
                        height: 10
                    }
                }
            ],
            series
        };
        return option;
    }

    const option = getPie3D(optionData, 0)

    mChart.setOption(option);
};
</script>