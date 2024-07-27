<script setup>
import { ref, computed, watch } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import _ from 'lodash'
import ConeBarChart from '../charts/ConeBarChart.vue'
import { runningMonitoringData } from '@/assets/chartData/data'


const { internetDevices, analyDeatailData, monitorData } = runningMonitoringData

const runActive = ref('总数')
const currentRun = ref({})

watch(runActive, (val) => {
    let data = _.find(monitorData, m => m.name === val)
    const all = _.find(monitorData, m => m.name === '总数')
    if (_.size(data.layRates) === 0) {
        data.layRates = all.layRates
    }
    if (_.size(data.coverageData) === 0) {
        data.coverageData = all.coverageData
    }
    currentRun.value = data
}, {
    immediate: true
})

const sum = computed(() => _.reduce(currentRun.value.sensorData, (pre, cur) => (pre + Number(cur.value)), 0))

const onTabChange = (name) => {
    if (name === runActive.value) {
        runActive.value = '总数'
        return
    }
    runActive.value = name
}
const barWidth = (index) => {
    if (index === 0) {
        return
    }
    return index === 1 ? (internetDevices[1].value / internetDevices[0].value).toFixed(2) * 100 : internetDevices[2].value
}

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="设施概况"></FristLevelTitle>
        <SecondLevelTitle title="状态分析"></SecondLevelTitle>
        <div class="flex w-full justify-around">
            <div class="flex w-full items-center justify-center px-2" v-for="item, index in internetDevices"
                :key="item.name">
                <div
                    :class="`w-1/4 flex items-center text-center ${index === 0 ? 'h-10 bg-[url(assets/imgs/overview/o-bottom.png)] bg-size' : ''}`">
                    {{
                        item.name }}</div>
                <div v-if="index !== 0" class="w-2/4 bg-[#30518d] h-6 rounded-2xl">
                    <div :style="{ width: `${barWidth(index)}%` }" class="bar h-full bg-gradient rounded-2xl"></div>
                </div>
                <div class="w-1/4 text-center gradient-text-third font-bold text-xl">{{ item.value }}{{ item.unit }}
                </div>
            </div>
        </div>

        <div class="flex items-center my-4 justify-between">
            <div class="flex w-1/3 items-center justify-between flex-wrap">
                <div v-for="item, index in analyDeatailData.slice(0, analyDeatailData.length / 2)"
                    @click="onTabChange(item.name)"
                    :class="`${runActive === item.name ? 'run-item-active' : 'run-item'} bg-size hover:cursor-pointer flex w-[43%] mx-2 py-20 flex-col h-24 justify-center items-center`">
                    <div>在线：<span class="gradient-text text-2xl font-bold">{{ item.onLine }}</span></div>
                    <div>离线：<span class="gradient-text-two text-2xl font-bold">{{ item.offLine }}</span></div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
            <div
                class="flex w-1/3 bg-[url('assets/imgs/running/run-center-bg.png')] bg-size items-center justify-center h-80 flex-wrap">
            </div>
            <div class="flex w-1/3 items-center justify-between flex-wrap">
                <div v-for="item, index in analyDeatailData.slice(analyDeatailData.length / 2)"
                    @click="onTabChange(item.name)"
                    :class="`${runActive === item.name ? 'run-item-active' : 'run-item'} bg-size hover:cursor-pointer flex w-[43%] mx-2 py-20 flex-col h-24 justify-center items-center`">
                    <div>在线：<span class="gradient-text text-2xl font-bold">{{ item.onLine }}</span></div>
                    <div>离线：<span class="gradient-text-two text-2xl font-bold">{{ item.offLine }}</span></div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="布设分析"></SecondLevelTitle>
        <div class="flex flex-wrap justify-between">
            <div class="8k:w-[40%] 4k:w-full flex justify-between">
                <div v-if="currentRun.layRates.length > 0" class="flex w-[40%] flex-col items-center">
                    <div v-for="r, rIndex in currentRun.layRates"
                        class="bg-size bg-[url('assets/imgs/running/lay-rate.png')] my-2 w-32 h-1/3 flex flex-col items-center">
                        <div :class="`gradient-text-${rIndex}`"><span class="text-xl font-bold ">{{ r.value
                                }}</span>{{
                                    r.unit }}</div>
                        <div>{{ r.name }}</div>
                    </div>
                </div>
                <div v-if="currentRun.sensorData.length > 0" class="max-h-80 w-[60%]">
                    <ThirdLevelTitle title="设备类型" />
                    <div class="sen-item flex flex-col  justify-between my-4" v-for="item in currentRun.sensorData"
                        :key="item.name">
                        <div class="flex items-center">{{ item.name }}</div>
                        <div class="flex h-4 w-full justify-between">
                            <div class="w-3/4 bg-[#107BB8] h-full">
                                <div :style="`width: ${(item.value / sum) * 100}%`"
                                    class="relative h-full bg-[#008AFF]">
                                    <div class="h-full absolute right-0 bg-white w-[5px]"></div>
                                </div>
                            </div>
                            <div class="value-unit w-1/4 px-1 flex items-center">
                                <div class="text-xl font-bold">{{ item.value }}</div>
                                <div>{{ item.unit }}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="8k:w-[55%] 4k:w-full flex">
                <div class="w-full h-full">
                    <ThirdLevelTitle title="区县设备覆盖" />
                    <div class="w-full h-64 my-8">
                        <ConeBarChart :data="currentRun.coverageData" />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
.run-item {
    background-image: url('@/assets/imgs/running/run-b.png');
}

.run-item-active {
    background-image: url('@/assets/imgs/running/run-b-checked.png');
}

.gradient-text {
    background: linear-gradient(to bottom, #f4fffa, #0BFFA0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-two {
    background: linear-gradient(to bottom, #f4fffa, #FF2F49);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-third {
    background: linear-gradient(to bottom, #ffffff, #f6c44a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-0 {
    background: linear-gradient(to bottom, #e2effe, #4491f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-1 {
    background: linear-gradient(to bottom, #cff8fe, #5ecae3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-2 {
    background: linear-gradient(to bottom, #dffefa, #79fbe3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bg-gradient {
    /* 背景渐变 */
    background: linear-gradient(to right, #6291b2, #6ae3f0);
    transition: all 0.3s ease-in-out;
}
</style>