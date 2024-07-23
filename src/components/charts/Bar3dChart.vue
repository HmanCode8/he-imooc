<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
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
    renderChart(fontSize.value)
    mChart.resize()
}

var xData = ['<110', '110~250', '250~630', '大于630']
var data1 = [190000, 270000, 200000, 150000];


const renderChart = (fontSize) => {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: function (params) {
                var str = `类别：${params[0].axisValue}</br>${params[0].marker} 预警项目: ${params[0].value}`;
                return str;
            },
        },
        legend: {
            show: false,
            data: ['预警项目'],
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
        color: ['#61d2e0', '#61d2e0', '#FDBF47', '#FDBF47'],
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
            name: "个",
            nameTextStyle: {
                verticalAlign: 'middle',
                align: "right"
            },
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
                name: "预警项目",
                data: data1,
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
                data: data1,
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
