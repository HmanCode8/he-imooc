<template>
    <div>
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { h, onMounted, onUnmounted, ref, watch, toRef } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import useRootFontSize from '@/hooks/useRootFontSize';
import _ from 'lodash';

const props = defineProps({
    title: {
        title: String,
        default: '--',
    },
    data: {
        type: Array,
    },
    seriesName: {
        type: String,
        default: "管径",
    },
    colors: {
        type: Array,
        default: () => ['#01EBFA', '#00676D'],
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
    const xData = _.map(chartData.value, c => c.name);
    const data = _.map(chartData.value, c => Number(c.value));
    const unit = _.get(chartData.value, '0.unit', '--');
    const maxData = _.max(data);
    var data1 = [100, 100, 100, 100, 100];
    var data3 = [0.01, 0.01, 0.01, 0.01, 0.01];
    var data4 = [20, 20, 20, 20, 20];
    const option = {
        // backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
        },
        grid: {
            top: 50,
            left: 0,
            bottom: 0,
        },
        xAxis: {
            show: false,
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: 'rgba(65, 49,28, .9)',
                    fontSize,
                    fontFamily: 'FZYaoti',
                    fontWeight: 10,
                },
                margin: 10,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 255,255, .8)',
                    width: 4,
                },
            },
            splitArea: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: xData
        },
        yAxis: {
            show: false,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255,255, .9)',
                    width: 4,
                },
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#42321c',
                    fontSize,
                    fontFamily: 'FZYaoti',
                },
                margin: 20,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 255,255, .8)',
                    width: 2,
                },
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [5, 5],
                symbolOffset: [-5, -20],
                z: 20,
                itemStyle: {
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fef8a7',
                                },
                                {
                                    offset: 0.5,
                                    color: '#eb710f',
                                },
                                {
                                    offset: 1,
                                    color: '#fed174',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#feecc2',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#01c49a',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fafee6',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#2eb0ee',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fed6ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fd359c',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fefdf9',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#aa2cbd',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                symbolPosition: 'end',
                data: data,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [10, 10],
                symbolOffset: [-2, -40],
                z: 20,
                itemStyle: {
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fef8a7',
                                },
                                {
                                    offset: 0.5,
                                    color: '#eb710f',
                                },
                                {
                                    offset: 1,
                                    color: '#fed174',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#feecc2',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#01c49a',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fafee6',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#2eb0ee',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fed6ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fd359c',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fefdf9',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#aa2cbd',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                symbolPosition: 'end',
                data: data,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [5, 5],
                symbolOffset: [20, -50],
                z: 20,
                itemStyle: {
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fef8a7',
                                },
                                {
                                    offset: 0.5,
                                    color: '#eb710f',
                                },
                                {
                                    offset: 1,
                                    color: '#fed174',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#feecc2',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#01c49a',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fafee6',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#2eb0ee',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fed6ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fd359c',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fefdf9',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#aa2cbd',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                symbolPosition: 'end',
                data: data,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [12, 12],
                symbolOffset: [-20, -70],
                z: 20,
                itemStyle: {
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fef8a7',
                                },
                                {
                                    offset: 0.5,
                                    color: '#eb710f',
                                },
                                {
                                    offset: 1,
                                    color: '#fed174',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#feecc2',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#01c49a',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fafee6',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#2eb0ee',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fed6ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fd359c',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#fefdf9',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#aa2cbd',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                symbolPosition: 'end',
                data: data,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [10, 20],
                symbolOffset: [0, -10],
                z: 1,
                itemStyle: {
                    opacity: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#bdbdbd',
                            },
                            {
                                offset: 0.2,
                                color: '#f8f8f8',
                            },
                            {
                                offset: 0.5,
                                color: '#fff',
                            },
                            {
                                offset: 0.8,
                                color: '#f8f8f8',
                            },
                            {
                                offset: 1,
                                color: '#bdbdbd',
                            },
                        ],
                        global: false,
                    },
                    borderColor: 'rgba(0,0,0,.3)',
                    borderWidth: 2,
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, .1)',
                    shadowOffsetY: 1,
                    shadowOffsetX: 0,
                },
                symbolPosition: 'end',
                data: data1,
            },
            {
                name: '',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                z: 0,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#eeeeee',
                            },
                            {
                                offset: 0.15,
                                color: '#fafafa',
                            },
                            {
                                offset: 0.3,
                                color: '#fff',
                            },
                            {
                                offset: 0.5,
                                color: '#fff',
                            },
                            {
                                offset: 0.7,
                                color: '#fff',
                            },
                            {
                                offset: 0.85,
                                color: '#fafafa',
                            },
                            {
                                offset: 1,
                                color: '#eeeeee',
                            },
                        ],
                        global: false,
                    },
                },
                data: data1,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [10, 10],
                symbolOffset: [0, -10],
                z: 12,
                itemStyle: {
                    opacity: 1,
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.RadialGradient(0.5, 0.4, 0.9, [
                                {
                                    offset: 0,
                                    color: '#ea8126',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ]),

                            new echarts.graphic.RadialGradient(0.5, 0.4, 0.9, [
                                {
                                    offset: 0,
                                    color: '#05e8b5',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.5, 0.4, 0.9, [
                                {
                                    offset: 0,
                                    color: '#51c4fb',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.5, 0.4, 0.9, [
                                {
                                    offset: 0,
                                    color: '#ff58ae',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ]),
                            new echarts.graphic.RadialGradient(0.5, 0.4, 0.9, [
                                {
                                    offset: 0,
                                    color: '#c937e4',
                                },
                                {
                                    offset: 1,
                                    color: '#fff',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                symbolPosition: 'end',
                data: data,
            },
            {
                name: '',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                z: 10,
                label: {
                    show: true,
                    formatter: '{c}%',
                    position: 'bottom',
                    distance: 20,
                    color: '#333',
                    fontSize,
                },
                itemStyle: {
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#ffc664',
                                },
                                {
                                    offset: 0.3,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 0.5,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 0.7,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 1,
                                    color: '#ffc664',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#0fae8b',
                                },
                                {
                                    offset: 0.3,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 0.7,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#0efbc7',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#229adf',
                                },
                                {
                                    offset: 0.3,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 0.7,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#6ad1fc',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#fa1181',
                                },
                                {
                                    offset: 0.3,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 0.7,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fe7bc7',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#932792',
                                },
                                {
                                    offset: 0.3,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 0.7,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#c382de',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                data: data,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [10, 15],
                symbolOffset: [0, 10],
                z: 3,
                itemStyle: {
                    opacity: 1,
                    color: function (params) {
                        var colorList = [
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#ffc664',
                                },
                                {
                                    offset: 0.3,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 0.5,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 0.7,
                                    color: '#ff831f',
                                },
                                {
                                    offset: 1,
                                    color: '#ffc664',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#0fae8b',
                                },
                                {
                                    offset: 0.3,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 0.5,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 0.7,
                                    color: '#01c49a',
                                },
                                {
                                    offset: 1,
                                    color: '#0efbc7',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#229adf',
                                },
                                {
                                    offset: 0.3,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 0.5,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 0.7,
                                    color: '#2eb0ee',
                                },
                                {
                                    offset: 1,
                                    color: '#6ad1fc',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#fa1181',
                                },
                                {
                                    offset: 0.3,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 0.5,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 0.7,
                                    color: '#fd359c',
                                },
                                {
                                    offset: 1,
                                    color: '#fe7bc7',
                                },
                            ]),
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#932792',
                                },
                                {
                                    offset: 0.3,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 0.5,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 0.7,
                                    color: '#aa2cbd',
                                },
                                {
                                    offset: 1,
                                    color: '#c382de',
                                },
                            ]),
                        ];
                        return colorList[params.dataIndex];
                    },
                },
                data: [1, 1, 1, 1, 1],
            },
            {
                name: '',
                type: 'pictorialBar',
                symbol: 'rect',
                symbolSize: [10, 40],
                symbolOffset: [0, 40],
                z: -1,
                label: {
                    show: true,
                    formatter: '{c}%',
                    position: 'top',
                    distance: -20,
                    color: '#fff',
                    fontFamily: 'FZYaoti',
                    fontWeight: 100,
                    fontSize,
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#bbbbbb',
                            },
                            {
                                offset: 0.5,
                                color: '#e9e9e9',
                            },
                            {
                                offset: 0.6,
                                color: '#fff',
                            },
                            {
                                offset: 1,
                                color: '#e5e6e8',
                            },
                        ],
                        global: false,
                    },
                },
                data: data4,
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [10, 20],
                symbolOffset: [0, 30],
                z: -2,
                itemStyle: {
                    opacity: 1,
                    shadowBlur: 5,
                    shadowColor: 'rgba(90, 96, 108, .3)',
                    shadowOffsetY: 2,
                    shadowOffsetX: 15,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#bbbbbb',
                            },
                            {
                                offset: 0.5,
                                color: '#e9e9e9',
                            },
                            {
                                offset: 0.6,
                                color: '#fff',
                            },
                            {
                                offset: 1,
                                color: '#e5e6e8',
                            },
                        ],
                        global: false,
                    },
                },
                symbolPosition: 'end',
                data: data3,
            },
        ],
    };
    mChart.setOption(option);
};
</script>