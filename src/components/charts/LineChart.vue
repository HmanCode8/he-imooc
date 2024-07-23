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

let xLabel = ["2018", "2019", "2020", "2021", "2022"];
let dataValue = [20, 30, 20, 25, 35];
const renderChart = (fontSize = 12) => {
    const option = {
        // backgroundColor: '#f00',
        grid: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 0)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: fontSize,
                align: "left"
            }
        },
        grid: {
            left: "7%",
            right: "7%",
            top: "15%",
            bottom: "10%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: fontSize
                    }
                },
                splitLine: {
                    show: false,
                    type: "dashed",
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },
                axisTick: {
                    show: false
                },
                data: xLabel
            }
        ],
        yAxis: [
            {
                name: "单位：个",
                nameTextStyle: {
                    color: "white",
                    fontSize: fontSize,
                    padding: [0, 0, 0, -40]
                },
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#1160a0",
                        type: "dashed"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(1, 58, 116,1)"
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: fontSize
                    }
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '年资源数',
                type: "pictorialBar",
                barWidth: "25%",
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#d1ae36",
                            fontSize: fontSize
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "#66A6FF" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#015EB4" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        }, //渐变颜色
                        borderColor: "#d1ae36",
                        borderWidth: 0
                    }
                },
                symbol: "path://M0,0 L10,0 L5,-20 Z", // 定义三角形路径
                data: dataValue,
                z: 10 // 确保三角形在最前面
            },
            {
                name: '梯形背景',
                type: "pictorialBar",
                barWidth: "25%",
                symbol: "path://M0,0 L10,0 L7,-20 L3,-20 Z", // 定义梯形路径
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255,0.1)' // 背景梯形颜色
                    }
                },
                symbolOffset: [0, 0], // 偏移使背景梯形位置正确
                symbolSize: ['150%', '100%'], // 调整梯形大小
                data: dataValue,
                z: 5 // 确保梯形在三角形后面
            }
        ],
        dataZoom: [
            {
                xAxisIndex: 0, // 这里是从X轴的0刻度开始
                show: false, // 是否显示滑动条，不影响使用
                type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 3 // 展示到第几个。
            }
        ]
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