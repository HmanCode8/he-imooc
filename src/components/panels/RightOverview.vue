<script setup lang="ts">
import { useEffct } from 'vue'
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import PipeChart from '../charts/PipeChart.vue'
import barRowChart from '../charts/BarRowChart.vue'
import Tablechart from '../charts/Tablechart.vue'

import { useGlobalStore } from "@/store";

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
        data: 43
    },

    {
        name: '已完成',
        data: 12
    },

    {
        name: '处置中',
        data: 15
    },
    {
        name: '已逾期',
        data: 20
    }
]

</script>

<template>
    <div class="overview">
        <FristLevelTitle title="智慧监测"></FristLevelTitle>
        <SecondLevelTitle title="风险隐患"></SecondLevelTitle>

        <div class="overview-content flex flex-wrap justify-between w-full ">
            <!-- 风险总数 -->

            <div class="risk-count 4k:w-full 8k:w-[45%]  mx-3">
                <div class="flex w-full bg-custom-gradient p-2">
                    <div class="risk-title font-bold">风险总数 <span class="text-[#9faf70]">{{ 145 }}</span>个</div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="item in riskLevel" :key="item.value">
                            <div class="icon w-2 h-2 bg-amber-300"></div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] bg-[#4376d5] m-1 flex  justify-between" v-for="item in riskData"
                        :key="item.name">
                        <div class="flex items-center">
                            <div class="icon w-2 h-2 bg-amber-300 mx-1"></div>

                            <div class="risk-item-name">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value">{{ item.data }}件</div>

                    </div>
                </div>
            </div>

            <!-- 隐患总数 -->

            <div class="risk-count 4k:w-full 8k:w-[45%]  mx-3">
                <div class="flex w-full bg-custom-gradient p-2">
                    <div class="risk-title font-bold">隐患总数 <span class="text-[#9faf70]">{{ 145 }}</span>个</div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="item in riskLevel" :key="item.value">
                            <div class="icon w-2 h-2 bg-amber-300"></div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] bg-[#4376d5] m-1 flex  justify-between" v-for="item in riskData"
                        :key="item.name">
                        <div class="flex items-center">
                            <div class="icon w-2 h-2 bg-amber-300 mx-1"></div>

                            <div class="risk-item-name">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value">{{ item.data }}件</div>

                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="监测报警"></SecondLevelTitle>

        <div class="waring flex flex-wrap justify-between w-full">
            <div class="waring-item  p-2 4k:w-full 8k:w-[45%]">
                <div class="flex justify-between  w-full">
                    <div class="flex items-center">
                        <div class="h-10 w-10 rounded-full">

                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="flex">
                                <h2>1960</h2>台
                            </div>
                            <div>设备总数</div>
                        </div>
                    </div>
                    <div>
                        <div>种类：<span class="text-red-500">10</span>台</div>
                        <div>在线</div>
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div class="flex items-center">
                        <div class="h-10 w-10 rounded-full">

                        </div>
                        <div class="flex flex-col justify-center">
                            <div class="flex">
                                <h2>1960</h2>台
                            </div>
                            <div>设备总数</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="waring-item  p-2 4k:w-full 8k:w-[45%]">
                <div class="flex justify-around  items-center mb-4">
                    <div class="w-1/3">
                        <div class="item bg-orange-200 my-1">
                            <div class="title">风险</div>
                            <div class="value">10</div>
                        </div>
                        <div class="item bg-orange-300">
                            <div class="title">风险</div>
                            <div class="value">10</div>
                        </div>
                    </div>
                    <div class="w-1/3 text-center">中间</div>
                    <div class="w-1/3">
                        <div class="item bg-orange-200 my-1">
                            <div class="title">风险</div>
                            <div class="value">10</div>
                        </div>
                        <div class="item bg-orange-300">
                            <div class="title">风险</div>
                            <div class="value">10</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="">
            <ul class="flex flex-wrap justify-between w-full">
                <li class="flex">
                    <div class="h-14 w-6 bg-cyan-500"></div>
                    <div>
                        <div><span>192</span>个</div>
                        <div>33%同比增长</div>
                        <div>已核查</div>
                    </div>
                </li>
                <li class="flex">
                    <div class="h-10 w-6 bg-cyan-500"></div>
                    <div>
                        <div><span>192</span>个</div>
                        <div>33%同比增长</div>
                        <div>已核查</div>
                    </div>
                </li>
                <li class="flex">
                    <div class="h-10 w-6 bg-cyan-500"></div>
                    <div>
                        <div><span>192</span>个</div>
                        <div>33%同比增长</div>
                        <div>已核查</div>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <div class="grid grid-cols-5 bg-[#1c3d6d] px-3 justify-between w-full">
                <div class="">类型</div>
                <div class="">报警数</div>
                <div class="">已核查</div>
                <div class="">已签收</div>
                <div class="">已办结</div>
            </div>
            <div class="table-body">
                <div class=" grid grid-cols-5 bg-[#081f51]  px-3 justify-between w-full">
                    <div class="">排水报警</div>
                    <div class="">10</div>
                    <div class="">4</div>
                    <div class="">6</div>
                    <div class="">12</div>
                </div>
                <div class=" grid grid-cols-5 bg-[#142d5d] px-3 justify-between w-full">
                    <div class="">第三方施工报警</div>
                    <div class="">10</div>
                    <div class="">4</div>
                    <div class="">6</div>
                    <div class="">12</div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>