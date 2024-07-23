<script setup>
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import Pipe3dChart from '../charts/Pipe3dChart.vue';
import BarRowChart from '../charts/BarRowChart.vue';
import Bar3dChart from '../charts/Bar3dChart.vue';
import PipeIconChart from '../charts/PipeIconChart.vue';

const pipeActive = ref('燃气管线')
const pipes = ref([
    {
        name: '燃气管线',
        pipeLine: 341.1,
        pipePoint: 100,
    },
    {
        name: '供水管线',
        pipeLine: 123.4,
        pipePoint: 50,
    },

    {
        name: '排水管线',
        pipeLine: 234.5,
        pipePoint: 70,
    },


    {
        name: '电力管线',
        pipeLine: 123.4,
        pipePoint: 50,
    },

    {
        name: '通信管线',
        pipeLine: 234.5,
        pipePoint: 70,
    },
    {
        name: '热力管线',
        pipeLine: 123.4,
        pipePoint: 50,
    },

])

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

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="官网分析"></FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <!-- 第一部分 -->
        <div>
            <div class="pipe-list flex justify-between px-1 flex-wrap">
                <div class="pipe-item 4k:w-full 8k:w-[32%] hover:cursor-pointer  flex items-center bg-[url('assets/imgs/pipe-remak-item.png')] bg-cover"
                    v-for="(item, index) in pipes" @click="changeActive(item.name)" :key="index">
                    <div :class="`pipe-icon-${index + 1}  w-28 h-24 bg-cover`"></div>
                    <div class="">
                        <div :class="`${pipeActive === item.name ? 'text-[#FFCC00]' : ''} font-bold px-2`">
                            {{ item.name }}</div>
                        <!-- <div class="line">———————</div> -->
                        <div class="text-[#89C3DF] mt-6 flex">
                            <div class="pipe-line px-2">管线(km)：<span class="text-white">{{ item.pipeLine
                                    }}</span> 公里</div>
                            <div class="pipe-point">管点(个)： <span class="text-white">{{ item.pipePoint }}</span>个</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="官网分析"></SecondLevelTitle>

        <div class="flex w-full flex-wrap justify-between">
            <!-- 行政区划分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="行政区划分析"></ThirdLevelTitle>
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
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <Bar3dChart />
                    </div>
                    <!-- <div class="legend w-1/2 flex flex-wrap">
                        <div class="item flex  w-[45%] border-b m-[1px] items-center"
                            v-for="(item, index) in pipeChartdata" :key="index">
                            <div :style="`background-color:${item.color}`" class="w-2 h-2"></div>
                            <div class="name">{{ item.name }}</div>
                            <div class="percentage">({{ item.percentage }}%)</div>
                            <div class="distance">{{ item.distance }}</div>
                        </div>
                    </div> -->
                </div>
            </div>

            <!-- 行政区划分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>
                <PipeIconChart class="w-full h-60" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 6 {
    .pipe-icon-#{$i} {
        background-image: url('@/assets/imgs/pipe-bg-#{$i}.png');
    }
}
</style>