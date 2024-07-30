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

const { naturalColumns, naturalTableData, liquefiedColumns, liquefiedTableData, roadData, convergenceRate, densityData, bridgeData, bridgeColumns, bridgeTableData, stationData } = basicFacilitiesData
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
const columns1 = [
    { title: "区域", key: "区域", },
    { title: "底数", key: "底数", },
    // { title: "养护类别", key: "养护类别", },
    { title: "养护类别(I类)", key: "I类", },
    { title: "养护类别(II类)", key: "II类", },
    { title: "养护类别(III类)", key: "III类", },
    { title: "养护类别(IV类)", key: "IV类", },
    { title: "养护类别(V类)", key: "V类", }
];
const tableData1 = [
    { "区域": "市直", "底数": 207, "I类": 2, "II类": 78, "III类": 67, "IV类": 28, "V类": 32 },
    { "区域": "盐都区", "底数": 69, "I类": 0, "II类": 0, "III类": 43, "IV类": 9, "V类": 17 },
    { "区域": "亭湖区", "底数": 34, "I类": 1, "II类": 17, "III类": 12, "IV类": 4, "V类": 0 },
    { "区域": "大丰区", "底数": 66, "I类": 0, "II类": 24, "III类": 39, "IV类": 3, "V类": 0 },
    { "区域": "开发区", "底数": 43, "I类": 1, "II类": 3, "III类": 7, "IV类": 31, "V类": 1 },
    { "区域": "城南新区", "底数": 167, "I类": 0, "II类": 1, "III类": 44, "IV类": 117, "V类": 5 },
    { "区域": "建湖县", "底数": 46, "I类": 0, "II类": 0, "III类": 1, "IV类": 45, "V类": 0 },
    { "区域": "射阳县", "底数": 18, "I类": 0, "II类": 0, "III类": 16, "IV类": 1, "V类": 1 },
    { "区域": "阜宁县", "底数": 25, "I类": 2, "II类": 0, "III类": 23, "IV类": 0, "V类": 0 },
    { "区域": "滨海县", "底数": 19, "I类": 0, "II类": 0, "III类": 12, "IV类": 7, "V类": 0 },
    { "区域": "响水县", "底数": 16, "I类": 0, "II类": 0, "III类": 9, "IV类": 7, "V类": 0 },
    { "区域": "东台市", "底数": 140, "I类": 4, "II类": 0, "III类": 86, "IV类": 31, "V类": 19 }
];
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="场站分析" />
        <div class="pipe-analy-content w-full  flex flex-wrap justify-between">
            <div class="8k:w-[48%] 4k:w-full">
                <ThirdLevelTitle title="燃气">
                    <template v-slot:title-slot>
                        <div class="flex justify-between items-center">
                            <Tab v-model="active" :data="titletab1" />
                        </div>
                    </template>
                </ThirdLevelTitle>
                <Tablechart :columns="columns" :tableData="tableData" class="h-60" />
            </div>
            <div class="8k:w-[48%] 4k:w-full">
                <ThirdLevelTitle title="供排水">
                    <template v-slot:title-slot>
                        <div class="flex justify-between items-center">
                            <Tab v-model="activeStation" :data="titletabs2" />
                        </div>
                    </template>
                </ThirdLevelTitle>
                <div class="flex h-full justify-between flex-wrap items-center ">
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
        </div>

        <div class="w-full mt-20 flex flex-wrap justify-between">
            <div class="8k:w-[48%] 4k:w-full">
                <FristLevelTitle title="道路分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in roadData" :key="index" @click="dataChnage(item.name)"
                        class="bg-[url(assets/imgs/infrastructure/road-item-bg.png)] bg-size w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div v-if="dataActive === item.name"
                                class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-1.png')] bg-size">
                            </div>
                            <div v-else class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-2.png')] bg-size">
                            </div>
                            <div class="analy-item-name px-1">{{ item.name }}</div>
                        </div>
                        <div class="analy-item-total text-[#fcf16f]">{{ item.value }}{{ item.unit }}</div>
                    </div>
                </div>
            </div>
            <div class="8k:w-[48%] 4k:w-full">
                <FristLevelTitle title="桥梁分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <div v-for="(item, index) in bridgeData" :key="index" @click="dataChnage(item.name)"
                        class="bg-[url(assets/imgs/infrastructure/road-item-bg.png)] bg-size w-[45%] flex justify-between h-14 px-2 m-2 items-center">
                        <div class="flex items-center">
                            <div v-if="dataActive === item.name"
                                class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-1.png')] bg-size">
                            </div>
                            <div v-else class="w-6 h-6 bg-[url('assets/imgs/infrastructure/road-item-2.png')] bg-size">
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
            <div class="8k:w-[48%] 4k:w-full flex flex-col">
                <SecondLevelTitle title="类型分析" />
                <div class="w-full mb-14">
                    <Pipe3dChart class="w-full h-60" :data="convergenceRate" />
                </div>
                <SecondLevelTitle title="密度分析" />
                <div class="analy-list w-full flex flex-wrap justify-between">
                    <Bar3dChart :data="densityData" title="密度" class="w-full h-60" />
                </div>
            </div>
            <div class="8k:w-[48%] 4k:w-full">
                <SecondLevelTitle title="养护分析" />
                <Tablechart :columns="columns1" :tableData="tableData1" class="h-80" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>