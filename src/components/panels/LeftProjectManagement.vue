<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
import AutoLoadTabs from '../common/AutoLoadTabs.vue'

const tabs1 = ref([
    { id: 1, name: 'Tab 1' },
    { id: 2, name: 'Tab 2' },
    { id: 3, name: 'Tab 3' },
    { id: 4, name: 'Tab 4' },
    { id: 5, name: 'Tab 5' },
    { id: 6, name: 'Tab 6' },
    { id: 7, name: 'Tab 7' },
    { id: 8, name: 'Tab 8' },
    { id: 9, name: 'Tab 9' },
    { id: 10, name: 'Tab 10' },
]);
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
        <ThirdLevelTitle title="官网管线2">
            <!-- tabs插槽 -->
            <template v-slot:tabs>
                <div class="tabs flex">
                    <div class="tab-item flex items-center" v-for="tab in tabs" :key="tab.value">
                        dad
                    </div>
                </div>
            </template>
        </ThirdLevelTitle>
        <AutoLoadTabs :tabs="tabs1" />
    </div>
</template>

<style scoped lang="scss"></style>