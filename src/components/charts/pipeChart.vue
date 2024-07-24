<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { Label } from 'cesium';

const props = defineProps({

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

const renderChart = () => {
    const option = {
        grid: {
            left: '15%',
            right: '5%',
            top: 0,
            bottom: '20%'
        },
        title: {
            text: 'xx占比',
            //subtext: '纯属虚构',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'],
        legend: {
            orient: 'vertical',
            x: 'left',
            left: '1%',
            top: '20%',
            textStyle: {
                color: '#fff',
            },
            //bottom: 20,
            data: ['二电一期', '二电二期', '二电三期', '二电南线', '大唐一期', '大唐二期']
        },
        series: [
            {
                name: '大唐热1',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 335, name: '二电一期', selected: true },
                    { value: 310, name: '二电二期', selected: true },
                    { value: 234, name: '二电三期', selected: true },
                    { value: 135, name: '二电南线', selected: true },
                    { value: 154, name: '大唐一期', selected: true },
                    { value: 148, name: '大唐二期', selected: true }
                ],
            }
        ]
    };

    mChart.setOption(option)
}
</script>
