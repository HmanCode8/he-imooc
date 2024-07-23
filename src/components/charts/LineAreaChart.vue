<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    legend: {
        type: Array,
        default: () => [
            { name: '亭湖区', percentage: 24, distance: '25km', color: '#FF6384' },
            { name: '盐都区', percentage: 24, distance: '25km', color: '#FFCE56' },
            { name: '大丰区', percentage: 24, distance: '15km', color: '#36A2EB' },
            { name: '建湖县', percentage: 24, distance: '25km', color: '#FFA07A' },
            { name: '阜宁县', percentage: 24, distance: '25km', color: '#4BC0C0' },
            { name: '滨海县', percentage: 24, distance: '25km', color: '#FF6384' },
            { name: '响水县', percentage: 24, distance: '25km', color: '#FFCE56' },
            { name: '东台市', percentage: 24, distance: '45km', color: '#36A2EB' },
            { name: '射阳县', percentage: 24, distance: '25km', color: '#FFA07A' },
        ],
    },
});


const target = ref(null);
let mChart = null;
onMounted(() => {
    mChart = echarts.init(target.value);
});

const handleResize = () => {
    const rootFontSize = useRootFontSize();
    renderChart(rootFontSize.value);
    if (mChart) {
        mChart.resize();
    }
};

const renderChart = (fontSize = 12) => {
    const option = {
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
                data: ['A', 'B', 'C', 'D', 'E', 'F'],
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: '人',
                nameTextStyle: {
                    color: 'rgba(80,227,194,0.6)',
                },
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
        legend: {
            show: false,
        },
        grid: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '10%',
            containLabel: true,
        },
        tooltip: {
            show: true,
            trigger: 'axis',
        },
        series: [
            {
                name: '在线人数',
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
                data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
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