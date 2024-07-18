<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

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

const handleResize = () => {
    mChart.resize()
}

const renderChart = () => {
    let data = [50, 60, 70, 20, 30, 40, 50, 60, 70, 30, 40, 50, 60, 70, 20,];
    let className = ['西安市', '汉中市', '榆林市', '延安市', '宝鸡市', '安康市', '铜川市', '商洛市', '汉中市', '铜川市']
    let colorList = ['#39B3FF'];
    let defaultData = data.map((v) => 1);
    const option = {
        grid: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + params[0].value + '%'
            }
        },
        backgroundColor: 'rgb(20,28,52)',
        xAxis: [
            {
                show: false,
                type: 'value'
            },
            {
                show: false,
                type: 'value',
                min: 0,
                max: 1
            }
        ],
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: className
        },

        {
            show: false,
            type: 'category',
            data: className
        }
        ],
        series: [
            {
                name: '同比增长比例',
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius: 0,
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: "rgba(255, 255, 255, 0)",
                            },
                            {
                                offset: 1,
                                color: "rgba(0, 255, 233, 1)",
                            },
                            ],
                        },

                    },
                },
                barWidth: 5,
                emphasis: {
                    disabled: true,
                    focus: 'none'
                },
                data: data
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 10,
                data: defaultData,
                emphasis: {
                    disabled: true,
                    focus: 'none'
                },
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(45, 243, 226, 0.10)',
                        barBorderRadius: 0,

                    }
                },
            },
        ]
    };
    mChart.setOption(option)
}
</script>
