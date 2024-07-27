<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import Tab from "../common/Tab.vue";
import Pipe3dChart from "../charts/Pipe3dChart.vue";
import BarRowChart from "../charts/BarRowChart.vue";
import LineAreaChart from "../charts/LineAreaChart.vue";
import { projectManageData } from "@/assets/chartData/data";
import { ElCarousel, ElCarouselItem } from "element-plus";
import ScrollBarRowChart from "../charts/ScrollBarRowChart.vue";


const { projectSituation,areaConstruction} = projectManageData;

const pieChartData = ref([
  { name: "待处理", value: 60, color: "#FF6384" },
  { name: "处置中", value: 23, color: "#FFCE56" },
  { name: "已完成", value: 99, color: "#FFA07A" }
]);

const timeTabs = ref([
  {
    name: "近一周",
    value: "week"
  },
  {
    name: "近一月",
    value: "month"
  }
]);

const onTabChange = k => {
  console.log(k);
};
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="第三方施工项目"></FristLevelTitle>
    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="施工类型" />

        <div class="w-full h-full flex justify-around">

          <div
            class="w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-2.png')]"
          >
            <div>{{projectSituation[0].value}}</div>
            <div class="flex flex-col justify-around items-center">
              <div>{{projectSituation[0].name}}</div>
              <div>({{projectSituation[0].unit}})</div>
            </div>
          </div>
          <div
            class="bg-[url('assets/imgs/project/project-center.png')] bg-size w-10 h-2/3 flex items-center justify-center"
          ></div>

          <div class="w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-1.png')]">
            <div>{{projectSituation[1].value}}</div>
            <div class="flex flex-col justify-around items-center">
              <div>{{projectSituation[1].name}}</div>
              <div>({{projectSituation[1].unit}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="区域在建" />

        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <!-- <BarRowChart /> -->
            <ScrollBarRowChart :areaData="areaConstruction"/>
          </div>
        </div>
      </div>
    </div>

    <div>
      <SecondLevelTitle class="w-full" title="巡检巡查">
        <template v-slot:title-slot>
          <Tab :data="timeTabs" @onTabOnchage="onTabChange" />
        </template>
      </SecondLevelTitle>

      <div class="chart-container w-full h-80">
        <div class="flex justify-center items-center">
          <div class="px-2">异常问题数量：1212</div>
          <div class="px-2 flex items-center">
            同比
            <span>+10%</span>
            <i class="w-4 h-4 ml-2 bg-[url('assets/imgs/project/up-to.png')] bg-size"></i>
          </div>
        </div>
        <LineAreaChart />
      </div>
    </div>

    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="施工类型" />

        <div class="chart-container w-full h-60">
          <Pipe3dChart :pieChartData="pieChartData" />
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="施工类型" />

        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <BarRowChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>