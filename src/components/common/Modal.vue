<script setup>
import { ref, toRef } from 'vue';
import img1 from '@/assets/imgs/dataimgs/img1.png';
import img2 from '@/assets/imgs/dataimgs/img2.png';
import img3 from '@/assets/imgs/dataimgs/img3.png';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    },
    tabs: {
        type: Array,
        default: () => [
            {
                label: '详情',
                name: 'tab1'
            }/*,
            {
                label: '处置',
                name: 'tab2'
            }*/
        ]
    }
});
const emit = defineEmits(["update:closePop"]);

const visible = toRef(props.visible);
const tabs = toRef(props.tabs);
const currentTab = ref(props.tabs[0].name);

const dict = {
    success: '已办结',
    pedding: '已处置',
    sign: '已签收'
}

const arr = [
    {
        name: '预警类型',
        value: '供水破裂'
    },
    {
        name: '预警等级',
        value: '一级'
    },

    {
        name: '处置阶段',
        value: '待处置'
    },

    {
        name: '预警地址',
        value: '戴庄路'
    },

    {
        name: '行政区划',
        value: '亭湖区'
    },

    {
        name: '预警说明',
        value: '施工破坏导致供水管网破坏'
    },

    {
        name: '预警时间',
        value: '2024-8-21 15:03:00'
    },

    {
        name: '预警编号',
        value: 'yjbh2024821001'
    },
]

const data = ref([
    {
        desc: '张花花：确认排水管道已修复',
        status: 'success',
        date: '2024-07-11',
        time: '18:00:55',
        unit: '盐城供排水管理处',
        src: img1,
    },
    {
        desc: '吴起：应急抢修队已至现场排查并组织维修破裂排水管道',
        status: 'pedding',
        date: '2024-07-11',
        time: '15:12:54',
        unit: '盐城供自来水有限公司',
        src: img2,
    },
    {
        desc: '张鑫：签收【污水输送管遭受破坏造成排水不畅】问题',
        status: 'sign',
        date: '2024-07-10',
        time: '17:14:55',
        unit: '盐城供自来水有限公司',
        src: img3,
    },
])

const onchangeTab = (name) => {
    console.log(name);
    currentTab.value = name
}
const closePop = () => {
    emit('update:closePop');
}
const goToThirdPartySys = () => {
  window.open(thirdPartySys, "_blank");
}
</script>

<template>
    <div class="w-full h-full">
        <div class="bg-[#011235] w-full h-full bg-size p-2">
            <div class="flex justify-between items-center text-lg">
                <div class=" w-full px-5 flex items-center h-12 bg-size bg-[url('assets/imgs/main/modal-tabs-l.png')]">
                    事件处理详情</div>
                <div class="mr-3 text-white cursor-pointer" @click="closePop">✖</div>
            </div>
            <div :class="`w-full flex  py-2 px-5`">
                <div @click="onchangeTab(tab.name)" v-for="tab in tabs" :key="tab.name"
                    :class="`flex justify-center items-center px-2 h-full relative hover:cursor-pointer ${currentTab === tab.name ? 'font-bold text-md gradient-text border-b border-[#46b4ee]' : ''}`">
                    <div> {{ tab.label }}</div>
                    <!-- <div v-show="currentTab === tab.name"
                        class="w-1/3 absolute bottom-0 h-4 bg-[url('assets/imgs/main/modal-active.png')] bg-size">
                    </div> -->
                </div>
            </div>
            <div class="tab-container max-h-2160p overflow-y-auto">
                <div ref="tab1Ref" v-show="currentTab === 'tab1'" class="tab1 w-full">
                    <ul class="w-full h-full max-h-56 overflow-y-auto  mt-5 px-5">
                        <li v-for="i in arr" :key="i.value" class="w-full flex  items-center py-2">
                            <div>{{ i.name }}</div>
                            <div class="px-5 text-right">{{ i.value }}</div>
                        </li>
                    </ul>
                  <div class="flex flex-row justify-end mt-1 mr-2 text-2xl text-left font-[YouSheBiaoTiHei] ">
                    <button type="button" @click="goToThirdPartySys"
                            class="bg-[#03d5ff] px-3 py-1 rounded-lg">去处置</button>
                  </div>
                </div>
                <div ref="tab2Ref" v-show="currentTab === 'tab2'" class="tab2 w-full">
                    <ul class="w-full h-full max-h-72 overflow-y-auto px-2">
                        <li class="bg-[#1a2949] my-2 px-2 flex flex-col" v-for="item in data" :key="item.name">
                            <div class="flex items-center py-2 text-[#3ba8f4]">
                                <div>{{ item.date }}</div>
                                <div class="px-4">{{ item.unit }}</div>
                            </div>
                            <div class="flex items-center py-2">
                                <div>{{ item.time }}</div>
                                <div class="px-4 w-3/4">{{ item.desc }}</div>
                            </div>
                            <div class="flex py-3  justify-between ">
                                <div class="w-16 h-16 ml-20">
                                    <el-image :teleported="true" :src="item.src" :zoom-rate="1.2" :max-scale="7"
                                        :min-scale="0.2" :preview-src-list="data.map((item) => item.src)"
                                        :initial-index="4" fit="cover" teleport="body" />

                                    <!-- <img class="w-full h-full bg-size" :src="item.src" alt=""
                                        srcset=""> -->
                                </div>
                                <div class="flex flex-col justify-end ">
                                    <div :class="`border px-2 rounded-sm text-${item.status}`">
                                        {{ dict[item.status]
                                        }}
                                    </div>
                                </div>
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

.text-success {
    color: #4b791f;
    border-color: #4b791f;
}

.text-pedding {
    color: #df8e25;
    border-color: #df8e25;
}

.text-sign {
    color: #0b7584;
    border-color: #0b7584;
}
</style>