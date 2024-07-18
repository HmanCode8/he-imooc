<template>
    <div class="w-fullh-full bg-[#051439]">
        <div class="w-full h-full 8k:w-3/3 4k:h-1/2 8k:m-auto flex flex-col 4k:text-sm 8k:text-lg">
            <!-- 头部组件 -->
            <Header />
            <!-- 主体组件 -->
            <div class="main-panel relative">
                <div
                    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white  flex overflow-hidden">
                    <div
                        class="left-panel overflow-auto absolute w-1/4 z-10 top-0 left-0 h-full flex-1 bg-opacity-50 bg-slate-800 p-1 flex flex-col">
                        <!-- <div class="shaw-inner absolute w-full h-full rounded-full"></div> -->
                        <!-- 条件渲染的动态组件 -->
                        <LeftPipeAnaly class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'infrastructure'" />
                        <LeftOverview class=" w-full h-full box-border pb-4" v-if="currentComponent === 'overview'" />
                        <LeftProjectManagement class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'project-management'" />
                        <LeftOperationMaintenance class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'operation-maintenance'" />
                        <LeftRunningMonitoring class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'running-monitoring'" />
                        <LeftWarningDisposal class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'warning-disposal'" />
                    </div>
                    <div class="w-full flex flex-col">
                        <!-- 数据展示图 -->
                        <MapChart @changeComponent="changeComponent" class="bg-opacity-50  flex-1" />
                    </div>
                    <div
                        class="right-panel overflow-auto absolute w-1/4 z-10 top-0 right-0 h-full flex-1 bg-opacity-50 bg-slate-800 p-1 flex flex-col">
                        <!-- 条件渲染的动态组件 -->
                        <RightPipeAnaly class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'infrastructure'" />
                        <RightOverview class=" w-full h-full box-border pb-4" v-if="currentComponent === 'overview'" />
                        <RightProjectManagement class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'project-management'" />
                        <RightOperationMaintenance class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'operation-maintenance'" />
                        <RightRunningMonitoring class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'running-monitoring'" />
                        <RightWarningDisposal class=" w-full h-full box-border pb-4"
                            v-if="currentComponent === 'warning-disposal'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// 头部组件
import Header from '@/components/Header.vue'
// 地图组件
import MapChart from '@/components/MapChart.vue'

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

// 地图工具函数
import { createPopupLayer } from '@/utils/map/popupLayer'

import { ref, watch } from 'vue'
import { getVisualization } from '@/api/visualization.js'
import { useGlobalStore } from '@/store'  // 引入全局状态管理

const store = useGlobalStore()

const data = ref(null)

const currentComponent = ref('overview')


const changeComponent = (value) => {
    console.log(value)
    currentComponent.value = value
}

watch(() => store.componentId, (value) => {
    console.log('value', value)
})

// 加载数据函数
const loadData = async () => {
    data.value = await getVisualization()
}

// 初始加载数据
loadData()

// 设置定时器每3秒刷新数据
// setInterval(() => {
//     loadData()
// }, 3000)


</script>

<style scoped lang="scss">
.main-panel {
    .left-panel {
        // 背景渐变
        // background: linear-gradient(to right, #000 80%, #272626 50%, #343131 6%);
        // opacity: 0.8;

        .shaw-inner {
            z-index: 11;
            // background: #000;
            left: 100%;
        }
    }
}
</style>
