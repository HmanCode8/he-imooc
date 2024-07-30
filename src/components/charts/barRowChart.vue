<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, toRef, watch } from 'vue'
import * as echarts from 'echarts'
import useRootFontSize from '@/hooks/useRootFontSize';
import _ from 'lodash'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    baseSum: {
        type: Number,
        default: false
    },
    haveTop: {
        type: Boolean,
        default: false
    }
})

const target = ref(null)
const { data } = toRef(props)
const rootFontSize = useRootFontSize();
let mChart = null
onMounted(() => {
    mChart = echarts.init(target.value);
});

watch([data, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    mChart && mChart.resize();
});

const handleResize = (size) => {
    const fontSize = useRootFontSize()
    renderChart(fontSize.value)
    mChart.resize()
}

const renderChart = (fontSize) => {
    const { data } = props
    console.log('data==', data)
    const isPrecent = _.some(data, item => item.unit === '%')
    // 倒叙排序
    let sum = isPrecent ? 100 : data.reduce((acc, cur) => acc + Number(cur.value), 0)
    if (props.baseSum) {
        sum = 200
    }
    const unit = data[0].unit || 'km'
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
                        result += `${item.name}: ${item.value} ${unit}<br/>`;
                    }
                });
                return result;
            }
        },
        series: [
            {
                type: 'bar',
                data: data.map((item, index) => {
                    const top3 = [0, 1, 2]
                    const topColors = ['#00f', '#0f0', '#f00']
                    let startColor = ''
                    let endColor = ''
                    if (!top3.includes(index) && props.haveTop) {
                        startColor = topColors[index % 3]
                        endColor = topColors[index % 3]
                    } else {
                        startColor = index % 2 === 0 ? '#408391' : '#8c8441'
                        endColor = index % 2 === 0 ? '#71f4e3' : '#e6c443'
                    }
                    return {
                        value: Number(item.value),
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: startColor },
                                { offset: 1, color: endColor },
                            ])
                        },
                    }
                }),
                barWidth: '25%'
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
                    distance: 13,  // 调整数值和柱子之间的距离
                    formatter: (params) => `${data[params.dataIndex].value} ${unit}`,  // 显示对应的数值并加单位
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
