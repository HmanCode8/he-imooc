<template>
    <div class="w-fullh-full bg-[#051439] ">
        <div class="w-full h-full 8k:w-full 4k:h-1/2 8k:m-auto flex flex-col 4k:text-sm 8k:text-lg">
            <!-- 头部组件 -->
            <Header @onChageSizeType="(k) => sizeType = k" />
            <!-- 主体组件 -->
            <div class="main-panel text-[12px] relative">
                <!-- bg-[url('assets/imgs/right-panel.png')] bg-cover -->
                <div class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white flex overflow-hidden">
                    <div
                        :class="`left-panel  overflow-auto bg-[#102242]  absolute w-[28.57%] z-10 top-0 left-0 h-full flex-1 bg-opacity-90 p-1 flex flex-col`">
                        <!-- 条件渲染的动态组件 -->
                        <component :is="currentComponentMap[currentComponent][0]"
                            class="w-full h-full box-border pb-4" />

                    </div>


                    <div class="w-full h-full flex flex-col">
                        <!-- 数据展示图 -->
                        <MapChart @changeComponent="changeComponent" class="bg-opacity-50  flex-1" />
                    </div>



                    <!-- bg-[url('assets/imgs/left-panel.png')] bg-cover -->
                    <div
                        class="right-panel overflow-auto bg-[#102242]  absolute w-[28.57%] z-10 top-0 right-0 h-full flex-1 bg-opacity-90  p-1 flex flex-col">
                        <!-- 条件渲染的动态组件 -->
                        <!-- <div class="inner-bg absolute left-0 top-0 w-full h-full "></div> -->
                        <component :is="currentComponentMap[currentComponent][1]"
                            class="w-full h-full box-border pb-4" />

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

const sizeType = ref('small')

const currentComponent = ref('infrastructure')

// 组件映射对象
const currentComponentMap = {
    'infrastructure': [LeftPipeAnaly, RightPipeAnaly], // 基础设施
    'overview': [LeftOverview, RightOverview], // 总览
    'project-management': [LeftProjectManagement, RightProjectManagement], // 项目管理
    'operation-maintenance': [LeftOperationMaintenance, RightOperationMaintenance], // 运维管理
    'running-monitoring': [LeftRunningMonitoring, RightRunningMonitoring],  // 运行监控
    'warning-disposal': [LeftWarningDisposal, RightWarningDisposal] // 报警处置
};


const changeComponent = (value) => {
    console.log('value', value)
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
        // background-image: url('@/assets/imgs/panel.svg');
        // background-size: cover;
        // /*或者使用 contain*/
        // background-position: center;
    }

    .right-panel {
        .inner-bg {
            // background-image: url('@/assets/imgs/panel.svg');
            // background-size: cover;
            // //只要背景图旋转就可以了
            // transform: rotate(180deg);
            // /*或者使用 contain*/
            // background-position: center;
        }
    }
}
</style>
