<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
  areaData: {
    type: Array,
  }
});

const target = ref(null)
let mChart = null
onMounted(() => {
    mChart = echarts.init(target.value)
})

const handleResize = (size) => {
    const fontSize = useRootFontSize()
    renderChart(fontSize.value)
    mChart.resize()
}
const data = [
    { range: '5年以下', value: 20 },
    { range: '5~10年', value: 35 },
    { range: '10~15年', value: 15 },
    { range: '15~20年', value: 40 },
    { range: '20年以上', value: 30 },
];

const renderChart = (fontSize) => {
    const option = {
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
            max: 200
        },
        yAxis: {
            type: 'category',
            data: props.areaData.map(item => item.name),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize
            }
        },
        series: [
            {
                type: 'bar',
                data: props.areaData.map((item, index) => ({
                    value: item.value,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: index % 2 === 0 ? '#408391' : '#8c8441' },
                            { offset: 1, color: index % 2 === 0 ? '#71f4e3' : '#e6c443' }
                        ])
                    },
                })),
                barWidth: '20%',
            },
            {
                type: 'bar',
                data: props.areaData.map((item) => 200),
                barGap: '-100%',
                barWidth: '20%',
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: props.areaData.map(item => ({
                        value: '212',
                    })),
                    color: '#fff',
                    fontSize
                }
            }
        ]
    };
    mChart.setOption(option);
}
</script>
