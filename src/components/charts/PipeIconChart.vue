<template>
    <div ref="target" v-resize-ob="handleResize" class="w-full h-60"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import bgimage from "@/assets/imgs/main/title-h-third.png";
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({

    legend: {
        type: Array,
        default: () => [
            { name: '亭湖区', percentage: 24, distance: '25km', color: '#FF6384' },
            { name: '盐都区', percentage: 24, distance: '25km', color: '#FFCE56' },
            { name: '大丰区', percentage: 24, distance: '15km', color: '#36A2EB' },
            { name: '建湖县', percentage: 24, distance: '25km', color: '#FFA07A' },
            { name: '射阳县', percentage: 24, distance: '25km', color: '#FFA07A' },
        ]
    }
})

const target = ref(null)
let mChart = null
onMounted(() => {
    mChart = echarts.init(target.value);
});

const data = ref([])

const handleResize = () => {
    const rootFontSize = useRootFontSize();
    renderChart(rootFontSize.value);
    if (mChart) {
        mChart.resize();
    }
};
const renderChart = (fontSize) => {

    // const option = {
    //     tooltip: {
    //         confine: true,
    //         textStyle: {
    //             fontSize: 13,
    //         },
    //     },
    //     series: [
    //         {
    //             type: 'pie',
    //             radius: ['60%', '40%'],
    //             center: ['50%', '50%'],
    //             data: [
    //                 { value: 24.01, name: '1000万以上' },
    //                 { value: 24.01, name: '500 ~ 1000万' },
    //                 { value: 24.01, name: '100 ~ 500万' },
    //                 { value: 24.01, name: '0 ~ 100万' }
    //             ],
    //             label: {
    //                 show: false,
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)',
    //                     shadowBlur: 15,
    //                 },
    //             },
    //         },
    //     ],
    //     graphic: {
    //         elements: [
    //             {
    //                 type: 'image',
    //                 style: {
    //                     image: '/src/assets/imgs/pie-icon.png', // Ensure the image path is correct
    //                     width: 20,
    //                     height: 20,
    //                 },
    //                 left: 'center',
    //                 top: 'center',
    //             },
    //             {
    //                 type: 'text',
    //                 left: 'right',
    //                 top: '12%',
    //                 style: {
    //                     text: '总数：256亿元',
    //                     textAlign: 'center',
    //                     fill: '#00ffcc',
    //                     fontSize: 18,
    //                     fontWeight: 'bold'
    //                 }
    //             }
    //         ]
    //     }
    // };

    // 初始化图表

    let echartData = [
        {
            value: 2154,
            name: "电网电",
            percent: '18%',
            itemStyle: {
                normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#0175c4" },
                        { offset: 1, color: "#03163a" },
                    ]),
                },
            },
        },
        {
            value: 2258,
            name: "风电",
            percent: '25%',
            itemStyle: {
                normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#01a0c7" },
                        { offset: 1, color: "#032748" },
                    ]),
                },
            },
        },

        {
            value: 3515,
            name: "光电",
            percent: '16%',
            itemStyle: {
                normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#b99c0b" },
                        { offset: 1, color: "#1a232b" },
                    ]),
                },
            },
        },
        {
            value: 3515,
            name: "空气能",
            percent: '38%',
            itemStyle: {
                normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#c16b27" },
                        { offset: 1, color: "transparent" },
                    ]),
                },
            },
        },
        {
            value: 3854,
            name: "地热能",
            percent: '12%',
            itemStyle: {
                normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#FF3939" },
                        { offset: 1, color: "transparent" },
                    ]),
                },
            },
        },
    ];

    let colorArr = ['#0175c4', '#01a0c7', '#b99c0b', '#c16b27', '#FF3939']
    // 图例的样式

    let legendRich = {
        name: {
            fontSize,
            color: "#fff",
        },
        value: {
            fontSize,
            color: "#fff",
        },
        /* percent: {
           fontSize: 12,
           color: "red",
           padding:[0,0,0,20]
        } */
    };

    for (let index = 0; index < colorArr.length; index++) {
        const color = colorArr[index];

        legendRich['percent' + index] = {
            fontSize,
            color: color,
        }
    }




    const option = {
        //你的代码
        legend: {
            // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
            orient: "vertical",
            // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            x: "60%",
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            y: "40%",
            itemWidth: 24, // 设置图例图形的宽
            // itemHeight: 18, // 设置图例图形的高
            textStyle: {
                // color: "#fff", // 图例文字颜色
                rich: legendRich
            },
            // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
            itemGap: 18,

            formatter: function (name) {
                let str = ''
                echartData.map((item, index) => {
                    if (item.name === name) {
                        str = `{name|${name}}\r{value|${(item.value)}kWh}\r\r{${'percent' + index}|${item.percent}}`
                    }
                })
                return str
            },
        },
        tooltip: {
            show: true,
            formatter: function (value) {
                let data = value.data
                return `${data.name} ${data.value} (${data.percent})`
            }
        },
        series: [
            {
                name: "告警类型",
                type: "pie",
                labelLine: {
                    show: false
                },
                label: {
                    show: false
                },

                radius: ["30%", "50%"],
                center: ['30%', '50%'],
                hoverAnimation: false,
                color: [
                    "#c487ee",
                    "#deb140",
                    "#49dff0",
                    "#034079",
                    "#6f81da",
                    "#00ffb4",
                ],
                data: echartData,
            },

        ],
        graphic: {
            elements: [
                {
                    type: "text",
                    left: "44%",
                    top: "15%",
                    style: {
                        text: "总数",
                        textAlign: "center",
                        fill: "#fff",
                        fontSize: 14 // 确保 fontSize 有值
                    }
                },
                {
                    type: "text",
                    right: "10%",
                    top: "15%",
                    style: {
                        text: "324个",
                        textAlign: "center",
                        fontSize: 14, // 确保 fontSize 有值
                        fill: "#ffff00"
                    }
                },
                {
                    type: "image",
                    left: "44%",
                    top: "20%",
                    style: {
                        image: bgimage,
                        width: 250,
                        height: 10
                    }
                },
                {
                    type: 'image',
                    style: {
                        image: '/src/assets/imgs/pie-icon.png', // Ensure the image path is correct
                        width: 20,
                        height: 20,
                    },
                    left: 'center',
                    top: 'center',
                },
            ]
        }

    };
    mChart.setOption(option)
}
</script>
