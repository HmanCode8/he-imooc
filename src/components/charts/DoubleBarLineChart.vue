<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
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
    mChart = echarts.init(target.value);
});

const handleResize = () => {
    const rootFontSize = useRootFontSize();
    renderChart(rootFontSize.value);
    if (mChart) {
        mChart.resize();
    }
};

const renderChart = (fontSize) => {
    const chartData = [
        { name: '燃气', completed: 220, planned: 600, rate: 72 },
        { name: '供水', completed: 100, planned: 160, rate: 24 },
        { name: '雨水', completed: 100, planned: 170, rate: 39 },
        { name: '污水', completed: 100, planned: 60, rate: 24 },
        { name: '道路', completed: 100, planned: 60, rate: 24 },
        { name: '桥梁', completed: 140, planned: 60, rate: 24 },
        { name: '路灯', completed: 120, planned: 160, rate: 39 },
        { name: '第三方施工', completed: 200, planned: 60, rate: 24 },
        { name: '综合管线', completed: 100, planned: 40, rate: 24 },
    ];
    const option = {
        title: {
            text: '巡检总览',
            textStyle: {
                color: '#fff',
                fontSize // 设置标题字体大小
            },
            right: '1%',
            top: '3%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['巡检完成量', '计划巡检量', '巡检完成率'],
            textStyle: {
                color: '#fff',
                fontSize // 设置图例字体大小
            },
            top: '3%',
            left: '1%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.map(item => item.name),
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                fontSize // 设置 x 轴标签字体大小
            }
        },
        yAxis: [
            {
                type: 'value',
                name: '数量',
                min: 0,
                max: 200,
                interval: 50,
                axisLabel: {
                    formatter: '{value}',
                    fontSize // 设置 y 轴标签字体大小
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series: [
            {
                name: '巡检完成量',
                type: 'bar',
                data: chartData.map(item => item.completed),
                itemStyle: {
                    color: '#4ECBB4'
                }
            },
            {
                name: '计划巡检量',
                type: 'bar',
                data: chartData.map(item => item.planned),
                itemStyle: {
                    color: '#35A6EE'
                }
            },
            {
                name: '巡检完成率',
                type: 'line',
                data: chartData.map(item => item.rate),
                itemStyle: {
                    color: '#FFA500'
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        ]
    };

    mChart.setOption(option)
}
</script>
