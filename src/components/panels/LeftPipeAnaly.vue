<script setup>
import { ref } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import Pipe3dChart from '../charts/Pipe3dChart.vue';
import BarRowChart from '../charts/BarRowChart.vue';
import Bar3dChart from '../charts/Bar3dChart.vue';
import PipeIconChart from '../charts/PipeIconChart.vue';
import { basicFacilitiesData } from '@/assets/chartData/data'

const { facilities } = basicFacilitiesData

const pipeActive = ref(facilities[0].name)
const facilitieData = ref(facilities)
const Pie3DChartData = ref([
    { name: "燃气", value: 60, color: "#FF6384" },
    { name: "供水", value: 23, color: "#FFCE56" },
    { name: "雨水", value: 25, color: "#36A2EB" },
    { name: "污水", value: 99, color: "#FFA07A" },
    { name: "道路", value: 60, color: "#0F7C7C" },
    { name: "桥梁", value: 23, color: "#0F7C7C" },
    { name: "路灯", value: 25, color: "#3B40A2" },
]);

const changeActive = (name) => {
    pipeActive.value = name
}
const pipeChartdata = ref([
    { name: '亭湖区', percentage: 24, distance: '25km', color: '#FF6384' },
    { name: '盐都区', percentage: 24, distance: '25km', color: '#FFCE56' },
    { name: '大丰区', percentage: 24, distance: '15km', color: '#36A2EB' },
    { name: '建湖县', percentage: 24, distance: '25km', color: '#FFA07A' },
    { name: '阜宁县', percentage: 24, distance: '25km', color: '#4BC0C0' },
    { name: '滨海县', percentage: 24, distance: '25km', color: '#FF6384' },
    { name: '响水县', percentage: 24, distance: '25km', color: '#FFCE56' },
    { name: '东台市', percentage: 24, distance: '45km', color: '#36A2EB' },
    { name: '射阳县', percentage: 24, distance: '25km', color: '#FFA07A' },
])
const totleSize = ref([
    {
        name: '管线总长',
        value: 351.1,
        unit: 'km',
    },
    {
        name: '管线总点数',
        value: 150,
        unit: '个',
    },
])
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="官网分析">
            <template v-slot:title-slot>
                <div class="flex justify-between items-center">
                    <div v-for="t in totleSize" :key="t.name" class="flex mx-2 items-center">
                        <div class=" font-bold mr-2">{{ t.name }}</div>
                        <div class=" font-bold mr-2 text-[#cbb543]">{{ t.value }}</div>
                        <div class="">{{ t.unit }}</div>
                    </div>
                </div>
            </template>
        </FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <!-- 第一部分 -->
        <div>
            <div class="pipe-list flex justify-between px-1 flex-wrap">
                <div :class="`${pipeActive === item.name ? 'filter-drop-shadow' : ''} 4k:w-full 8k:w-[32%] my-4 hover:cursor-pointer  flex items-center bg-[url('assets/imgs/infrastructure/pipe-remak-item.png')] bg-size`"
                    v-for="(item, index) in facilitieData" @click="changeActive(item.name)" :key="index">
                    <div :class="`pipe-icon-${index + 1}  w-24 h-24 bg-cover`"></div>
                    <div class="">
                        <div
                            :class="`${pipeActive === item.name ? 'text-[#FFCC00]' : 'gradient-text'} font-[pengmenzhengdao]  text-2xl px-2`">
                            {{ item.name }}</div>
                        <div class="text-[#89C3DF] mt-6 flex">
                            <div class="pipe-line px-2">{{ item.children[0].name }}(km)：<span class="text-white">{{
                                item.children[0].value || '--'
                                    }}</span></div>
                            <div class="pipe-point">{{ item.children[1].name }}(个)： <span class="text-white">{{
                                item.children[1].value || '--' }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="官网分析"></SecondLevelTitle>

        <div class="flex w-full flex-wrap justify-between">
            <!-- 行政区划分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="地下管线数据汇聚率"></ThirdLevelTitle>
                <Pipe3dChart class="w-full h-full flex" :legend="pipeChartdata" />

            </div>
            <!-- 管龄分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="管龄分析"></ThirdLevelTitle>

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <BarRowChart />
                    </div>
                </div>
            </div>

            <!-- 类型分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="管材分析"></SecondLevelTitle>

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <Bar3dChart :pieChartData="Pie3DChartData" />
                    </div>
                </div>
            </div>

            <!-- 行政区划分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="管径分析"></SecondLevelTitle>
                <PipeIconChart class="w-full h-60" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 6 {
    .pipe-icon-#{$i} {
        background-image: url('@/assets/imgs/infrastructure/pipe-bg-#{$i}.png');
    }
}

.filter-drop-shadow {
    filter: drop-shadow(2px 4px 6px #1add1a);
}

.gradient-text {
    background: linear-gradient(to bottom, #c8f1fd, #68d1fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>