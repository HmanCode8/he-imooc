<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import PipeIconChart from '../charts/PipeIconChart.vue';


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
    { category: "综合交通", count: 100 },
    { category: "公共配套", count: 100 },
    { category: "市政公用", count: 100 },
    { category: "城市管理", count: 100 },
    { category: "城市路桥", count: 100 },
    { category: "村镇建设", count: 100 },
    { category: "园林绿化", count: 100 },
    { category: "水利设施", count: 100 },
    { category: "住房建设", count: 100 },
    { category: "信息化", count: 100 }
])


</script>

<template>
    <div class="pipe-analy">
        <div class="8k:h-1/3">
            <FristLevelTitle title="2024年全市城乡建设重点项目"></FristLevelTitle>
            <SecondLevelTitle title="报警来源"></SecondLevelTitle>

            <!-- 第一部分 -->
            <div class="w-full  flex justify-between flex-wrap">
                <div class="8k:w-1/2 4k:w-full flex  justify-between items-center mb-4">
                    <div class="flex flex-col items-center">
                        <div>建设中</div>
                        <div><span>20</span>个</div>
                        <div>占比：20%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-bold text-2xl">987</div>
                        <h2>项目总数</h2>
                        <div>（个）</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div>建设中</div>
                        <div><span>20</span>个</div>
                        <div>占比：20%</div>
                    </div>
                </div>
                <div class="8k:w-1/2 4k:w-full flex justify-between items-center mb-4">
                    <div class="flex flex-col items-center">
                        <div>建设中</div>
                        <div><span>20</span>个</div>
                        <div>占比：20%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="font-bold text-2xl">987</div>
                        <h2>项目总数</h2>
                        <div>（个）</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <div>建设中</div>
                        <div><span>20</span>个</div>
                        <div>占比：20%</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二部分 -->
        <div class="w-full 8k:h-1/3  flex justify-between items-center flex-wrap">
            <div v-for="(item, index) in list" :key="index" class="8k:w-1/5 4k:w-1/3 flex  items-center mb-4">
                <div class="icon w-4 h-4 bg-lime-400"></div>
                <div class="flex flex-col items-center">
                    <div class="">{{ item.category }}(个)</div>
                    <div class="">{{ item.count }}</div>
                </div>
            </div>
        </div>

        <!-- 第三部分 -->
        <div class="w-full 8k:h-1/3  flex justify-between flex-wrap">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>
                <PipeIconChart />
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>
                <PipeIconChart />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>