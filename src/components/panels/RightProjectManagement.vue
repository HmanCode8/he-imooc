<script setup>
import { ref,onMounted} from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import Tab from "../common/Tab.vue";
import Pipe3dChart from "../charts/Pipe3dChart.vue";
import BarRowChart from "../charts/BarRowChart.vue";
import LineAreaChart from "../charts/LineAreaChart.vue";
import { projectManageData } from "@/assets/chartData/data";
import { ElCarousel, ElCarouselItem } from "element-plus";
import ScrollBarRowChart from "../charts/ScrollBarRowChart.vue";
import PipeDestroyPie from "../charts/PipeDestroyPie.vue";

const { projectSituation, areaConstruction,pipeDestroy,inspectionData } = projectManageData;

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

const patrolData = ref(inspectionData);
const lineAreaData = ref([]);
onMounted(()=>{  
  let chartData = inspectionData[2];
  let xArray = [];
  let yArray = [];
 
  for (let i = chartData.length-1; i >=0 ; i--) {
    let element = chartData[i];
    xArray.push(getPastDate(element.flag));
    yArray.push(element.value);
    
  }
  lineAreaData.value.push(xArray);
  lineAreaData.value.push(yArray);
});

const getPastDate=daysAgo=> {
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="第三方施工项目"></FristLevelTitle>
    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="施工项目情况" />

        <div class="w-full h-full flex justify-around">
          <div
            class="w-1/4 flex flex-col justify-around h-40 bg-[url('assets/imgs/project/project-item-2.png')]"
          >
            <div
              class="flex justify-center items-center mt-4 text-2xl font-extrabold cityStyle"
            >{{projectSituation[0].value}}</div>
            <div class="flex flex-col items-center">
              <div class="text-2xl font-extrabold italic">{{projectSituation[0].name}}</div>
              <div>({{projectSituation[0].unit}})</div>
            </div>
          </div>
          <div
            class="w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-1.png')]"
            v-for="(item) in projectSituation[0].children"
            :key="item.name"
          >
            <div class="text-center mt-4 text-2xl font-extrabold countryStyle">{{item.value}}</div>
            <div class="flex flex-col items-center">
              <div class="text-2xl font-extrabold italic">{{item.name}}</div>
              <div>({{item.unit}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="区域在建" />

        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <!-- <BarRowChart /> -->
            <ScrollBarRowChart :areaData="areaConstruction" />
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
          <div class="px-2">{{ patrolData[0].name}}:{{ patrolData[0].value}}</div>
          <div class="px-2 flex items-center">
            {{ patrolData[1].name}}:
            <span>{{ patrolData[1].value}}</span>
            <i class="w-2 h-4 ml-2 bg-[url('assets/imgs/project/down.png')] bg-size"></i>
          </div>
        </div>
        <LineAreaChart :lineAreaChartData ="lineAreaData"/>
      </div>
    </div>

    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="管线破坏事件" />
        <div class="chart-container w-full h-60">
          <!-- <Pipe3dChart :pieChartData="pieChartData" /> -->
          <PipeDestroyPie class="w-full h-full flex" :pieChartData="pipeDestroy[0].statisticDestroy" />
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <!-- <BarRowChart /> -->
            <ScrollTablechart
              class="w-full ml-2"
              :tableTitles="pipeDestroy[1].title"
              :tableData="pipeDestroy[1].tableData"
            />
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

.cityStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #42bbd9, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.countryStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #00a2ff, #e4feff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>