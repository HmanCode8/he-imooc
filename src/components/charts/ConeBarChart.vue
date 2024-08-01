<template>
    <div class="">
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRef, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import useRootFontSize from '@/hooks/useRootFontSize';
import _ from 'lodash';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        default: '区县设备覆盖率'
    }
});

const target = ref(null);
const chartData = toRef(props, 'data');
const rootFontSize = useRootFontSize();
let mChart = null;

onMounted(() => {
    mChart = echarts.init(target.value);
    renderChart(rootFontSize.value);
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


const renderChart = (fontSize = chartFontSize) => {
    const xLabel = _.map(props.data, item => item.name);
    const dataValue = _.map(props.data, item => item.value);
    const unit = props.data[0].unit || '';
    const option = {
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 0)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize,
                align: "left"
            },
            formatter: function (params) {
                let result = '';
                params.forEach(param => {
                    result += `${param.seriesName}: ${param.value}${unit}<br/>`;
                });
                return result;
            }
        },

        grid: {
            left: "7%",
            right: "7%",
            top: "10%",
            bottom: "2%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                axisLine: {
                    //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },
                axisLabel: {
                    //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: "#FFFFFF",
                        fontSize
                    }
                },
                splitLine: {
                    show: false,
                    type: "dashed",
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },

                axisTick: {
                    show: false
                },
                data: xLabel
            }
        ],
        yAxis: [
            {
                // name: "(万元)",
                nameTextStyle: {
                    color: "white",
                    fontSize,
                    padding: [0, 0, 0, -30]
                },
                // minInterval: 1,
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#1160a0",
                        type: "dashed"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize
                    },
                    formatter: function (value) {
                        return value + unit;
                    }
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: props.title,
                type: "pictorialBar",
                barWidth: "25%",
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#fff",
                            fontSize
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#66A6FF" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#015EB4" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }, //渐变颜色
                        borderColor: "#d1ae36",
                        borderWidth: 0
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                data: dataValue
            }
        ],
        dataZoom: [
            {
                xAxisIndex: 0, // 这里是从X轴的0刻度开始
                show: false, // 是否显示滑动条，不影响使用
                type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 5 // 展示到第几个。
            }
        ]
    }

    mChart.setOption(option);
};
</script>

<style scoped>
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>