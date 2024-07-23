<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'

import Pipe3dChart from '../charts/Pipe3dChart.vue'

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
        <FristLevelTitle title="官网分析"></FristLevelTitle>
        <SecondLevelTitle title="报警来源"></SecondLevelTitle>
        <ul class="flex flex-wrap">
            <li class="flex m-2" v-for="item in list" :key="item.name">
                <div class="flex flex-col justify-between">
                    <div class="icon w-10 h-10 rounded-full bg-blue-500"></div>

                    <div class="text-sm text-blue-500 ml-2">{{ item.name }}</div>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="t">管线：163Km</div>
                    <div class="t">管点：163Km</div>
                </div>
            </li>
        </ul>
        <SecondLevelTitle title="官网分析"></SecondLevelTitle>
        <ThirdLevelTitle title="官网管线">
            <!-- tabs插槽 -->
            <template v-slot:tabs>
                <div class="tabs">
                    <div class="tab-item flex items-center" v-for="tab in tabs" :key="tab.value">
                        <div class="tab-item-title" :class="{ active: tab.value == tabs[0].value }">{{ tab.name }}</div>
                    </div>
                </div>
            </template>
        </ThirdLevelTitle>
        <div class="chart-container w-1/2 h-1/2">
            <Pipe3dChart />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>