<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const target = ref(null)
let mChart = null
onMounted(() => {
    mChart = echarts.init(target.value)
})

const handleResize = (size) => {
    const fontSize = useRootFontSize()
    renderChart(fontSize)
    mChart.resize()
}
const renderChart = (fontSize) => {
    const datas = [
        { name: "taskA", percent: "58", total: "158111", finished: "82311" },
        { name: "taskB", percent: "76", total: "16522", finished: "9873" },
        { name: "taskC", percent: "98", total: "5823", finished: "5500" },
        { name: "taskD", percent: "77", total: "3244", finished: "2355" },
        { name: "taskE", percent: "85", total: "15344", finished: "12009" }
    ];
    const yData = datas.map(item => item.name);
    const zData = datas.map(item => item.finished);
    const pData = datas.map(item => item.percent);
    // 设置等长的背景柱状图
    const maxData = new Array(yData.length).fill(100);
    const option = {
        backgroundColor: "#0b1a2a",
        grid: {
            left: "10%",
            right: "10%",
            bottom: 0,
            top: 0,
            containLabel: false
        },
        xAxis: [
            {
                show: true
            },
            {
                show: false,
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                show: true,
                data: yData,
                position: "left",
                axisLabel: {
                    lineHeight: 0,
                    verticalAlign: "bottom",
                    fontSize,
                    color: "#e6a635",
                    formatter: "{value}"
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            {
                show: true,
                data: zData,
                offset: 5,
                position: "right",
                axisLabel: {
                    lineHeight: 0,
                    verticalAlign: "bottom",
                    fontSize,
                    color: "#19E5E6",
                    formatter: "{value}"
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: "进度",
                show: true,
                type: "bar",
                barGap: "-100%",
                xAxisIndex: 1,
                barWidth: 10,
                itemStyle: {
                    borderRadius: 10,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#0A7782', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#81EFF3', // 0% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    }
                },
                label: {
                    show: true,
                    position: 'insideRight',
                    formatter: '{c}%',
                    offset: [-10, 2],
                    color: '#fff'
                },
                labelLine: {
                    show: false
                },
                z: 2,
                data: pData,
                animationDelay: 1000,
                animationDuration: 1000
            },
            {
                name: "百分比",
                z: 1,
                show: true,
                type: "bar",
                xAxisIndex: 1,
                barGap: "-100%",
                barWidth: 10,
                itemStyle: {
                    borderRadius: 4,
                    color: "rgba(13, 55, 78, 1)"
                },
                label: {
                    show: false,
                },
                data: maxData
            }
        ]
    };

    mChart.setOption(option)
}
</script>
