<script setup lang="ts">
import { useEffct } from 'vue'
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import DoubleBarLineChart from '../charts/DoubleBarLineChart.vue'

import { useGlobalStore } from "@/store";

const global = useGlobalStore()

const changeStore = () => {
    console.log(global.navActive)
    global.setNavActive('/dashboard')
}

const legend = [
    {
        name: '巡检完成量',
        value: 'success',
        color: '#4299E1'
    },
    {
        name: '计划巡检量',
        value: 'plan',
        color: '#F59E0B'
    },
    {
        name: '巡检完成率',
        value: 'rate',
        color: '#3B82F6'
    }
]
// data: ['燃气', '供水', '雨水', '污水', '道路', '桥梁', '第三方施工', '路灯'],
const oldList = [
    {
        name: '燃气',
        des1: '燃气管网巡检完成率',
        des2: '燃气管网巡检计划量',
        rate1: 50,
        rate2: 60,
    },
    {
        name: '供水',
        des1: '供水系统巡检完成率',
        des2: '供水系统巡检计划量',
        rate1: 70,
        rate2: 80,
    },
    {
        name: '雨水',
        des1: '雨水管网巡检完成率',
        des2: '雨水管网巡检计划量',
        rate1: 60,
        rate2: 70,
    },
    {
        name: '污水',
        des1: '污水处理设施巡检完成率',
        des2: '污水处理设施巡检计划量',
        rate1: 80,
        rate2: 90,
    },
    {
        name: '道路',
        des1: '道路巡检完成率',
        des2: '道路巡检计划量',
        rate1: 90,
        rate2: 100,
    },
    {
        name: '桥梁',
        des1: '桥梁巡检完成率',
        des2: '桥梁巡检计划量',
        rate1: 80,
        rate2: 90,
    },
    {
        name: '第三方施工',
        des1: '第三方施工巡检完成率',
        des2: '第三方施工巡检计划量',
        rate1: 70,
        rate2: 80,
    },
    {
        name: '路灯',
        des1: '路灯巡检完成率',
        des2: '路灯巡检计划量',
        rate1: 60,
        rate2: 70,
    }
]
const arr1 = [
    {
        name: '示范区',
        value: 1000
    },
    {
        name: '建成区',
        value: 10000
    }
]


</script>

<template>
    <div class="overview">
        <FristLevelTitle title="综合监控"></FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <div class="overview-content flex">
            <div class="l w-1/3">
                <ul class="flex flex-col">
                    <li class="flex items-center" v-for="item in arr1" :key="item.name">
                        <div class="icon w-8 h-8 bg-slate-500 rounded-full"></div>
                        <div class="flex">
                            <div>{{ item.name }}</div>
                            <div class="px-2">{{ item.value }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="r w-2/3">
                <div class="flex justify-around items-center mb-4">
                    <div>
                        <ul class="flex flex-col">
                            <li>
                                <div>管线 <span>58.2</span><span>km</span></div>
                            </li>
                            <li>
                                <div>场站 <span>67</span><span>个</span></div>
                            </li>
                            <li>
                                <div>设备 <span>1788</span><span>个</span></div>
                            </li>
                        </ul>
                    </div>
                    <div>中间</div>
                    <div>
                        <ul class="flex flex-col">
                            <li>
                                <div>管线 <span>58.2</span><span>km</span></div>
                            </li>
                            <li>
                                <div>场站 <span>67</span><span>个</span></div>
                            </li>
                            <li>
                                <div>设备 <span>1788</span><span>个</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="巡检巡查"></SecondLevelTitle>

        <div class="h-1/3 w-full">

            <!-- <div class="legend flex justify-end">
                <ul class="flex ">
                    <li v-for="item in legend" :key="item.name" class="text-sm flex items-center mx-1">
                        <div :class="`icon h-2 w-2 rounded-sm mr-2 bg-${item.value}`"></div>
                        <div class="text-center">{{ item.name }}</div>
                    </li>
                </ul>
                <div class="h2">巡检完成率</div>
            </div> -->
            <DoubleBarLineChart />
        </div>


        <SecondLevelTitle class="mt-4" title="运行维护"></SecondLevelTitle>

        <div class="old flex w-full justify-end">
            <ul class="flex flex-wrap w-full">
                <li v-for="item in oldList" :key="item.name"
                    class="text-sm 4k:w-full 8k:w-[24%] my-2 flex items-center mx-1">
                    <div class="flex flex-col">
                        <div class="icon w-8 h-8 rounded-full bg-slate-400"></div>
                        <div class="text-center">{{ item.name }}</div>
                    </div>
                    <div class="flex items-center m-2 flex-col">
                        <div>
                            <p>{{ item.rate1 }}%</p>
                            <p>{{ item.des1 }}</p>
                        </div>
                        <div>
                            <p>{{ item.rate2 }}%</p>
                            <p>{{ item.des2 }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.legend {
    .bg-success {
        background-color: #4299E1;
    }

    .bg-plan {
        background-color: #F59E0B;
    }

    .bg-rate {
        background-color: #3B82F6;
    }
}
</style>