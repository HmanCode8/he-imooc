<template>
    <div class="">
        <div ref="target" class="w-full h-full"></div>

    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, toRef, watch, nextTick } from 'vue';
import * as echarts from 'echarts';
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    }
});

const target = ref(null);
const chartData = toRef(props.data);
const rootFontSize = useRootFontSize();
let mChart = null;

onMounted(() => {
    nextTick(() => {
        mChart = echarts.init(target.value);
        renderChart(rootFontSize.value);
    })
});

onUnmounted(() => {
    mChart.dispose();
})

watch([chartData, rootFontSize], ([newChartData, newFontSize]) => {
    renderChart(newFontSize);
    mChart && mChart.resize();
});
const renderChart = (fontSize = 12) => {
    console.log(chartData.value, '00120');
    const option = {
        title: {
            right: '5%',
            top: '7%',
            text: '问题数：个',
            textStyle: {
                color: 'rgba(80,227,194,0.6)',
                fontSize
            }
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    show: true,
                },
                splitArea: {
                    color: '#fff',
                    lineStyle: {
                        color: '#fff',
                    },
                },
                axisLabel: {
                    color: 'rgba(80,227,194,0.6)',
                    fontSize
                },
                splitLine: {
                    show: false,
                },
                boundaryGap: false,
                data: chartData.value[0],
            },
        ],
        yAxis: [
            {
                type: 'value',
                // name: '人',
                // nameTextStyle: {
                //     color: 'rgba(80,227,194,0.6)',
                // },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.3)',
                        type: 'dashed',
                    },
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(80,227,194,0.6)',
                        fontSize
                    },
                },
                axisTick: {
                    show: false,
                },
            },
        ],
        // legend: {
        //     show: true,
        // },
        grid: {
            left: '5%',
            right: '5%',
            top: '15%',
            bottom: '10%',
            containLabel: true,
        },
        tooltip: {
            show: true,
            trigger: 'axis',
        },
        series: [
            {
                name: '问题数',
                type: 'line',
                lineStyle: {
                    normal: {
                        color: 'rgba(80,227,194,0.8)',
                    },
                },
                label: {
                    show: false,
                },
                itemStyle: {
                    color: '#50E3C2',
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(80,227,194,0.5)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(80,227,194,0.2)',
                                },
                            ],
                            false
                        ),
                        shadowColor: 'rgba(108,80,243, 0.9)',
                        shadowBlur: 20,
                    },
                },
                data: chartData.value[1],
            },
        ],
    };
    mChart.setOption(option);
};
</script>

<style scoped>
html,
body,
#app {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>