<script setup>
import { ref } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import { runningMonitoringData } from '@/assets/chartData/data'
import {useGlobalStore} from "@/store/index.js";

const global = useGlobalStore();
const { profileData, alarmData } = runningMonitoringData

const runData = ref(alarmData)

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="运行监测"></FristLevelTitle>
        <SecondLevelTitle title="运行概况"></SecondLevelTitle>
        <div class="pipe-analy-content my-10 flex justify-between flex-wrap">
            <div v-for="(item, index) in profileData" :key="item.name"
                class="flex 8k:w-[30%] 4k:w-1/3 mx-4 h-36 bg-[url('assets/imgs/running/bg.png')] bg-size items-center justify-around">
                <div class=" bg-[url('assets/imgs/running/run-b-1.png')] bg-size text-center 8k:w-[30%] 4k:w-1/3 h-2/3">
                    <div class="text-3xl font-bold gradient-text">{{ item.total }}</div>
                    <div>{{ item.name }}</div>
                </div>
                <div :class="`${item.key === 'down' ? 'text-[#76fbc7]' : 'text-[#eb4650]'}`">
                    <div :class="`text-3xl  text-[${item.key === 'down' ? '#d14150' : '#75f9c5'}]`">
                      {{ item.change }}{{ item.unit  }}
                      <i :class="`iconfont icon-${item.key === 'down' ? 'c041xiangxiajiantou' : 'jiantou-copy-copy'} text-xl`"></i>
                    </div>
                    <div>{{ item.description }}</div>
                </div>
            </div>
        </div>
        <div>
            <SecondLevelTitle title="监测报警"></SecondLevelTitle>
            <div class="flex flex-wrap items-center">
                <div class="w-full 8k:w-1/2 4k:w-full hover:cursor-pointer" v-for="(item, index) in runData"
                     :key="item.name" @click="global.setCurrentModule(item.name)">
                    <div class="flex items-center pipe-item 8k:w-[30%] 4k:w-1/3 bg-size h-6">
                        <div v-if="index === 0" class="w-6 h-6 bg-[url('assets/imgs/running/top-1.png')] bg-size">
                        </div>
                        <div v-else class="w-6 h-6 bg-[url('assets/imgs/running/top-2.png')] bg-size"></div>
                        <div class="name py-4 font-bold text-lg">{{ item.name }}</div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div v-for="child in item.children" :key="child.name" class="flex w-[33%] h-32 items-center">
                            <div
                                class="flex w-2/3 h-full mt-10 flex-col items-center text-center bg-[url('assets/imgs/running/run-b-2.png')] bg-size">
                                <div class="">{{ child.name }}({{ child.unit }})</div>
                                <div class="value">{{ child.value }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pipe-item {
    background: linear-gradient(to right, #255ab0, #071b4b);
}

.gradient-text {
    background: linear-gradient(to bottom, #ffffff, #f6c74f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>