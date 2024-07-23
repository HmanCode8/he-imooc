<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import BarRowChart from '../charts/BarRowChart.vue';
import LineAreaChart from '../charts/LineAreaChart.vue';


const list = ref([
    {
        name: '官网',
        value: 100
    },
    {
        name: '微信',
        value: 30
    },
    {
        name: '微博',
        value: 20
    },
    {
        name: '官网',
        value: 100
    },
    {
        name: '微信',
        value: 30
    },
    {
        name: '其他',
        value: 10
    }
])

const tabs = ref([
    {
        name: '类型',
        value: 'type'
    },
    {

        name: '分区',
        value: 'partition'
    }
])
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="第三方施工项目"></FristLevelTitle>
        <div class="flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型" />

                <div class="w-full flex justify-around">
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project-item-2.png')]">
                        <div>223</div>
                        <div class="flex flex-col justify-around items-center">
                            <div>项目总数</div>
                            <div>(个)</div>
                        </div>
                    </div>
                    <div class="p-item  flex items-center justify-center">中间</div>
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project-item-1.png')]">
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
            <div class="chart-container w-full h-80">
                <LineAreaChart />
            </div>
        </div>

        <div class="flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle class="w-full" title="施工类型" />

                <div class="w-full flex justify-around">
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project-item-2.png')]">
                        <div>223</div>
                        <div class="flex flex-col justify-around items-center">
                            <div>项目总数</div>
                            <div>(个)</div>
                        </div>
                    </div>
                    <div class="p-item  flex items-center justify-center">中间</div>
                    <div
                        class="p-item w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project-item-1.png')]">
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
    </div>
</template>

<style scoped lang="scss">
.p-item {
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>