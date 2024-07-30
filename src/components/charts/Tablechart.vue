<script setup>
import { toRef, ref, watchEffect } from 'vue'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const scrollRef = ref(null);

const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    tableData: {
        type: Array,
        default: () => []
    },
    scrollable: {
        type: Boolean,
        default: true
    },
    showIndex: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    }
});

// const columnData = toRef(props, 'columns')
// const tableDatas = toRef(props, 'tableData')

// watchEffect(() => {
//     columnData.value = props.columns
//     tableDatas.value = props.tableData
// })
</script>

<template>
    <div class="w-full">
        <div class="w-full  py-2 bg-[#0C3D73] flex">
            <div v-if="showIndex">序号</div>
            <div class="w-full flex items-center">
                <div class="flex-1 text-center" v-for="col in props.columns" :key="col.key">{{ col.title }}</div>

            </div>
        </div>
        <div class="table-container w-full h-full" ref="scrollRef">
            <vue3-seamless-scroll v-if="scrollable" class="seamless" :list="tableData" :step="0.5" :hover="true">
                <ul class="w-full ">
                    <li v-for="(row, rowIndex) in tableData" :key="rowIndex" class="liStyle w-full  flex text-center">
                        <div v-if="showIndex" :class="`px-2 ${border ? 'border-[#071b43]' : ''}`">{{ rowIndex + 1 }}
                        </div>
                        <div :class="`flex-1 py-2 flex items-center justify-center ${border ? 'border-[#071b43]' : ''}`"
                            v-for="col in props.columns" :key="col.key">
                            <span>{{ row[col.key] }}</span>
                        </div>
                    </li>
                </ul>
            </vue3-seamless-scroll>
            <div v-else class="h-full">
                <ul class="w-full h-full">
                    <li v-for="(row, rowIndex) in tableData" :key="rowIndex" class="liStyle w-full  flex text-center">
                        <div v-if="showIndex" :class="`px-2 ${border ? 'border-[#071b43]' : ''}`">{{ rowIndex + 1 }}
                        </div>
                        <div :class="`flex-1 py-2 flex items-center justify-center ${border ? 'border-[#071b43]' : ''}`"
                            v-for="col in props.columns" :key="col.key">
                            <span>{{ row[col.key] }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.table-container {
    overflow-y: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.tableBodyStyle {
    width: 100%;
}

ul li:nth-child(even) {
    background-color: #132d5c;
}

ul li:hover {
    background-color: #4276b2;
}
</style>