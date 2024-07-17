<script setup lang="ts">
import { useEffct } from 'vue'
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import PipeChart from '../charts/pipeChart.vue'

import { useGlobalStore } from "@/store";

const global = useGlobalStore()

const changeStore = () => {
    console.log(global.navActive)
    global.setNavActive('/dashboard')
}
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
        <div class="overview-content">
            <div class="l w-1/3">
                <ul class="flex flex-col">
                    <li class="flex" v-for="item in arr1" :key="item.name">
                        <div class="icon w-10 h-10 bg-slate-500 rounded-full"></div>
                        <div class="flex">
                            <div>{{ item.name }}</div>
                            <div class="value">{{ item.value }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="chart-list h-full w-full">
            <PipeChart />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>