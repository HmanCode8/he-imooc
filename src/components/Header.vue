<script setup>
import { ref, toRef, onMounted, onUnmounted } from 'vue';

const weatherUrl = 'https://api.vvhan.com/api/weather?city=盐城'
const emits = defineEmits(['onChageSizeType']);
const props = defineProps({
    sizeType: {
        type: String,
        default: 'small'
    }
});
const sizeType = toRef(props.sizeType);

const nowDate = ref(new Date().toLocaleTimeString());
const timeId = ref(null);
const weatherInfo = ref({
    type: '阴',
    fengxiang: '东南风',
    fengli: '<3级',
    low: '23℃',
    high: '31℃'
});

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

const getWeather = async () => {
    try {
        const res = await fetch(weatherUrl);
        const { data } = await res.json();
        weatherInfo.value = data;
    } catch (error) {
        console.log(error);
    }
}
getWeather()

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
        class="bg-[url('assets/imgs/main/header-bg.webp')] bg-custom-size relative bg-center 8k:h-20 4k:h-14 mb-1 text-[#e4f9fe] text-center p-2 flex justify-between items-center ">
        <!-- 日期展示 ：当前时间年月日，星期 天气-->
        <div class="date flex items-center 8k:text-xl text-gradient mt-[-10px]">
            <span class="font-bold font-[Electronic] "> {{ nowDate }}</span>
            <span class="mx-3">|</span>
            <!-- 当前日期： -->
            <span class="font-bold font-[Electronic]"> {{ year }}年{{ month }}月{{ day }}日</span>
            <span class="font-bold font-[Electronic">（{{ weekday }}）</span>
            <!-- 定位城市： -->
            <span class="mx-3">|</span>
            <span class="font-bold font-[Electronic]"> 盐城市</span>
        </div>
        <h2 class="tracking-widest absolute 8k:text-4xl 4k:text-2xl left-1/2 translate-x-[-50%] font-[pengmenzhengdao] text-gradient"
            @click="onChage">
            盐城市生命线综合监管平台
        </h2>
        <!-- 天气-->
        <div class="weather flex font-[Electronic] 8k:text-xl items-center text-gradient mt-[-10px]">
            <!-- 阴东南风:<3级 温度: 231C-29C -->
            <!-- <img src="assets/imgs/weather.png" alt="weather" class="w-8 h-8 mr-2"> -->
            <span class=""> {{ weatherInfo.type }}</span>
            <span class="mx-2">|</span>

            <span class="mx-">{{ weatherInfo.fengxiang }}</span>
            <!-- <span class="mx-2">|</span> -->
            <span class="mx-2">{{ weatherInfo.fengli }}</span>
            <span class="mx-2"> {{ weatherInfo.low }} ~ {{ weatherInfo.high }}</span>
        </div>

    </div>
</template>

<style scoped lang="scss"></style>