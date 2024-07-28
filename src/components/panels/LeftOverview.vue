<script setup>
import { ref } from 'vue'
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import DoubleBarLineChart from '../charts/DoubleBarLineChart.vue'
import ProcessBar from '../charts/ProcessBar.vue'
import { overviewData } from '@/assets/chartData/data'

const { basicOverview, basicData, combinedData, inspectionDetails, oldRenovation } = overviewData

const legendData = ['巡检完成量', '计划巡检量', '巡检完成率']

const basicOverviewData = ref(basicOverview)


</script>

<template>
    <div class="overview">
        <FristLevelTitle title="综合监控"></FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <div class="overview-content flex flex-wrap justify-between">
            <div class="l 4k:w-full 8k:w-[35%]">
                <ul class="flex w-full flex-col">
                    <li class="flex w-full px-2 items-center" v-for="item, index in basicOverviewData" :key="item.name">
                        <div :class="`base-icon-${index + 1}  bg-size w-20 h-20 `">
                        </div>
                        <div class="flex justify-between px-4 w-3/4 bg-[url(assets/imgs/overview/o-bg.png)] bg-cover">
                            <div>{{ item.name }} <span class="ml-2">(km²)</span></div>
                            <div class="px-2">{{ item.value }}</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="l 4k:w-full relative 8k:w-[65%]">
                <div class="flex absolute flex-col w-full h-full items-center justify-center">

                    <div class="flex h-1/4 items-center justify-center  w-full">
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">
                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-2.png)] bg-cover"></div>
                            <div>{{ basicData[0].name }} <span class="font-bold text-xl">{{ basicData[0].value
                                    }}</span>{{ basicData[0].unit }}
                            </div>
                        </div>
                    </div>

                    <div class="flex h-1/4 items-center w-[90%] justify-around mt-[-4%] my-2">
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">

                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-3.png)] bg-cover"></div>

                            <div>{{ basicData[1].name }} <span class="font-bold text-xl">{{ basicData[1].value }}</span>
                                {{ basicData[1].unit }}</div>
                        </div>
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">
                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-4.png)] bg-cover"></div>

                            <div>{{ basicData[2].name }} <span class="font-bold text-xl">{{ basicData[2].value }}</span>
                                {{ basicData[2].unit }}</div>
                        </div>
                    </div>

                    <div class="flex h-1/4 items-center justify-around w-full my-2">
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">

                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-5.png)] bg-cover"></div>

                            <div>{{ basicData[3].name }} <span class="font-bold text-xl">{{ basicData[3].value }}</span>
                                {{ basicData[3].unit }}</div>
                        </div>
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">
                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-6.png)] bg-cover"></div>

                            <div>{{ basicData[4].name }} <span class="font-bold text-xl">{{ basicData[4].value }}</span>
                                {{ basicData[4].unit }}</div>
                        </div>
                    </div>

                    <div class="flex h-1/4 items-center w-full justify-center my-2">
                        <div
                            class="flex w-1/5 h-full items-center justify-center bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">
                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-7.png)] bg-cover"></div>

                            <div>{{ basicData[5].name }} <span class="font-bold text-xl">{{ basicData[5].value }}</span>
                                {{ basicData[5].unit }}</div>
                        </div>
                        <!-- <div
                            class="flex w-1/5 h-full border items-center justify-around bg-[url(assets/imgs/overview/base-item-bg.png)] bg-cover">
                            <div class="icon w-4 h-4 bg-[url(assets/imgs/overview/ic-item-8.png)] bg-cover"></div>

                            <div>{{ basicData[6].name }} <span class="font-bold text-xl">{{ basicData[6].value
                                    }}</span>{{ basicData[6].unit }}
                            </div>
                        </div> -->
                    </div>
                </div>

                <div class="flex justify-center h-48 items-center mb-4">
                    <div class="o-center bg-size w-1/3 h-full">
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="巡检巡查"></SecondLevelTitle>

        <div class="h-1/3 w-full">
            <DoubleBarLineChart title="巡检完成率" :data="combinedData" :legendData="legendData" />
        </div>

        <div class="old flex w-full justify-end">
            <ul class="flex flex-wrap w-full">
                <li v-for="(item, index) in inspectionDetails" :key="item.name"
                    class="4k:w-1/2 8k:w-1/4 my-2 flex items-center">
                    <div class="flex flex-col">
                        <div :class="`check-icon-${index + 1 > 8 ? 8 : index + 1} w-16 h-16`"></div>
                        <div class="text-center">{{ item.name }}</div>
                    </div>
                    <div class="flex m-2 flex-col">
                        <div v-for=" i in item.children" :key="i.name">
                            <p class="text-[#89C3DF]">{{ i.name }}</p>
                            <p class="text-xl font-bold">{{ i.value || 10 }}{{ i.unit }}</p>

                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <SecondLevelTitle class="mt-4" title="运行维护"></SecondLevelTitle>
        <div class="flex">
            <div
                class="font-bold w-[15%] h-10 bg-[url(assets/imgs/overview/o-bottom.png)] bg-size text-center text-lg mb-2">
                老旧改造完成率
            </div>
            <div class="flex w-[85%] justify-between">
                <ProcessBar :data="oldRenovation" />
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
}

.base-icon-2 {
    background-image: url('@/assets/imgs/overview/ic-build.png');
}

.o-center {
    background-image: url('@/assets/imgs/overview/o-center.png');
}

@for $i from 1 through 8 {
    .check-icon-#{$i} {
        background-image: url('@/assets/imgs/overview/check-icon-#{$i}.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}

@for $i from 1 through 4 {
    .base-item-#{$i} {
        top: ($i - 1) * 15%;
        width: ($i - 1) * 25%;
    }
}
</style>