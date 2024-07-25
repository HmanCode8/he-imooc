<script setup>
import { ref } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'
const alarmData = [
    {
        name: "燃气报警",
        children: [
            { name: "终端用户", value: 419860, unit: "次" },
            { name: "燃气场站", value: 63, unit: "次" },
            { name: "窨井", value: 1, unit: "次" }
        ]
    },
    {
        name: "供水报警",
        children: [
            { name: "二次泵房", value: 419860, unit: "次" },
            { name: "供水厂站", value: 63, unit: "次" },
            { name: "供水泵站", value: 1, unit: "次" }
        ]
    },
    {
        name: "排水报警",
        children: [
            { name: "污水管网", value: 871, unit: "次" },
            { name: "雨水管网", value: 256, unit: "次" },
            { name: "污水泵站", value: 222, unit: "次" }
        ]
    },
    {
        name: "综合报警",
        children: [
            { name: "管线间距不足", value: 871, unit: "次" },
            { name: "建筑物占压", value: 256, unit: "次" },
            { name: "交叉穿越", value: 222, unit: "次" }
        ]
    },
    {
        name: "第三方施工报警",
        children: [
            { name: "三破光纤晃动", value: 8, unit: "次" },
            { name: "视频监测", value: 0, unit: "次" },
            { name: "三破光纤晃动-小型机械施工", value: 0, unit: "次" }
        ]
    },
    {
        name: "道路报警",
        children: [
            { name: "沉降预警", value: 8, unit: "次" },
            { name: "裂缝预警", value: 0, unit: "次" },
            { name: "地下空间", value: 0, unit: "次" }
        ]
    },
    {
        name: "桥梁报警",
        children: [
            { name: "位移预警", value: 0, unit: "次" },
            { name: "挠度预警", value: 0, unit: "次" },
            { name: "裂缝预警", value: 0, unit: "次" }
        ]
    },
    {
        name: "路灯报警",
        children: [
            { name: "故障监测", value: 0, unit: "次" },
            { name: "漏电监测", value: 0, unit: "次" }
        ]
    }
];

const runData = ref(alarmData)
const checkList = ref([
    {
        name: "数据总量",
        value: 244519,
        change: -4.50,
        changeType: "decrease",
        comparison: "较昨日"
    },
    {
        name: "报警总数",
        value: 244578,
        change: 139.47,
        changeType: "increase",
        comparison: "较昨日"
    },
    {
        name: "报警准确率",
        value: 244578,
        change: -1.53,
        changeType: "decrease",
        comparison: "较昨日"
    }
])
</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="运行监测"></FristLevelTitle>
        <SecondLevelTitle title="运行概况"></SecondLevelTitle>
        <div class="pipe-analy-content my-10 flex justify-between">
            <div v-for="item in checkList" :key="item.name"
                class="flex w-1/3 mx-4 h-36 bg-[url('assets/imgs/running/bg.png')] bg-size items-center justify-around">
                <div class=" bg-[url('assets/imgs/running/run-b-1.png')] bg-size text-center w-1/3 h-2/3">
                    <div class="text-3xl gradient-text">{{ item.value }}</div>
                    <div>{{ item.name }}</div>
                </div>
                <div>
                    <div class="text-2xl text-[#75f9c5]">{{ item.change }}%</div>
                    <div>较昨日</div>
                </div>
            </div>
        </div>
        <div>
            <SecondLevelTitle title="监测报警"></SecondLevelTitle>
            <div class="flex flex-wrap items-center">
                <div v-for="item, index in runData" :key="item.name" class="w-full 8k:w-1/2 4k:w-full">
                    <div class="flex items-center pipe-item w-1/3 bg-size h-6">
                        <div v-if="index === 0" class="w-6 h-6 bg-[url('assets/imgs/running/top-1.png')] bg-size">
                        </div>
                        <div v-else class="w-6 h-6 bg-[url('assets/imgs/running/top-2.png')] bg-size"></div>
                        <div class="name py-4 font-bold text-lg">{{ item.name }}</div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div v-for="child in item.children" :key="child.name" class="flex w-[30%] h-32 items-center">
                            <div
                                class="flex w-2/3 h-full mt-10 flex-col items-center text-center bg-[url('assets/imgs/running/run-b-2.png')] bg-size">
                                <div class="">{{ child.name }}({{ child.unit }})</div>
                                <div class="value">{{ child.value }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.pipe-item {
    background: linear-gradient(to right, #255ab0, #071b4b);
}

.gradient-text {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>