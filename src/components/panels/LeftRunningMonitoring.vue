<script setup>
import { ref, defineProps, computed } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import _ from 'lodash'
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

const sensorData = ref([
    { name: "可燃气体探测", value: 12, unit: "台" },
    { name: "压力探测器", value: 41, unit: "台" },
    { name: "温度探测器", value: 31, unit: "台" },
    { name: "液体探测器", value: 41, unit: "台" },
    { name: "流量探测器", value: 42, unit: "台" }
])

const sum = computed(() => _.reduce(sensorData.value, (pre, cur) => (pre + cur.value), 0))

console.log(sum.value)
const runActive1 = ref(0)
const runActive2 = ref(0)
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

        <div class="flex items-center my-4 justify-between">
            <div class="flex w-1/3 items-center justify-between flex-wrap">
                <div v-for="item, index in data" @click="runActive1.value = index"
                    class="run-item bg-[url('assets/imgs/running/run-b.png')] flex w-[43%] mx-2 py-20 flex-col h-24 justify-center items-center">
                    <div>在线：{{ item.onLine }}</div>
                    <div>离线：{{ item.offLine }}</div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
            <div
                class="flex w-1/3 run-center bg-[url('assets/imgs/running/run-center-bg.png')] items-center justify-center h-80 flex-wrap">
            </div>
            <div class="flex w-1/3 items-center justify-between flex-wrap">
                <div v-for="item in data"
                    class="run-item bg-[url('assets/imgs/running/run-b.png')] flex w-[44%] mx-2 py-20 flex-col h-24 justify-center items-center">
                    <div>在线：{{ item.onLine }}</div>
                    <div>离线：{{ item.offLine }}</div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="布设分析"></SecondLevelTitle>
        <div class="flex flex-wrap justify-between">
            <div class="8k:w-[40%] 4k:w-full flex justify-between">
                <div class="flex w-1/3 flex-col items-center">
                    <div v-for="item in runningData"
                        class="layout-item bg-[url('assets/imgs/running/run-b.png')] my-4 w-20 h-20 flex flex-col items-center">
                        <div>{{ item.value }}</div>
                        <div>{{ item.name }}</div>
                    </div>
                </div>
                <div class="w-2/3">
                    <ThirdLevelTitle title="设备类型" />
                    <div class="">
                        <div class="sen-item flex flex-col justify-between my-4" v-for="item in sensorData"
                            :key="item.name">
                            <div class="flex items-center">{{ item.name }}</div>
                            <div class="flex h-4 w-full justify-between">
                                <div class="bar w-5/6 bg-[#123062] h-full">
                                    <div :style="`width: ${(item.value / sum) * 100}%`"
                                        class="percent h-full bg-[#3c88f7]">
                                    </div>
                                </div>
                                <div class="value-unit flex items-center">
                                    <div>{{ item.value }}</div>
                                    <div>{{ item.unit }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="8k:w-[60%] 4k:w-full flex">
                <div class="w-full h-full">
                    <ThirdLevelTitle title="设备类型" />
                    <div class="w-full h-64 my-8">
                        <ConeBarChart />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
.run-item,
.layout-item,
.run-center {
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>