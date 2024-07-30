<template>
    <div class>
        <div class="chart-container w-full h-60">
            <div ref="target" class="w-full h-full"></div>
        </div>
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
            renderChart();
        }
    });
});


watch([props.data, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    mChart && mChart.resize();
});

const renderChart = (fontSize) => {
    const data = _.map(props.data, (dItem, index) => {
        return {
            ...dItem,
            value: Number(dItem.value),
            itemStyle: {
                color: colors[index]
            }
        };
    })
    // 使用3d饼图需要引入echarts-gl    import "echarts-gl";
    function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
        // 计算
        let midRatio = (startRatio + endRatio) / 2;

        let startRadian = startRatio * Math.PI * 2;
        let endRadian = endRatio * Math.PI * 2;
        let midRadian = midRatio * Math.PI * 2;
        isSelected = false;
        k = typeof k !== 'undefined' ? k : 1 / 3;
        let offsetX = isSelected ? Math.sin(midRadian) * 0.1 : 0;
        let offsetY = isSelected ? Math.cos(midRadian) * 0.1 : 0;
        let hoverRate = isHovered ? 1.05 : 1;
        return {
            u: {
                min: -Math.PI,
                max: Math.PI * 3,
                step: Math.PI / 32,
            },

            v: {
                min: 0,
                max: Math.PI * 2,
                step: Math.PI / 20,
            },

            x: function (u, v) {
                if (u < startRadian) {
                    return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                if (u > endRadian) {
                    return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
            },

            y: function (u, v) {
                if (u < startRadian) {
                    return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
                }
                if (u > endRadian) {
                    return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
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
            },
        };
    }

    function getPie3D(pieData, internalDiameterRatio) {
        let series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        let legendData = [];
        let k =
            typeof internalDiameterRatio !== 'undefined'
                ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio)
                : 1 / 3;
        for (let i = 0; i < pieData.length; i++) {
            sumValue += pieData[i].value;

            let seriesItem = {
                name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
                type: 'surface',
                parametric: true,
                wireframe: {
                    show: false,
                },
                pieData: pieData[i],
                pieStatus: {
                    selected: false,
                    hovered: false,
                    k: 1 / 10,
                },
            };
            if (typeof pieData[i].itemStyle != 'undefined') {
                let itemStyle = {};
                typeof pieData[i].itemStyle.color != 'undefined' ? (itemStyle.color = pieData[i].itemStyle.color) : null;
                typeof pieData[i].itemStyle.opacity != 'undefined'
                    ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
                    : null;

                seriesItem.itemStyle = itemStyle;
            }
            series.push(seriesItem);
        }
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

        let option = {
            legend: {
                right: '20%', // 图例在右边
                top: '20%',
                width: '50%',
                textStyle: {
                    color: '#FFFFFF',
                    fontSize,
                },
                data: legendData,
                formatter: (params) => {
                    return params;
                },
            },
            xAxis3D: {},
            yAxis3D: {},
            zAxis3D: {},
            grid3D: {
                viewControl: {
                    autoRotate: false,
                },
                left: '0%', // 图表从左边开始
                width: '40%', // 图表占据大部分宽度
                show: false,
                boxHeight: 20,
            },
            series: series,
        };


        return option;
    }

    const option = getPie3D(data, 0.7);

    mChart.setOption(option);
};
</script>