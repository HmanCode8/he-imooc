<template>
    <div class="w-full h-full bg-[#051439] ">
        <!-- 头部组件 -->
        <Header @onChageSizeType="(k) => sizeType = k" />
        <!-- 主体组件 -->
        <div class="main-panel relative">
            <!-- bg-[url('assets/imgs/right-panel.png')] bg-cover -->
            <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white flex overflow-hidden">
                <div
                    :class="`left-panel 8k:pr-10 4k:pr-6 overflow-auto  absolute w-[28.57%] z-10 top-0 left-0 h-full flex-1 bg-opacity-90 p-1 flex flex-col`">
                    <!-- 条件渲染的动态组件 -->
                    <component :is="currentComponentMap[currentComponent][0]" class="w-full h-full box-border pb-4" />

                </div>
                <div class="w-full h-full flex flex-col">
                    <!-- 数据展示图 -->
                    <MapChart class="bg-opacity-50  flex-1" />
                </div>
                <!-- bg-[url('assets/imgs/left-panel.png')] bg-cover -->
                <div
                    class="right-panel 8k:pl-10 overflow-auto  absolute w-[28.57%] z-10 top-0 right-0 h-full flex-1 bg-opacity-90  p-1 flex flex-col">
                    <!-- 条件渲染的动态组件 -->
                    <!-- <div class="inner-bg absolute left-0 top-0 w-full h-full "></div> -->
                    <component :is="currentComponentMap[currentComponent][1]" class="w-full h-full box-border pb-4" />

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

const sizeType = ref('small')

const currentComponent = ref('')

// 组件映射对象
const currentComponentMap = {
    'infrastructure': [LeftPipeAnaly, RightPipeAnaly], // 基础设施
    'overview': [LeftOverview, RightOverview], // 总览
    'project-management': [LeftProjectManagement, RightProjectManagement], // 项目管理
    'operation-maintenance': [LeftOperationMaintenance, RightOperationMaintenance], // 运维管理
    'running-monitoring': [LeftRunningMonitoring, RightRunningMonitoring],  // 运行监控
    'warning-disposal': [LeftWarningDisposal, RightWarningDisposal] // 报警处置
};


watch(() => store.componentId, (value) => {
    currentComponent.value = value
}, {
    immediate: true
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
        background-image: url('@/assets/imgs/main/panel-left.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

    .right-panel {
        background-image: url('@/assets/imgs/main/panel-right.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

}
</style>
