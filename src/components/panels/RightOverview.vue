<script setup lang="ts">
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import Tablechart from '../charts/Tablechart.vue'

import { useGlobalStore } from "@/store";
import { color } from 'echarts'

const global = useGlobalStore()

const changeStore = () => {
    console.log(global.navActive)
    global.setNavActive('/dashboard')
}
const riskLevel = [
    {
        name: '高风险',
        value: 'high'
    },
    {
        name: '中风险',
        value: 'medium'
    },
    {
        name: '低风险',
        value: 'low'
    }
]

const riskData = [
    {
        name: '待处理',
        data: 43,
        color: '#f5bd41'
    },

    {
        name: '已完成',
        data: 12,

        color: '#4090d8'
    },

    {
        name: '处置中',
        data: 15,
        color: '#75fb8c'
    },
    {
        name: '已逾期',
        data: 20,
        color: '#eb4650'
    }
]

</script>

<template>
    <div class="overview">
        <FristLevelTitle title="智慧监测"></FristLevelTitle>
        <SecondLevelTitle title="风险隐患"></SecondLevelTitle>

        <div class="overview-content flex flex-wrap justify-between w-full">
            <!-- 风险总数 -->
            <div class="risk-count 4k:w-full 8k:w-[45%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-cover my-4 px-6">
                    <div class="risk-title font-bold">风险总数 <span class="text-[#9faf70]">{{ 145 }}</span>个</div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="(item, index) in riskLevel"
                            :key="item.value">
                            <div :class="`flex items-center justify-center warning-icon-${index + 1} w-12 h-12`">1
                            </div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item in riskData" :key="item.name">
                        <div class="flex items-center">
                            <div :style="{ backgroundColor: item.color }" class="icon w-2 h-2 mx-1"></div>

                            <div class="risk-item-name">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value">{{ item.data }}件</div>
                    </div>
                </div>
            </div>

            <!-- 隐患总数 -->
            <div class="risk-count 4k:w-full 8k:w-[45%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-cover my-4 px-6">
                    <div class="risk-title font-bold">隐患总数 <span class="text-[#9faf70]">{{ 145 }}</span>个</div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="(item, index) in riskLevel"
                            :key="item.value">
                            <div :class="` flex items-center justify-center warning-icon-${index + 1} w-12 h-12`">1
                            </div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item in riskData" :key="item.name">
                        <div class="flex items-center">
                            <div :style="{ backgroundColor: item.color }" class="icon w-2 h-2 mx-1"></div>

                            <div class="risk-item-name">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value">{{ item.data }}件</div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="监测报警"></SecondLevelTitle>

        <div class="waring flex flex-wrap justify-between w-full">
            <div class="waring-item flex flex-col flex-wrap 4k:w-1/3 8k:w-[20%]">
                <div class="flex justify-between">
                    <div
                        class="check-item w-20 h-24 my-2 bg-[url(assets/imgs/overview/check-item-1.png)] flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>1960</h2>台
                        </div>
                        <div>设备总数</div>
                    </div>
                    <div>
                        <div>种类：<span class="font-bold">10</span></div>
                        <div>在线：<span class="font-bold">10</span></div>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div
                        class="check-item w-20 h-24 my-2 bg-[url(assets/imgs/overview/check-item-2.png)] flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>1960</h2>台
                        </div>
                        <div>设备总数</div>
                    </div>
                </div>
            </div>
            <div class="waring-item-center bg-[url('assets/imgs/overview/check-bottom.png')] h-60 4k:w-2/3 8k:w-[40%]">
                <div class="flex items-center justify-center relative ">
                    <div
                        class="warning-item-1 w-32 h-32 flex flex-col items-center justify-center absolute top-1/2 left-0 bg-[url('assets/imgs/overview/level-item-2.png')]">
                        <div>个</div>
                        <div class="font-bold text-2xl">6584.1</div>
                        <div>二级报警</div>

                    </div>
                    <div
                        class="warning-item-2 w-32 h-32 flex flex-col items-center justify-center bg-[url('assets/imgs/overview/level-item-1.png')]">
                        <div>个</div>
                        <div class="font-bold text-2xl">33131</div>
                        <div>一级报警</div>
                    </div>
                    <div
                        class="warning-item-1 w-32 h-32 flex flex-col items-center justify-center absolute top-1/2 right-0 bg-[url('assets/imgs/overview/level-item-2.png')]">
                        <div>个</div>
                        <div class="font-bold text-2xl">33131</div>
                        <div>二级报警</div>
                    </div>
                </div>
            </div>
            <div class="waring-item  p-2 4k:w-full 8k:w-[35%]">
                <ul class="flex flex-wrap justify-between items-center  h-full w-full">
                    <li class="flex">
                        <div class="h-16 w-6 bg-[url('assets/imgs/overview/check-bar-1.png')] bar-item"></div>
                        <div class="px-4">
                            <div class="py-1">已核查<span>192</span>个</div>
                            <div class="py-1">33%同比增长</div>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="h-14 w-6 bg-[url('assets/imgs/overview/check-bar-2.png')] bar-item"></div>
                        <div class="px-4">
                            <div class="py-1">已核查<span>192</span>个</div>
                            <div class="py-1">33%同比增长</div>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="h-14 w-6 bg-[url('assets/imgs/overview/check-bar-3.png')] bar-item"></div>
                        <div class="px-4">
                            <div class="py-1">已核查<span>192</span>个</div>
                            <div class="py-1">33%同比增长</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div class="w-full">
            <Tablechart />
        </div>
    </div>
</template>

<style scoped lang="scss">
.level-item {
    @for $i from 1 through 3 {
        .warning-icon-#{$i} {
            background-image: url('@/assets/imgs/overview/level-#{$i}.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }
}

.risk-item,
.check-item,
.waring-item-center,
.bar-item {
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

@for $i from 1 through 3 {
    .warning-item-#{$i} {
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>