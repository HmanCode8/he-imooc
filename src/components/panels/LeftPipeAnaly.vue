<script setup>
import { computed, watch, ref, watchEffect } from 'vue';
import _ from 'lodash'
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import Pipe3dChart from '../charts/Pipe3dChart.vue';
import BarRowChart from '../charts/BarRowChart.vue';
import Bar3dChart from '../charts/Bar3dChart.vue';
import PipeIconChart from '../charts/PipeIconChart.vue';
import { basicFacilitiesData } from '@/assets/chartData/data'

const { facilities, baseData, typeAlysisData, totleSize } = basicFacilitiesData

const totalTitle = '总汇聚率'
const totalNum = _.get(_.find(typeAlysisData, { name: totalTitle }), 'value', 0)
const inspectionChartData = _.filter(typeAlysisData, (item) => item.name !== totalTitle)

const pipeActive = ref(facilities[0].name)
const currentData = ref([])
const facilitieData = ref(facilities)

const changeActive = (name) => {
    pipeActive.value = name
}


watch(pipeActive, (val) => {
    // _.find(baseData, m => m.name === val)
    currentData.value = _.find(baseData, m => m.name === val)

}, {
    immediate: true
})

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="官网分析">
            <template v-slot:title-slot>
                <div class="flex justify-between items-center">
                    <div v-for="t in totleSize" :key="t.name" class="flex mx-2 items-center">
                        <div class=" font-bold mr-2">{{ t.name }}</div>
                        <div class=" font-bold mr-2 text-[#cbb543]">{{ t.value }}</div>
                        <div class="">{{ t.unit }}</div>
                    </div>
                </div>
            </template>
        </FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <!-- 第一部分 -->
        <div>
            <div class="pipe-list flex justify-between px-1 flex-wrap">
                <div :class="`${pipeActive === item.name ? 'filter-drop-shadow' : ''} 4k:w-full 8k:w-[32%] my-4 hover:cursor-pointer  flex items-center bg-[url('assets/imgs/infrastructure/pipe-remak-item.png')] bg-size`"
                    v-for="(item, index) in facilitieData" @click="changeActive(item.name)" :key="index">
                    <div :class="`pipe-icon-${item.iconIndex}  w-24 h-24 bg-size`"></div>
                    <div class="">
                        <div
                            :class="`${pipeActive === item.name ? 'text-[#FFCC00]' : 'gradient-text'} font-[pengmenzhengdao]  text-2xl px-2`">
                            {{ item.name }}</div>
                        <div class="text-[#89C3DF] mt-6 flex">
                            <div class="pipe-line px-2">{{ item.children[0].name }}(km)：<span class="text-white">{{
                                item.children[0].value || '--'
                                    }}</span></div>
                            <div class="pipe-point">{{ item.children[1].name }}(个)： <span class="text-white">{{
                                item.children[1].value || '--' }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <SecondLevelTitle title="官网分析"></SecondLevelTitle>

        <div class="flex w-full flex-wrap justify-between">
            <!-- 行政区划分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="地下管线数据汇聚率"></ThirdLevelTitle>
                <Pipe3dChart :data="inspectionChartData" :total="totalNum" :haveTotal="true"
                    :graphicTitle="totalTitle" />

            </div>
            <!-- 管龄分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <ThirdLevelTitle class="w-full" title="管龄分析"></ThirdLevelTitle>

                <div class="w-full flex">
                    <div class="chart-container w-full h-60">
                        <BarRowChart :data="currentData.pipeAgeData" />
                    </div>
                </div>
            </div>

            <!-- 管径分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="管径分析"></SecondLevelTitle>
                <Bar3dChart :data="currentData.diameterData" title="管径" class="w-full h-60" />
            </div>

            <!-- 管材分析 -->
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="管材分析"></SecondLevelTitle>
                <PipeIconChart :data="currentData.pipeTextureData" class="w-full h-60" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 6 {
    .pipe-icon-#{$i} {
        background-image: url('@/assets/imgs/infrastructure/pipe-bg-#{$i}.png');
    }
}

.filter-drop-shadow {
    filter: drop-shadow(2px 4px 6px #1add1a);
}

.gradient-text {
    background: linear-gradient(to bottom, #c8f1fd, #68d1fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>