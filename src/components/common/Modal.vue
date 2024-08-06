<script setup>
import { ref, defineProps, toRef } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    tabs: {
        type: Array,
        default: () => [
            {
                label: '基本信息',
                name: 'tab1'
            },
            {
                label: '流程跟踪',
                name: 'tab2'
            }
        ]
    }
});

const visible = toRef(props.visible);
const tabs = toRef(props.tabs);
const currentTab = ref(props.tabs[0].name);

const arr = [
    {
        name: '预警编号',
        value: 12213331
    },
    {
        name: '预警类型',
        value: '违法行为'
    },

    {
        name: '预警级别',
        value: '高危'
    },

    {
        name: '预警时间',
        value: '2021-08-12 12:00:00'
    },

    {
        name: '预警内容',
        value: 'xxxxx'
    },

    {
        name: '预警状态',
        value: '已处理'
    },

    {
        name: '处理结果',
        value: 'xxxxx'
    },

    {
        name: '处理时间',
        value: '2021-08-12 12:00:00'
    },

    {
        name: '处理人',
        value: 'xxxxx'
    },

    {
        name: '处理部门',
        value: 'xxxxx'
    },

    {
        name: '处理方式',
        value: 'xxxxx'
    },
]

const data = ref([
    {
        name: '事件签收',
        date: '2024-05-12',
        time: '12:00:00',
        unit: '盐城市XXXX有限公司'
    },
    {
        name: '事件处置',
        date: '2024-05-12',
        time: '12:00:00',
        unit: '盐城市XXXX有限公司'
    },
    {
        name: '事件办结',
        date: '2024-05-12',
        time: '12:00:00',
        unit: '盐城市XXXX有限公司'
    },
])

const onchangeTab = (name) => {
    console.log(name);
    currentTab.value = name
}
</script>

<template>
    <div class="w-full h-full">
        <div class="bg-[url('assets/imgs/main/modal-bg.png')] w-full h-full bg-size p-2">
            <div class="flex justify-between items-center">
                <div class="pl-3 w-full bg-size">事件处理详情</div>
                <div @click="visible = false" class="close-btn"><i class="iconfont icon-close"></i></div>
            </div>
            <div :class="`w-full bg-tabs-${currentTab} bg-size mt-4 p-2 h-16 flex justify-around items-center`">
                <div @click="onchangeTab(tab.name)" v-for="tab in tabs" :key="tab.name"
                    :class="`w-1/2 flex justify-center items-center  h-full relative hover:cursor-pointer ${currentTab === tab.name ? 'font-bold text-md gradient-text' : ''}`">
                    <div> {{ tab.label }}</div>
                    <div v-show="currentTab === tab.name"
                        class="w-1/3 absolute bottom-0 h-4 bg-[url('assets/imgs/main/modal-active.png')] bg-size">
                    </div>
                </div>
            </div>
            <div class="tab-container">
                <div ref="tab1Ref" v-show="currentTab === 'tab1'" class="tab1 w-full">
                    <ul class="w-full h-full p-10">
                        <li v-for="i in arr" :key="i.value" class="w-full flex justify-between items-center p-2">
                            <div>{{ i.name }}{{ i.value }}</div>
                        </li>

                    </ul>
                </div>
                <div ref="tab2Ref" v-show="currentTab === 'tab2'" class="tab2 w-full">
                    <ul class="w-full h-full">
                        <li v-for="item in data" :key="item.name"
                            class="flex py-4 w-full justify-between items-center px-2">
                            <div class="relative  w-1/2 text-right px-10">
                                <div class="text-md w-full font-bold">{{ item.date }}</div>
                                <div class="text-[#d9a13c] font-bold">{{ item.time }}</div>
                                <div
                                    class="w-6 h-20 bg-[url('assets/imgs/main/modal-time.png')] absolute top-0 right-0 bg-size">
                                </div>
                            </div>

                            <div class="w-1/2 pl-2">
                                <div>{{ item.name }}</div>
                                <div>签收公司：{{ item.unit }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.gradient-text {
    background: linear-gradient(to bottom, #5dcbd6, #3478e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.bg-tabs-tab1 {
    background-image: url('@/assets/imgs/main/modal-tabs-l.png');
}

.bg-tabs-tab2 {
    background-image: url('@/assets/imgs/main/modal-tabs-r.png');
}
</style>