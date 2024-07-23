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
            <SecondLevelTitle title="项目概览"></SecondLevelTitle>

            <!-- 第一部分 -->
            <div class="w-full  flex justify-between flex-wrap">
                <div class="w-full flex flex-wrap justify-between items-center mb-4">

                    <div class="tray-item-l flex 8k:w-1/2 4k:w-full h-40 items-center">
                        <div class="w-1/3 text-center">
                            <div>建设中</div>
                            <div><span class="text-2xl font-bold">20</span>个</div>
                            <div>占比：20%</div>
                        </div>
                        <div class="w-1/3 text-center">
                            <div><span class="text-2xl font-bold">20</span>个</div>
                            <div class="text-2xl font-bold">项目总数</div>
                            <div>(个)</div>
                        </div>
                        <div class="w-1/3 text-center">
                            <div>建设中</div>
                            <div>20个</div>
                            <div>占比：20%</div>
                        </div>
                    </div>


                    <div class="tray-item-r flex 8k:w-1/2 4k:w-full h-40 items-center">
                        <div class="w-1/3 text-center">
                            <div>建设中</div>
                            <div><span class="text-2xl font-bold">20</span>个</div>
                            <div>占比：20%</div>
                        </div>
                        <div class="w-1/3 text-center">
                            <div><span class="text-2xl font-bold">20</span>个</div>
                            <div class="text-2xl font-bold">项目总数</div>
                            <div>(个)</div>
                        </div>
                        <div class="w-1/3 text-center">
                            <div>建设中</div>
                            <div>20个</div>
                            <div>占比：20%</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- 第二部分 -->
        <div class="w-full 8k:h-1/3  flex justify-between items-center flex-wrap">
            <div v-for="(item, index) in list" :key="index" class="8k:w-1/5 4k:w-1/3 flex items-center mb-4">
                <div :class="` w-20 h-20 type-icon-${index + 1}`"></div>
                <div class="flex h-20 flex-col items-center justify-center px-2 ">
                    <div class="">{{ item.category }}(个)</div>
                    <div class="text-xl font-bold">{{ item.count }}</div>
                </div>
            </div>
        </div>

        <!-- 第三部分 -->
        <div class="w-full 8k:h-1/3  flex justify-between flex-wrap">
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>
                <PipeIconChart class="w-full h-60" />
            </div>
            <div class="8k:w-1/2 4k:w-full">
                <SecondLevelTitle title="官网分析"></SecondLevelTitle>
                <PipeIconChart class="w-full h-60" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tray-item-l {
    background-image: url('@/assets/imgs/tray-item-l.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.tray-item-r {
    background-image: url('@/assets/imgs/tray-item-r.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

@for $i from 1 through 10 {
    .type-icon-#{$i} {
        background-image: url('@/assets/imgs/type-item-#{$i}.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
}
</style>