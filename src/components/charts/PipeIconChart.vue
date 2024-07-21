<template>

    <div class="w-full flex">
        <div class="chart-container w-1/3 h-60">
            <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>

        </div>
        <div class="legend w-2/3 flex flex-wrap">
            <div class="item flex  w-[45%] border-b m-[1px] items-center" v-for="(item, index) in legend" :key="index">
                <div :style="`background-color:${item.color}`" class="w-2 h-2"></div>
                <div class="name">{{ item.name }}</div>
                <div class="percentage">({{ item.percentage }}%)</div>
                <div class="distance">{{ item.distance }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { h, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { Label } from 'cesium';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
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
    mChart = echarts.init(target.value)
    renderChart()
})

const handleResize = (size) => {
    console.log('resize', size)
    mChart.resize()
}

const renderChart = () => {
    let dataValue = [
        {
            value: 30,
            name: '桥梁',
            color: 'rgba(248,95,94,1)',
        },
        {
            value: 15,
            name: '隧道',
            color: 'rgba(243,185,71,1)',
        },
        {
            value: 18,
            name: '路基',
            color: 'rgba(243,185,71,1)',
        },
        {
            value: 12,
            name: '深路堑边坡',
            color: 'rgba(3,151,255,1)',
        },
        {
            value: 10,
            name: '既有线',
            color: 'rgba(3,249,245,1)',
        },
    ];

    const pieData1 = dataValue.map((item) => ({
        name: item.name,
        value: item.value,
        itemStyle: {
            color: item.color,
        },
    }));

    const option = {
        // backgroundColor: "#031a40",
        tooltip: {
            confine: true,
            textStyle: {
                fontSize: 13, // 字体大小
            },
        },
        // legend: {
        //     show: true,
        //     bottom: "10%",
        //     icon: "circle",
        //     itemWidth: 12,
        //     itemHeight: 12,
        //     itemGap: 18,
        //     data: dataValue.map((item) => item.name),
        //     textStyle: {
        //         color: "#fff",
        //         fontSize: 13,
        //         rich: {
        //             a: {
        //                 fontSize: 14,
        //                 marginLeft: 10,
        //                 padding: [0, 0, 0, 5],
        //             },
        //             b: {
        //                 fontSize: 14,
        //                 padding: [0, 0, 0, 15],
        //                 color: "#fff",
        //             },
        //         },
        //     },
        //     formatter: (param) => {
        //         const item = dataValue.find((i) => i.name === param);
        //         return `{a|${item.name}}{b|${item.value}}`;
        //     },
        // },
        series: [
            {
                type: "pie",
                radius: ["60%", "40%"], // 大小
                center: ["50%", "50%"], // 位置
                data: pieData1,
                label: {
                    show: false,
                },
            },
        ],
        graphic: {
            elements: [
                {
                    type: 'image',
                    style: {
                        image: '/src/assets/imgs/bg.jpg', // 图标路径
                        width: 50,
                        height: 50,
                    },
                    left: 'center',
                    top: 'center',
                },
            ],
        },
    };

    // 初始化图表

    mChart.setOption(option)
}
</script>
