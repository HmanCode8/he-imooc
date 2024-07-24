<script setup>
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import Tab from '../common/Tab.vue'
import Pipe3dChart from '../charts/Pipe3dChart.vue';
import BarRowChart from '../charts/BarRowChart.vue';
import LineAreaChart from '../charts/LineAreaChart.vue';


const pieChartData = ref([
    { name: "待处理", value: 60, color: "#FF6384" },
    { name: "处置中", value: 23, color: "#FFCE56" },
    { name: "已完成", value: 99, color: "#FFA07A" },
])

const timeTabs = ref([
    {
        name: '近一周',
        value: 'week'
    },
    {
        name: '近一月',
        value: 'month'
    },
])

const onTabChange = (k) => {
    console.log(k)
}
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="第三方施工项目"></FristLevelTitle>
        <div class="flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型" />

                <div class="w-full flex justify-around">
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-2.png')]">
                        <div>223</div>
                        <div class="flex flex-col justify-around items-center">
                            <div>项目总数</div>
                            <div>(个)</div>
                        </div>
                    </div>
                    <div class="p-item  flex items-center justify-center">中间</div>
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-1.png')]">
                        <div>223</div>
                        <div class="flex flex-col justify-around items-center">
                            <div>项目总数</div>
                            <div>(个)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型" />

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <BarRowChart />
                    </div>
                </div>
            </div>

        </div>

        <div>
            <SecondLevelTitle class="w-full" title="巡检巡查">
                <template v-slot:title-slot>
                    <Tab :data="timeTabs" @onTabOnchage="onTabChange" />
                </template>
            </SecondLevelTitle>

            <div class="chart-container w-full h-80">
                <LineAreaChart />
            </div>
        </div>

        <div class="flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型1" />

                <div class="chart-container w-full h-60">
                    <Pipe3dChart :pieChartData="pieChartData" />/>
                </div>
            </div>

            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型" />

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <BarRowChart />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.p-item {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>