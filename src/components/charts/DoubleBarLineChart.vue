<template>
    <div ref="target" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, toRef, watch, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import useRootFontSize from "@/hooks/useRootFontSize";
import _, { max, split } from 'lodash';

const props = defineProps({
    title: {
        title: String,
        default: '--',
    },
    data: {
        type: Array,
    },
    legendData: {
        type: Array,
        default: () => []
    },
    colors: {
        type: Array,
        default: () => ['#0FA0FF', '#24F3FF'],
    },
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
    mChart && mChart.resize();
});

const renderChart = (fontSize) => {
    const maxVal = _.get(_.maxBy(chartData.value, v => v.planned), 'planned', 0) * 1.2;  // 最大值
    const option = {
        title: {
            text: props.title,
            textStyle: {
                color: '#fff',
                fontSize // 设置标题字体大小
            },
            right: '1%',
            top: '3%'
        },
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize // 设置 tooltip 字体大小
            },
            formatter: function (params) {
                return params.map(function (item) {
                    let unit = '次';  // 默认单位是“次”
                    if (item.seriesName === '巡检完成率') {
                        unit = '%';  // 如果是 "巡检完成率"，则单位改为“%”
                    }
                    return item.seriesName + ':' + item.value + unit;
                }).join('<br/>');
            },
            axisPointer: {
                type: 'shadow'
            }
        },

        legend: {
            data: props.legendData,
            textStyle: {
                color: '#fff',
                fontSize // 设置图例字体大小
            },
            top: fontSize * 0.1,
            right: fontSize * 15,
            itemWidth: fontSize * 1.5,
            itemHeight: fontSize,
            itemGap: fontSize * 2,
            // bottom: fontSize,
            rich: {
                a: {
                    color: '#f00',
                    fontSize,
                    lineHeight: 20,
                    align: 'center'
                }
            }
        },
        grid: {
            left: '3%',
            top: '25%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            max: 'dataMax',
            type: 'category',
            data: chartData.value.map(item => item.name),
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                fontSize // 设置 x 轴标签字体大小
            }
        },
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: maxVal,
                interval: 50,
                axisLabel: {
                    formatter: '{value}',
                    fontSize // 设置 y 轴标签字体大小
                },
                axisLine: {
                    lineStyle: {
                        show: false,
                        color: '#fff',
                        type: 'dashed'
                    }
                },
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                name: '巡检完成量',
                type: 'bar',
                barWidth: '30%',
                data: chartData.value.map(item => item.completed),
                label: {
                    show: true, // 显示数值
                    position: "top", // 在柱状图顶部显示
                    fontSize,
                    color: "#fff"
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#6ae5ea'
                        },
                        {
                            offset: 1,
                            color: 'rgba(22,75,247,0.1  )' // 调整透明度
                        }
                    ])
                }
            },
            {
                name: '计划巡检量',
                type: 'bar',
                barWidth: '30%',
                data: chartData.value.map(item => item.planned),
                label: {
                    formatter: '{c}',
                    show: true, // 显示数值
                    position: "top", // 在柱状图顶部显示
                    fontSize,
                    color: "#fff"
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "#4aa4ef"
                        },
                        {
                            offset: 1,
                            color: "rgba(22,75,247,0.1)"
                        }
                    ])
                }
            },
            {
                name: '巡检完成率',
                type: 'line',
                data: chartData.value.map(item => Number(item.rate)),
                itemStyle: {
                    color: '#FFA500'
                },

            }
        ]
    };

    mChart.setOption(option)
}
</script>
