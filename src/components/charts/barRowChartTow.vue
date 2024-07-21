<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

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
    renderChart()
})

const handleResize = () => {
    mChart.resize()
}
const data = [
    { range: '5年以下', value: 20, colorStart: '#334d69', colorEnd: '#4a5757' },
    { range: '5~10年', value: 35, colorStart: '#4a5757', colorEnd: '#e6c643' },
    { range: '10~15年', value: 15, colorStart: '#334d69', colorEnd: '#4a5757' },
    { range: '15~20年', value: 40, colorStart: '#4a5757', colorEnd: '#e6c643' },
    { range: '20年以上', value: 30, colorStart: '#334d69', colorEnd: '#4a5757' },
];
const renderChart = () => {

    const option = {
        // backgroundColor: '#0A2E5E',
        grid: {
            left: '3%',
            right: '15%',
            top: '3%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            show: false,
            type: 'value',
            max: 46.04
        },
        yAxis: {
            type: 'category',
            data: data.map(item => item.range),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize: 14
            }
        },
        series: [
            {
                type: 'bar',
                data: data.map(item => ({
                    value: item.value,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: item.colorStart }, // 起始颜色
                            { offset: 1, color: item.colorEnd }   // 结束颜色
                        ])
                    }
                })),
                barWidth: '30%',
                // label: {
                //     show: true,
                //     position: 'right',
                //     formatter: '{c} km',
                //     color: '#fff'
                // }
            },
            {
                type: 'bar',
                data: data.map(() => 46.04),
                barGap: '-100%',
                barWidth: '30%',
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: '46.04 km',
                    color: '#fff',
                    fontSize: 12
                }
            }
        ]
    };
    mChart.setOption(option)
}
</script>
