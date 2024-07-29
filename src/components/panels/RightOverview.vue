<script setup>
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import Tablechart from '../charts/Tablechart.vue'
import { overviewData } from '@/assets/chartData/data'

const { riskTotalData, hideTotalData, warningColumns, warningTableData, deviceData } = overviewData

const riskLevel = [
    {
        name: '高风险',
        key: 'high',
        value: 1
    },
    {
        name: '中风险',
        key: 'medium',
        value: 2
    },
    {
        name: '低风险',
        key: 'low',
        value: 3
    }
]

const colors = ['#f5bd41', '#4090d8', '#75fb8c', '#eb4650']
</script>

<template>
    <div class="overview">
        <FristLevelTitle title="智慧监测"></FristLevelTitle>
        <SecondLevelTitle title="风险隐患"></SecondLevelTitle>

        <div class="overview-content flex flex-wrap justify-between w-full">
            <!-- 风险总数 -->
            <div class="risk-count 4k:w-full 8k:w-[48%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-size my-4 px-2">
                    <div class="risk-title text-xl mt-[-5px] font-[pengmenzhengdao]">风险总数<span
                            class="text-4xl gradient-text">{{ riskTotalData.total
                            }}</span>个
                    </div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="(item, index) in riskLevel"
                            :key="item.value">
                            <div :class="`flex items-center justify-center warning-icon-${index + 1} w-12 h-12`">
                                {{ riskTotalData[item.key] }}
                            </div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] px-2 py-1 my-6 bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item, i in riskTotalData.data" :key="item.name">
                        <div class="flex items-center mt-[-5%]">
                            <div :style="{ backgroundColor: colors[i], filter: `drop-shadow(2px 2px 5px ${colors[i]})` }"
                                class="icon w-3 h-3 mx-1 rounded-full"></div>

                            <div class="risk-item-name text-xl">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value mt-[-5%]"><span class="text-2    xl">{{ item.value }}</span>件</div>
                    </div>
                </div>
            </div>

            <!-- 隐患总数 -->
            <div class="risk-count 4k:w-full 8k:w-[48%] mx-2">
                <div
                    class="flex items-center w-full bg-[url('assets/imgs/overview/o-title-bg.png')] h-10  bg-size my-4 px-2">
                    <div class="risk-title text-xl mt-[-5px] font-[pengmenzhengdao]">隐患总数<span
                            class="text-4xl gradient-text">{{ hideTotalData.total
                            }}</span>个
                    </div>
                    <div class="level flex">
                        <div class="level-item flex items-center mx-1" v-for="(item, index) in riskLevel"
                            :key="item.value">
                            <div :class="`flex items-center justify-center warning-icon-${index + 1} w-12 h-12`">
                                {{ hideTotalData[item.key] }}
                            </div>
                            <div class="level-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="risk-list py-2 flex justify-center flex-wrap">
                    <div class="risk-item w-[45%] px-2  py-1 my-6 bg-[url('assets/imgs/overview/level-title.png')] m-1 flex  justify-between"
                        v-for="item, i in hideTotalData.data" :key="item.name">
                        <div class="flex items-center mt-[-5%]">
                            <div :style="{ backgroundColor: colors[i], filter: `drop-shadow(2px 2px 5px ${colors[i]})` }"
                                class="icon w-3 h-3 mx-1 rounded-full"></div>

                            <div class="risk-item-name text-xl">{{ item.name }}</div>
                        </div>
                        <div class="risk-item-value mt-[-5%]"><span class="text-2    xl">{{ item.value }}</span>件</div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="监测报警"></SecondLevelTitle>

        <div class="waring flex flex-wrap justify-between w-full h-80">
            <div class="waring-item flex flex-col justify-between flex-wrap 4k:w-1/3 8k:w-[30%]">
                <div class="flex justify-between  px-2">
                    <div
                        class="check-item w-24 h-28 my-2 bg-[url(assets/imgs/overview/check-item-1.png)] bg-size flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>7575</h2>
                        </div>
                        <div>设备总数(台)</div>
                    </div>
                    <div class="mt-4">
                        <div><span class="text-[#89C3DF]">种类(类)：</span><span class="font-bold text-2xl">35</span></div>
                        <div><span class="text-[#89C3DF]">在线(%)：</span><span class="font-bold text-2xl">98.09</span>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between px-2">
                    <div
                        class="check-item  w-24 h-28 my-2 bg-[url(assets/imgs/overview/check-item-2.png)] flex flex-col items-center justify-around">
                        <div class="flex">
                            <h2>1960</h2>
                        </div>
                        <div>设备总数(台)</div>
                    </div>
                </div>
            </div>
            <div
                class="waring-item-center bg-[url('assets/imgs/overview/check-bottom.png')] h-full 4k:w-2/3 8k:w-[40%]">
                <div class="flex items-center text-[#B0B7CA] justify-center relative ">
                    <div
                        class="warning-item-1 w-32 h-32 flex flex-col items-center justify-center absolute top-1/2 left-0 bg-[url('assets/imgs/overview/level-item-2.png')]">
                        <div>个</div>
                        <div class="font-bold text-3xl gradient-text-level2">49</div>
                        <div>二级报警</div>

                    </div>
                    <div
                        class="warning-item-2 w-32 h-32 flex flex-col items-center justify-center bg-[url('assets/imgs/overview/level-item-1.png')]">
                        <div>个</div>
                        <div class="font-bold text-3xl gradient-text-level1">5</div>
                        <div>一级报警</div>
                    </div>
                    <div
                        class="warning-item-1 w-32 h-32 flex flex-col items-center justify-center absolute top-1/2 right-0 bg-[url('assets/imgs/overview/level-item-2.png')]">
                        <div>个</div>
                        <div class="font-bold text-3xl gradient-text-level3">91</div>
                        <div>二级报警</div>
                    </div>
                </div>
            </div>
            <div class="waring-item  p-2 4k:w-full 8k:w-[30%]">
                <ul class="flex flex-wrap justify-between items-center  h-full w-full">
                    <li v-for="(item, index) in deviceData" :key="item.value" class="flex items-center">
                        <div :class="`h-16 w-6 bg-[url('assets/imgs/overview/check-bar-${index + 1}.png')] bg-size`">
                        </div>
                        <div class="px-4">
                            <div class="py-1">{{ item.name }}(件)<span class="px-2 text-2xl font-bold">{{ item.value
                                    }}</span></div>
                            <div :class="`py-1 text-2xl ${item.change === 'up' ? 'text-[#00FF7E]' : 'text-[#FFAE00]'}`">
                                {{
                                    item.percent }}
                                <span class="text-[#89C3DF]">{{ item.change === 'up' ? '↑同比增长' : '↓同比下降' }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Tablechart :columns="warningColumns" :tableData="warningTableData" :scrollable="false" class="h-80 mt-10" />
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

.gradient-text-level1 {
    background: linear-gradient(to bottom, #FFB392, #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-level2 {
    background: linear-gradient(to bottom, #A2FCFF, #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-level3 {
    background: linear-gradient(to bottom, #9ECAFF, #FFFFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>