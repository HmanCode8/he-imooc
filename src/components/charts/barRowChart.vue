<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, toRef, watch } from 'vue'
import * as echarts from 'echarts'
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

const target = ref(null)
const chartData = toRef(props, 'data')
const rootFontSize = useRootFontSize();
let mChart = null
onMounted(() => {
    mChart = echarts.init(target.value);
});
const colors = [
    ['#0175c4', '#03163a'],
    ['#01a0c7', '#032748'],
    ['#b99c0b', '#1a232b'],
    ['#c16b27', 'transparent'],
    ['#c16b27', 'transparent'],
    ['#c16b27', 'transparent'],
    ['#c16b27', 'transparent'],
    ['#FF3939', 'transparent']
];


watch([chartData, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    if (mChart) {
        mChart.resize();
    }
});

const handleResize = (size) => {
    const fontSize = useRootFontSize()
    renderChart(fontSize.value)
    mChart.resize()
}

const renderChart = (fontSize) => {
    const { data } = props
    const sum = data.reduce((acc, cur) => acc + Number(cur.value), 0)
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
            max: sum
        },
        yAxis: {
            type: 'category',
            data: data.map(item => item.name),
            axisLine: { show: true },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                let result = '';
                params.forEach(function (item) {
                    if (item.seriesType === 'bar' && item.seriesIndex === 0) {
                        result += `${item.name}: ${item.value} km<br/>`;
                    }
                });
                return result;
            }
        },
        series: [
            {
                type: 'bar',
                data: data.map((item, index) => ({
                    value: Number(item.value),
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: index % 2 === 0 ? '#408391' : '#8c8441' },
                            { offset: 1, color: index % 2 === 0 ? '#71f4e3' : '#e6c443' }
                        ])
                    },
                })),
                barWidth: '20%'
            },
            {
                type: 'bar',
                data: data.map(d => sum),  // 使用最大值来设置背景柱子的高度
                barGap: '-100%',
                barWidth: '20%',
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'  // 设置背景柱子的颜色
                },
                label: {
                    show: true,
                    position: 'right',
                    distance: 10,  // 调整数值和柱子之间的距离
                    formatter: (params) => `${data[params.dataIndex].value} km`,  // 显示对应的数值并加单位
                    color: '#fff',
                    fontSize
                }
            },
            {
                type: 'bar',
                data: data.map(d => d.value),
                barGap: '-100%',
                barWidth: '20%',
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        ]
    };
    mChart.setOption(option);
}
</script>
