<template>
    <div class="">
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRef, watch, onUnmounted } from 'vue'
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
        default: 0
    },
    haveTop: {
        type: Boolean,
        default: false
    }
})

const target = ref(null)
const chartData = toRef(props.data)
const rootFontSize = useRootFontSize();
let mChart = null

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
    const data = chartData.value
    const isPrecent = _.some(data, item => item.unit === '%')
    const barWidth = "50%"
    // 倒叙排序
    let sum = isPrecent ? 100 : data.reduce((acc, cur) => acc + Number(cur.value), 0)
    if (props.baseSum) {
        sum = 200
    }
    const unit = data[0].unit || 'km'

    const labelTip = props.haveTop ? {
        show: true,
        position: 'right',
        distance: 13,  // 调整数值和柱子之间的距离
        formatter: (params) => {
            const dataIndex = params.dataIndex;
            let style = 'normal';
            if (dataIndex === 5) {
                style = 'first';
            } else if (dataIndex === 4) {
                style = 'second';
            } else if (dataIndex === 3) {
                style = 'third';
            }
            return `{${style}|${data[dataIndex].value} ${unit}}`;
        },  // 显示对应的数值并加单位
        rich: {
            normal: {
                color: '#fff',
                fontSize: fontSize
            },
            first: {
                color: '#ffba00', // 金色，第一名
                fontSize: fontSize
            },
            second: {
                color: '#ffba00', // 银色，第二名
                fontSize: fontSize
            },
            third: {
                color: '#ffba00', // 铜色，第三名
                fontSize: fontSize
            }
        }
    } : {
        show: true,
        position: 'right',
        distance: 13,  // 调整数值和柱子之间的距离
        formatter: (params) => {
            return `${data[params.dataIndex].value} ${unit}`
        },  // 显示对应的数值并加单位
        color: '#fff',
        fontSize
    }
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
                    // const top3 = [0, 1, 2]
                    // const topColors = ['#00f', '#0f0', '#f00']
                    // let startColor = ''
                    // let endColor = ''
                    // if (!top3.includes(index) && props.haveTop) {
                    //     startColor = topColors[index % 3]
                    //     endColor = topColors[index % 3]
                    // } else {
                    const startColor = index % 2 === 0 ? '#408391' : '#8c8441'
                    const endColor = index % 2 === 0 ? '#71f4e3' : '#e6c443'
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
                barWidth
            },
            {
                type: 'bar',
                data: data.map(d => sum),  // 使用最大值来设置背景柱子的高度
                barGap: '-100%',
                barWidth,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'  // 设置背景柱子的颜色
                },
                label: labelTip
            },
            {
                type: 'bar',
                data: data.map(d => d.value),
                barGap: '-100%',
                barWidth,
                itemStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        ]
    };
    mChart.setOption(option);
}
</script>
