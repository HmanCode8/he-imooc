<script setup>
import { computed, ref, watch } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import Tab from '../common/Tab.vue'
import _ from 'lodash'
import Bar3dChart from '../charts/Bar3dChart.vue';
import Pipe3dChart from '../charts/Pipe3dChart.vue';
import Tablechart from '../charts/Tablechart.vue';
import { basicFacilitiesData } from '@/assets/chartData/data'

const { naturalColumns, naturalTableData, liquefiedColumns, liquefiedTableData, roadData, typeAlysisData, densityData, bridgeData, bridgeColumns, bridgeTableData, stationData } = basicFacilitiesData
const active = ref('natural')
const activeStation = ref('supply')
const dataActive = ref(roadData[0].name)
const dataChnage = (name) => {
    dataActive.value = name
}

const titletab1 = ref([
    { name: '天然气场站', value: 'natural' },
    { name: '液化气场站', value: 'liquefied' },
])

const titletabs2 = ref([
    { name: '供水气场站', value: 'supply' },
    { name: '排水气场站', value: 'drainage' },
])

const stationItem = computed(() => _.get(_.find(stationData, (item) => item.key === activeStation.value), 'data', []))
const columns = computed(() => active.value === 'natural' ? naturalColumns : liquefiedColumns)

const tableData = computed(() => active.value === 'natural' ? naturalTableData : liquefiedTableData)

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="场站分析" />
        <div class="pipe-analy-content w-full flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full h-60">
                <ThirdLevelTitle title="燃气">
                    <template v-slot:title-slot>
                        <div class="flex justify-between items-center">
                            <Tab v-model="active" :data="titletab1" />
                        </div>
                    </template>
                </ThirdLevelTitle>
                <Tablechart :columns="columns" :tableData="tableData" class="h-60" />
            </div>
            <div class="8k:w-1/2 4k:w-full h-60">
                <ThirdLevelTitle title="供排水">
                    <template v-slot:title-slot>
                        <div class="flex justify-between items-center">
                            <Tab v-model="activeStation" :data="titletabs2" />
                        </div>
                    </template>
                </ThirdLevelTitle>
                <!-- <TrapezoidalBarChart /> -->
                <div class="flex h-full justify-between flex-wrap items-center mx-2">
                    <div class="w-[23%] flex items-center flex-col justify-center h-1/2"
                        v-for="(item, index) in stationItem" :key="index">
                        <div
                            class="my-4 flex justify-center h-full w-full bg-[url('assets/imgs/infrastructure/top-icon-1.png')] bg-size mb-2">
                            <div class="flex items-center">
                                {{ item.name }}
                            </div>

                        </div>
                        <div>
                            {{ item.value }}{{ item.unit }}
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

        <div class="w-full mt-16 flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full">
                <FristLevelTitle title="道路分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in roadData" :key="index" @click="dataChnage(item.name)"
                        class="bg-[url(assets/imgs/infrastructure/road-item-bg.png)] bg-size w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div v-if="dataActive === item.name"
                                class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-1.png')] bg-cover"></div>
                            <div v-else class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-2.png')] bg-cover">
                            </div>
                            <div class="analy-item-name px-1">{{ item.name }}</div>
                        </div>
                        <div class="analy-item-total text-[#fcf16f]">{{ item.value }}{{ item.unit }}</div>
                    </div>
                </div>
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <FristLevelTitle title="桥梁分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in bridgeData" :key="index" @click="dataChnage(item.name)"
                        class="bg-[url(assets/imgs/infrastructure/road-item-bg.png)] bg-size w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div v-if="dataActive === item.name"
                                class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-1.png')] bg-cover"></div>
                            <div v-else class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-2.png')] bg-cover">
                            </div>
                            <div class="analy-item-name px-1">{{ item.name }}</div>
                        </div>
                        <div class="analy-item-total text-[#fcf16f]">{{ item.value }}{{ item.unit }}</div>
                    </div>
                </div>
            </div>

        </div>
        <!-- 类型分析 -->
        <div class="w-full flex flex-wrap justify-between">
            <div class="8k:w-1/2 4k:w-full flex flex-col">
                <SecondLevelTitle title="类型分析" />
                <div class="w-full mb-14">
                    <Pipe3dChart class="w-full h-60" :data="typeAlysisData" />
                </div>
                <SecondLevelTitle title="密度分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <Bar3dChart :data="densityData" class="w-full h-40" />
                </div>
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="养护分析" />
                <Tablechart :columns="columns" :tableData="tableData" class="h-806" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>