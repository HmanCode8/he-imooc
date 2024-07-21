<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import { Label } from 'cesium';

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

const handleResize = (size) => {
    console.log('resize', size)
    mChart.resize()
}

// const data = [
//     { range: '<110', value: 190000 },
//     { range: '110~250', value: 270000 },
//     { range: '250~630', value: 200000 },
//     { range: '大于630', value: 150000 }
// ];

var xData = ['<110', '110~250', '250~630', '大于630']
var data1 = [190000, 270000, 200000, 150000];


const renderChart = () => {
    const option = {
        // backgroundColor: "#000000",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (parms) {
                var str =
                    '月份：' +
                    parms[0].axisValue +
                    '</br>' +
                    parms[0].marker +
                    '预警项目:' +
                    parms[0].value
                return str;
            },
        },
        legend: {
            show: false,
            data: ['预警项目'],
            textStyle: { fontSize: 12, color: '#fff' },
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 15,
            top: '-1%',
            right: '2%',
        },
        textStyle: {
            color: '#ffffff',
        },
        color: ['#24F3FF', '#24F3FF', '#FDBF47', '#FDBF47'],
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
                margin: 10, //刻度标签与轴线之间的距离。
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#ffffff',
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
                    color: '#B5B5B5',
                },
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['#B5B5B5'],
                    type: 'dashed',
                    opacity: 0.5,
                },
            },
            axisLabel: {},
        },
        series: [
            {
                name: "预警项目",
                data: data1,
                stack: 'zs',
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
