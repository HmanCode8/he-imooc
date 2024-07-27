<script setup>
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import Tablechart from '../charts/Tablechart.vue'
import { useGlobalStore } from "@/store";
import { basicFacilitiesData } from '@/assets/chartData/data'
const { naturalColumns, naturalTableData } = basicFacilitiesData


const global = useGlobalStore()

const changeStore = () => {
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
            <div class="risk-count 4k:w-full 8k:w-[48%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-cover my-4 px-2">
                    <div class="risk-title text-xl mt-[-5px] font-[pengmenzhengdao]">风险总数<span
                            class="text-4xl gradient-text">{{ 145
                            }}</span>个
                    </div>
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
                    <div class="risk-item w-[45%] px-2 my-6 bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item in riskData" :key="item.name">
                        <div class="flex items-center mt-[-5%]">
                            <div :style="{ backgroundColor: item.color, filter: `drop-shadow(2px 2px 5px ${item.color})` }"
                                class="icon w-3 h-3 mx-1 rounded-full"></div>

                            <div class="risk-item-name text-xl">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value mt-[-5%]"><span class="text-2    xl">{{ item.data }}</span>件</div>
                    </div>
                </div>
            </div>

            <!-- 隐患总数 -->
            <div class="risk-count 4k:w-full 8k:w-[48%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-cover my-4 px-2">
                    <div class="risk-title text-xl mt-[-5px] font-[pengmenzhengdao]">隐患总数<span
                            class="text-4xl gradient-text">{{ 145
                            }}</span>个
                    </div>
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
                    <div class="risk-item w-[45%] px-2 my-6 bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item in riskData" :key="item.name">
                        <div class="flex items-center mt-[-5%]">
                            <div :style="{ backgroundColor: item.color, filter: `drop-shadow(2px 2px 5px ${item.color})` }"
                                class="icon w-3 h-3 mx-1 rounded-full"></div>

                            <div class="risk-item-name text-xl">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value mt-[-5%]"><span class="text-2    xl">{{ item.data }}</span>件</div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="监测报警"></SecondLevelTitle>

        <div class="waring flex flex-wrap justify-between w-full">
            <div class="waring-item flex flex-col flex-wrap 4k:w-1/3 8k:w-[20%]">
                <div class="flex justify-between">
                    <div
                        class="check-item w-24 h-28 my-2 bg-[url(assets/imgs/overview/check-item-1.png)] bg-size flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>1960</h2>
                        </div>
                        <div>设备总数(台)</div>
                    </div>
                    <div class="mt-4">
                        <div><span class="text-[#89C3DF]">种类：</span><span class="font-bold text-2xl">24</span></div>
                        <div><span class="text-[#89C3DF]">在线：</span><span class="font-bold text-2xl">50</span></div>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div
                        class="check-item  w-24 h-28 my-2 bg-[url(assets/imgs/overview/check-item-2.png)] flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>1960</h2>
                        </div>
                        <div>设备总数(台)</div>
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
        <Tablechart :columns="naturalColumns" :tableData="naturalTableData" class="h-60 mt-10" />
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

.gradient-text {
    background: linear-gradient(to bottom, #ffffff, #f6c44a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>