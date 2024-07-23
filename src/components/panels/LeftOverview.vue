<script setup lang="ts">
import { useEffct, ref } from 'vue'
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
        name: '三破',
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

const olds = ref([
    {
        name: '燃气',
        value: 50
    },
    {
        name: '供水',
        value: 70
    },
    {

        name: '排水',
        value: 60
    }
])

</script>

<template>
    <div class="overview">
        <FristLevelTitle title="综合监控"></FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <div class="overview-content flex flex-wrap justify-between">
            <div class="l 4k:w-full 8k:w-[40%]">
                <ul class="flex w-full m-4 flex-col">
                    <li class="flex w-full py-4 px-2 items-center" v-for="item, index in arr1" :key="item.name">
                        <div :class="`base-icon-${index + 1} w-20 h-20 `">
                        </div>
                        <div class="flex justify-between w-3/4 bg-[url(assets/imgs/overview/o-bg.png)] bg-cover">
                            <div>{{ item.name }} <span class="ml-2">(km)</span></div>
                            <div class="px-2">{{ item.value }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="l 4k:w-full 8k:w-[60%]">
                <div class="flex justify-center h-48 items-center mb-4">
                    <div class="o-center w-1/2 h-full"></div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="巡检巡查"></SecondLevelTitle>

        <div class="h-1/3 w-full">
            <DoubleBarLineChart />
        </div>

        <div class="old flex w-full justify-end">
            <ul class="flex flex-wrap w-full">
                <li v-for="(item, index) in oldList" :key="item.name" class="4k:w-1/2 8k:w-1/4 my-2 flex items-center">
                    <div class="flex flex-col">
                        <div :class="`check-icon-${index + 1} w-16 h-16`"></div>
                        <div class="text-center">{{ item.name }}</div>
                    </div>
                    <div class="flex items-center m-2 flex-col">
                        <div>
                            <p class="text-[#89C3DF]">{{ item.des1 }}</p>
                            <p class="text-xl font-bold">{{ item.rate1 }}%</p>

                        </div>
                        <div>
                            <p class="text-[#89C3DF]">{{ item.des2 }}</p>
                            <p class="text-xl font-bold">{{ item.rate2 }}%</p>

                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <SecondLevelTitle class="mt-4" title="运行维护"></SecondLevelTitle>
        <div class="flex">
            <div class="font-bold w-1/3 text-lg mb-2">老旧改造完成率</div>
            <div class="flex w-2/3 justify-between">
                <div v-for="item in olds" :key="item.name" class="flex items-center">
                    <div class="w-1/2 text-center">{{ item.name }}</div>
                    <div class="w-1/2 text-center">{{ item.value }}%</div>
                </div>
            </div>
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

.base-icon-1 {
    background-image: url('@/assets/imgs/overview/ic-exapnd.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.base-icon-2 {
    background-image: url('@/assets/imgs/overview/ic-build.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.o-center {
    background-image: url('@/assets/imgs/overview/o-center.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

@for $i from 1 through 9 {
    .check-icon-#{$i} {
        background-image: url('@/assets/imgs/overview/check-icon-#{$i}.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>