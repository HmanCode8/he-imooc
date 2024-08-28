<script setup>
import { provide } from 'vue'
import container from './views/container.vue'
import gsap from 'gsap';
provide('gsap', gsap); // 提供gsap实例给子组件


</script>

<template>
	<container></container>
</template>

<style scoped lang="scss"></style>