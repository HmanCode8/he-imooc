<script setup lang="ts">
import { ref, defineProps } from 'vue';
import FristLevelTitle from '../common/FirstLevelTitle.vue'
import SecondLevelTitle from '../common/SecondLevelTitle.vue'
// import ThirdLevelTitle from '../common/ThirdLevelTitle.vue'


const pipes = ref([
    {
        name: '燃气管线',
    },

])

</script>

<template>
    <div class="pipe-analy">
        <FristLevelTitle title="官网分析"></FristLevelTitle>
        <SecondLevelTitle title="基础概况"></SecondLevelTitle>
        <div>
            <div class="pipe-list">
                <div class="pipe-item" v-for="(item, index) in pipes" :key="index">
                    <div class="icon w-4 h-4 bg-slate-500"></div>
                    <div>
                        <div class="name">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>