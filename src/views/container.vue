<template>
    <div class="w-full h-full bg-[#051439] ">
        <!-- 头部组件 -->
        <Header @onChageSizeType="(k) => sizeType = k" />
        <!-- 主体组件 -->
        <div class="main-panel relative">
            <!-- bg-[url('assets/imgs/right-panel.png')] bg-size -->
            <div class=" bg-center h-app-height text-white flex overflow-hidden">
                <div ref="leftPanelRef"
                    :class="`bg-[url('assets/imgs/main/panel-left.png')] bg-size hover:backdrop-blur-md 8k:pr-10 4k:pr-6 overflow-auto  absolute  w-[28.57%] z-10 top-0 left-0 h-full flex-1 bg-opacity-90 p-1 flex flex-col`">
                    <!-- 条件渲染的动态组件 -->
                    <component :is="currentComponentMap[currentComponent][0]" class="w-full h-full box-border pb-4" />

                </div>
                <div class="w-full h-full flex flex-col">
                    <!-- 数据展示图 -->
                    <MapChart class="bg-opacity-50  flex-1" />
                </div>
                <!-- bg-[url('assets/imgs/left-panel.png')] bg-size -->
                <div ref="rightPanelRef"
                    class="bg-[url('assets/imgs/main/panel-right.png')] bg-size hover:backdrop-blur-md1 8k:pl-10 overflow-auto  absolute w-[28.57%] z-10 top-0 right-0 h-full flex-1 bg-opacity-90  p-1 flex flex-col">
                    <!-- 条件渲染的动态组件 -->
                    <!-- <div class="inner-bg absolute left-0 top-0 w-full h-full "></div> -->
                    <component :is="currentComponentMap[currentComponent][1]" class="w-full h-full box-border pb-4" />

                </div>
                <!-- <div v-if="store.componentId === 'warning-disposal'"
                    class="absolute 4k:w-[18%] 8k:w-[12%] h-[70%] right-[30%] bottom-[10%]">
                    <imageView />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
// 头部组件
import Header from '@/components/Header.vue'
// 地图组件
import MapChart from '@/components/MapChart.vue'

// common组件
import imageView from '@/components/common/imageView.vue'
// 左侧栏组件
import LeftPipeAnaly from '@/components/panels/LeftPipeAnaly.vue'
import LeftOverview from '@/components/panels/LeftOverview.vue'
import LeftProjectManagement from '@/components/panels/LeftProjectManagement.vue'
import LeftOperationMaintenance from '@/components/panels/LeftOperationMaintenance.vue'
import LeftRunningMonitoring from '@/components/panels/LeftRunningMonitoring.vue'
import LeftWarningDisposal from '@/components/panels/LeftWarningDisposal.vue'

// 右侧栏组件
import RightPipeAnaly from '@/components/panels/RightPipeAnaly.vue'
import RightOverview from '@/components/panels/RightOverview.vue'
import RightProjectManagement from '@/components/panels/RightProjectManagement.vue'
import RightOperationMaintenance from '@/components/panels/RightOperationMaintenance.vue'
import RightRunningMonitoring from '@/components/panels/RightRunningMonitoring.vue'
import RightWarningDisposal from '@/components/panels/RightWarningDisposal.vue'

import { useGlobalStore } from '@/store'  // 引入全局状态管理

const gsap = inject('gsap')

const store = useGlobalStore()

const mapType = ref('')

const sizeType = ref('small')

const currentComponent = ref('')

const leftPanelRef = ref(null)
const rightPanelRef = ref(null)

// 组件映射对象
const currentComponentMap = {
    'infrastructure': [LeftPipeAnaly, RightPipeAnaly], // 基础设施
    'overview': [LeftOverview, RightOverview], // 总览
    'project-management': [LeftProjectManagement, RightProjectManagement], // 项目管理
    'operation-maintenance': [LeftOperationMaintenance, RightOperationMaintenance], // 运维管理
    'running-monitoring': [LeftRunningMonitoring, RightRunningMonitoring],  // 运行监控
    'warning-disposal': [LeftWarningDisposal, RightWarningDisposal] // 报警处置
};

// const tl = gsap.timeline();
watch(() => store.componentId, (value) => {
    currentComponent.value = value
    gsap.fromTo(leftPanelRef.value, { opacity: 1, x: -200, transform: 'translate3d(-100px, 0, 0)' }, { opacity: 1, x: 0, transform: 'translate3d(0, 0, 0)', duration: 0.5, ease: 'linear' })
    gsap.fromTo(rightPanelRef.value, { opacity: 0, x: 200, transform: 'translate3d(100px, 0, 0)' }, { opacity: 1, x: 0, transform: 'translate3d(0, 0, 0)', duration: 0.5, ease: 'linear' })

    // tl.fromTo(leftPanelRef.value, { opacity: 1, x: -100 }, { opacity: 1, x: 0, duration: 0.5, ease: 'linear' })
    //     .fromTo(rightPanelRef.value, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5, ease: 'linear' }, '-=0.25');
}, {
    immediate: true
})
</script>

<style scoped lang="scss"></style>
