<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import LineChart from '../charts/LineChart.vue';
import Bar3dChart from '../charts/Bar3dChart.vue';
import Pipe3dChartTwo from '../charts/Pipe3dChartTwo.vue';


const roadAnaly = ref([
    {
        name: '道路',
        total: '59条'
    },
    {
        name: '公里数',
        total: '453km'
    },
    {
        name: '路灯',
        total: '12个'
    },
    {

        name: '总功率',
        total: '1000kW'
    }
])

const pipeChartdata = ref([
    { name: '亭湖区', percentage: 24, distance: '25km', color: '#FF6384' },
    { name: '盐都区', percentage: 24, distance: '25km', color: '#FFCE56' },
    { name: '大丰区', percentage: 24, distance: '15km', color: '#36A2EB' },
    { name: '建湖县', percentage: 24, distance: '25km', color: '#FFA07A' },
    { name: '阜宁县', percentage: 24, distance: '25km', color: '#4BC0C0' },
    { name: '滨海县', percentage: 24, distance: '25km', color: '#FF6384' },
    { name: '响水县', percentage: 24, distance: '25km', color: '#FFCE56' },
    { name: '东台市', percentage: 24, distance: '45km', color: '#36A2EB' },
    { name: '射阳县', percentage: 24, distance: '25km', color: '#FFA07A' },
])
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="场站分析" />
        <div class="pipe-analy-content w-full flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full h-60">
                <ThirdLevelTitle title="总数" />
                <LineChart />
            </div>
            <div class="8k:w-1/2 4k:w-full h-60">
                <ThirdLevelTitle title="总数" />
                <LineChart />
            </div>
            <div>

            </div>
        </div>

        <div class="w-full flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <FristLevelTitle title="道路分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in roadAnaly" :key="index"
                        class="analy-item w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div class="w-6 h-6 bg-[url('assets/imgs/road-item-1.png')] bg-cover"></div>
                            <div class="analy-item-name px-1">{{ item.name }}</div>
                        </div>
                        <div class="analy-item-total text-[#fcf16f]">{{ item.total }}</div>
                    </div>
                </div>
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <FristLevelTitle title="桥梁分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in roadAnaly" :key="index"
                        class="analy-item w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div class="w-6 h-6 bg-[url('assets/imgs/road-item-1.png')] bg-cover"></div>
                            <div class="analy-item-name px-1">{{ item.name }}</div>
                        </div>
                        <div class="analy-item-total text-[#fcf16f]">{{ item.total }}</div>
                    </div>
                </div>
            </div>

        </div>

        <div class="w-full flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full flex flex-col">
                <div>
                    <SecondLevelTitle title="类型分析" />
                    <div class="w-full flex">
                        <div class="chart-container w-full h-60">
                            <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />

                        </div>
                    </div>
                </div>
                <SecondLevelTitle title="密度分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div class="chart-container w-full h-60">
                        <Bar3dChart />

                    </div>
                </div>
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="养护分析" />
                <div class="chart-container w-full h-96">
                    <Bar3dChart />

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.analy-item {
    background-image: url('@/assets/imgs/road-item-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}
</style>