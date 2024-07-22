<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'

import ConeBarChart from '../charts/ConeBarChart.vue'

const data = ref([
    {
        name: '燃气',
        onLine: 100,
        offLine: 200,
        total: 300
    },
    {
        name: '电力',
        onLine: 100,
        offLine: 200,
        total: 300
    },
    {
        name: '水电',
        onLine: 100,
        offLine: 200,
        total: 300
    },
    {
        name: '热力',
        onLine: 100,
        offLine: 200,
        total: 300
    },
])

const runningData = ref(
    [
        {
            name: '覆盖率',
            value: 122.45
        },

        {
            name: '设备总数',
            value: 1212
        },
        {
            name: '在线率',
            value: 62.1
        }
    ]
)
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="设施概况"></FristLevelTitle>
        <SecondLevelTitle title="状态分析"></SecondLevelTitle>
        <div class="flex justify-around">
            <div class="flex items-center">物联网设备 <div class="icon w-8 h-2 bg-green-500"></div> <span>1854</span>台</div>
            <div class="flex items-center">在线设备 <div class="icon w-8 h-2 bg-green-500"></div> <span>1234</span>台</div>
            <div class="flex items-center">在线率 <div class="icon w-8 h-2 bg-green-500"></div> <span>621</span>%</div>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex w-1/3 items-center flex-wrap">
                <div v-for="item in data" class="flex w-1/2 flex-col bg-yellow-500 items-center">
                    <div>在线：{{ item.onLine }}</div>
                    <div>离线：{{ item.offLine }}</div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
            <div class="flex w-1/3 items-center flex-wrap">
                中间
            </div>
            <div class="flex w-1/3 items-center flex-wrap">
                <div v-for="item in data" class="flex w-1/2 flex-col bg-yellow-500 items-center">
                    <div>在线：{{ item.onLine }}</div>
                    <div>离线：{{ item.offLine }}</div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="布设分析"></SecondLevelTitle>
        <div class="flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full flex justify-between">
                <div class="flex flex-col items-center">
                    <div v-for="item in runningData" class="flex flex-col items-center">
                        <div>{{ item.value }}</div>
                        <div>{{ item.name }}</div>
                    </div>
                </div>
                <div>
                    <ThirdLevelTitle title="设备类型" />
                    <div>
                        大大大
                    </div>
                </div>
            </div>
            <div class="8k:w-1/2 4k:w-full h-60">
                <ConeBarChart />
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>