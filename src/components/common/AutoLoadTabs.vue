<script setup lang="ts">
import { ref, reactive, defineProps, computed, nextTick } from 'vue';

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
    },
});

const state = reactive({
    visibleCount: 5,
    selectedIndex: null,
});

const tabRefs = ref([]); // 存储tab的引用

const visibleTabs = computed(() => props.tabs.slice(0, state.visibleCount));

const selectTab = async (index) => {
    state.selectedIndex = index;
    if (index >= state.visibleCount - 2 && state.visibleCount < props.tabs.length) {
        state.visibleCount = Math.min(state.visibleCount + 2, props.tabs.length);
        await nextTick(); // 确保DOM更新完成
        if (tabRefs.value[index]) {
            tabRefs.value[index].scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }
};
</script>

<template>
    <div class="tabs-container">
        <div v-for="(tab, index) in visibleTabs" :key="tab.id" ref="el => tabRefs.value[index] = el" class="tab"
            @click="selectTab(index)">
            {{ tab.name }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.tabs-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 200px;
    overflow-y: auto;
}

.tab {
    padding: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
}

.tab:hover {
    background-color: #e0e0e0;
}
</style>