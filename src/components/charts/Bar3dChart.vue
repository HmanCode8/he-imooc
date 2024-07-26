<template>
    <div class>
        <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>

    </div>
</template>

<script setup>
import { h, onMounted, ref, watch, toRef } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import useRootFontSize from '@/hooks/useRootFontSize';
import _ from 'lodash'

const props = defineProps({
    data: {
        type: Array,
    }
})
const target = ref(null)
const chartData = toRef(props, 'data')
const chartFontSize = toRef(useRootFontSize(), 'value')
let mChart = null

onMounted(() => {
    mChart = echarts.init(target.value);
});

watch(chartData, (val) => {
    renderChart();
})
const handleResize = () => {
    const fontSize = useRootFontSize()
    renderChart(fontSize.value);
    if (mChart) {
        mChart.resize();
    }
};

const renderChart = (fontSize = chartFontSize) => {
    const xData = _.map(chartData.value, c => c.name)
    const data = _.map(chartData.value, c => c.value)
    const option = {
        title: {
            text: '单位：mm',
            right: '5%',
            textStyle: {
                fontSize,
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: function (params) {
                var str = `管径：${params[0].axisValue}</br>${params[0].marker} 长度: ${params[0].value}mm`;
                return str;
            },
        },
        legend: {
            show: false,
            data: ['管径'],
            textStyle: { fontSize, color: '#fff' },
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 15,
            top: '-1%',
            right: '2%',
        },
        textStyle: {
            color: '#ffffff',
        },
        grid: {
            containLabel: true,
            left: '6%',
            top: '20%',
            bottom: '6%',
            right: '6%',
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                lineStyle: {
                    color: '#B5B5B5',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#ffffff',
                    fontSize, // 修改 x 轴字体大小
                },
            },
        },
        yAxis: {
            // name: "个",
            // nameTextStyle: {
            //     verticalAlign: 'middle',
            //     align: "right"
            // },
            type: 'value',
            min: 0,
            boundaryGap: ['20%', '60%'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#61d2e0',
                },
            },
            splitLine: {
                lineStyle: {
                    color: ['#61d2e0'],
                    type: 'dashed',
                    opacity: 0.5,
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize, // 修改 y 轴字体大小
                },
            },
        },
        series: [
            {
                name: "管径",
                data: data,
                type: 'bar',
                barMaxWidth: 'auto',
                barWidth: 22,
                itemStyle: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#0FA0FF',
                            },
                            {
                                offset: 1,
                                color: '#24F3FF',
                            },
                        ],
                    },
                },
            },
            {
                data: data,
                type: 'pictorialBar',
                barMaxWidth: '10',
                symbolPosition: 'end',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [22, 10],
                zlevel: 2,
            },
        ],
    };
    mChart.setOption(option)
}
</script>
