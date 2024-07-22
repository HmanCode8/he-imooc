<script setup lang="ts">
import { ref, toRef, onMounted, onUnmounted } from 'vue';

const emits = defineEmits(['onChageSizeType']);
const props = defineProps({
    sizeType: {
        type: String,
        default: 'small'
    }
});
const sizeType = toRef(props.sizeType);

const nowDate = ref(new Date().toLocaleTimeString());
const timeId = ref<any>(null);

// 计算星期
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

// 计算日期
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const weekday = week[date.getDay()];

const onChage = () => {
    emits('onChageSizeType', sizeType.value === 'small' ? 'big' : 'small');
};

// 定时刷新当前时间
onMounted(() => {
    timeId.value = setInterval(() => {
        nowDate.value = new Date().toLocaleTimeString();
    }, 1000);
});

onUnmounted(() => {
    clearInterval(timeId.value);
});
</script>

<template>
    <div
        class="bg-[url('assets/imgs/header-bg.png')] z-0 bg-custom-size relative bg-center h-12 mb-1 text-[#e4f9fe] text-center p-2 flex justify-between items-center ">
        <!-- 日期展示 ：当前时间年月日，星期 天气-->
        <div class="date flex items-center text-gradient">
            <span class="font-bold font-[Electronic] text-xl "> {{ nowDate }}</span>
            <span class="mx-3">|</span>
            <!-- 当前日期： -->
            <span class="font-bold font-[Electronic]"> {{ year }}年{{ month }}月{{ day }}日</span>
            <span class="font-bold font-[Electronic">（{{ weekday }}）</span>
            <!-- 定位城市： -->
            <span class="mx-3">|</span>
            <span class="font-bold font-[Electronic]"> 盐城市</span>
        </div>
        <h2 class="title font-serif absolute text-2xl left-1/2 translate-x-[-50%] font-bold text-gradient"
            @click="onChage">
            盐城市生命线综合监管平台
        </h2>
        <!-- 天气-->
        <div class="weather flex font-[Electronic] items-center text-gradient">
            <!-- 阴东南风:<3级 温度: 231C-29C -->
            <!-- <img src="assets/imgs/weather.png" alt="weather" class="w-8 h-8 mr-2"> -->
            <span class=""> 阴</span>
            <span class=" "> 东南风</span>
            <span class="mx-2">|</span>
            <span class="">
                < 3 级</span>
                    <span class="mx-2"> 23°C ~ 26°C</span>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>