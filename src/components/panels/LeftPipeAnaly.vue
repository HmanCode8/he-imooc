<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import Pipe3dChartTwo from '../charts/Pipe3dChartTwo.vue';
import BarRowChartTow from '../charts/BarRowChartTow.vue';
import Bar3dChart from '../charts/Bar3dChart.vue';
import PipeIconChart from '../charts/PipeIconChart.vue';

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
            <div class="pipe-list flex flex-wrap">
                <div class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 flex items-center" v-for="(item, index) in pipes"
                    :key="index">
                    <div class="icon  w-4 h-4 bg-slate-500"></div>
                    <div class="">
                        <div class="name">{{ item.name }}</div>
                        <div class="line">———————</div>
                        <div>
                            <div class="pipe-line">管线长度：{{ item.pipeLine }}公里</div>
                            <div class="pipe-point">管线点数：{{ item.pipePoint }}个</div>
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
                <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />

            </div>
            <!-- 管龄分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="管龄分析"></ThirdLevelTitle>

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <BarRowChartTow />
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
                <PipeIconChart />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>