<template>
    <div class="w-full h-1/2">
        <div ref="target" class="w-full h-full"></div>
    </div>
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

const renderChart = () => {
    const data = [
        { label: "星期一", peri: 2, do: 1 },
        { label: "星期二", peri: 1, do: 3 },
        { label: "星期三", peri: 4, do: 0 },
        { label: "星期四", peri: 2, do: 2 },
        { label: "星期五", peri: 3, do: 3 },
        { label: "星期六", peri: 1, do: 7 },
        { label: "星期日", peri: 2, do: 5 },
    ]
    /** @description对象数组根据某个字段进行排序
      * arr 对象数组
      * prop 字段
      * 使用 objArrSort(list,'aaa')
      */
    const objArrSort = (arr, prop) => {
        return [...arr].sort((a, b) => b[prop] - a[prop]);
    };
    const chartData = objArrSort(data, 'do')
    console.log(chartData)
    // 颜色 前三个不同颜色 非前三一种颜色
    var colorList = [
        ["#B625D5", "#ed1941"],
        ["#7fb80e", "#ffe600"],
        ["#f391a9", "#f36c21"],
        ["#21766F", "#04F8ED"]
    ];

    const XData = chartData.map(item => item.label)
    const YData = []
    chartData.map((item, index) => {
        YData.push(
            {
                value: item.do,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: index < 3 ? colorList[index][1] : colorList[3][1]
                    },
                    {
                        offset: 1,
                        color: index < 3 ? colorList[index][0] : colorList[3][0]
                    }
                    ]),
                },
                label: {
                    show: true,
                    position: 'right',
                    color: index < 3 ? colorList[index][1] : colorList[3][1],
                    fontSize: 12,
                    // fontWeight: "bold"
                }
            },
        )
    })

    const option = {
        backgroundColor: "#012337",
        //你的代码
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: true,
            top: 10,
            right: 10,
            // data: ["", ""],
        },
        grid: {
            top: 50,
            left: 100,
            bottom: 50,
            right: 50
        },
        xAxis: {
            type: 'value',
            position: "top",
            // 字体样式
            axisLabel: {
                fontSize: 12,       // 字体大小
                //   fontStyle: 'italic', // 字体风格
                //   fontWeight: 'bold', // 字体粗细
                //   rotate: 45,          // 旋转角度
                color: '#66FFFF',   // 字体颜色
            },
            // 网格线样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(102,255,255,.5)', // 线颜色
                    width: 1,         // 线宽
                    type: 'solid'    // 线类型
                }
            }
        },

        yAxis: {
            type: 'category',
            data: XData,
            inverse: true,  // 反转 y 轴，使原点在左上角
            axisTick: {
                alignWithLabel: true
            },
            // 字体样式
            axisLabel: {
                fontSize: 12,       // 字体大小
                //   fontStyle: 'italic', // 字体风格
                //   fontWeight: 'bold', // 字体粗细
                //   rotate: 45,          // 旋转角度
                color: '#66FFFF',   // 字体颜色
            },
            // 网格线样式
            // splitLine: {
            //   show: true,
            //   lineStyle: {
            //     color: '#FF0000', // 线颜色
            //     width: 2,         // 线宽
            //     type: 'dashed'    // 线类型
            //   }
            // }
        },

        series: [
            {
                name: "",
                data: YData,
                type: 'bar',
                barWidth: 12,
                // label: {
                //   show: true,
                //   position: 'right',
                // },
                itemStyle: {
                    normal: {
                        show: true,
                        barBorderRadius: [0, 15, 15, 0]
                    }
                }
            },
        ]
    };
    mChart.setOption(option)
}
</script>
