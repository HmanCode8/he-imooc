<template>
    <div>
        <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
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
    colors: {
        type: Array,
        default: () => ['#0FA0FF', '#24F3FF'],
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
    renderChart(newFontSize);
    if (mChart) {
        mChart.resize();
    }
});

const handleResize = () => {
    renderChart(rootFontSize.value);
    mChart && mChart.resize();
};

const renderChart = (fontSize) => {
    const xData = _.map(chartData.value, c => c.name);
    const data = _.map(chartData.value, c => Number(c.value));
    const unit = _.get(chartData.value, '0.unit', '--');
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
            formatter: function (params) {
                var str = `${props.title}：${params[0].axisValue}</br>${params[0].marker}${params[0].value}${unit}`;
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