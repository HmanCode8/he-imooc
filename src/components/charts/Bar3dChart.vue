<template>
    <div>
        <div ref="target" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import { h, onMounted, ref, watch, toRef } from 'vue';
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

watch([chartData, rootFontSize], ([newChartData, newFontSize]) => {
    mChart && mChart.resize();
});

const renderChart = (fontSize) => {
    const xData = _.map(chartData.value, c => c.name);
    const data = _.map(chartData.value, c => Number(c.value));
    const unit = _.get(chartData.value, '0.unit', '--');
    const maxData = _.max(data);
    const option = {
        title: {
            text: `单位：${unit}`,
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
            formatter: function (parms) {
                var str = parms[0].axisValue +
                    "</br>" +
                    parms[0].marker +
                    props.title +
                    "：" +
                    parms[0].value;
                return str;
            },
        },
        legend: {
            show: false,
            data: [props.title],
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
        color: ["#24F3FF", "#24F3FF", "#FDBF47", "#FDBF47"],
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
                // interval: 0,
                // rotate: 45,
                margin: 10,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#ffffff',
                    fontSize, // 修改 x 轴字体大小
                },
            },
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: maxData,
            boundaryGap: ['20%', '60%'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#61d2e0',
                },
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ["#B5B5B5"],
                    type: "dashed",
                    opacity: 0.5
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize, // 修改 y 轴字体大小
                },
            },
        },
        // dataZoom: [
        //     {
        //         type: 'inside', // 内置滚动，通过鼠标滚轮或双指滑动控制
        //         start: 0,
        //         end: 100,
        //     },
        //     {
        //         type: 'slider', // 滑动条
        //         start: 0,
        //         end: 100,
        //         bottom: 0, // 滑动条位置
        //     },
        // ],
        series: [
            {
                name: props.seriesName,
                data: data,
                stack: "zs",
                type: "bar",
                barMaxWidth: 'auto',
                barWidth: 20,
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
                                color: props.colors[0],
                            },
                            {
                                offset: 1,
                                color: props.colors[1],
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
    mChart.setOption(option);
};
</script>