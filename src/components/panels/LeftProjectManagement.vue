<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import PipeIconChart from "../charts/PipeIconChart.vue";
import ScrollTablechart from "../charts/ScrollTablechart.vue";

import { projectManageData } from "@/assets/chartData/data";

const {
  overviewData,
  strategicIndustry,
  projectDistribution,
  projectSize
} = projectManageData;

const currentComp = ref('项目规模');

</script>

<template>
  <div class="pipe-analy">
    <div class="8k:h-1/3">
      <FristLevelTitle title="2024年全市城乡建设重点项目"></FristLevelTitle>
      <SecondLevelTitle title="项目概览"></SecondLevelTitle>

      <!-- 第一部分 -->
      <div class="w-full flex justify-between flex-wrap">
        <div class="w-full flex flex-wrap justify-between items-center mb-4">
          <div class="bg-[url(assets/imgs/project/tray-item-l.png)] bg-size flex 8k:w-1/2 4k:w-full h-40 items-center">
            <div class="w-1/3 text-center">
              <div>{{ overviewData[0].children[0].name }}</div>
              <div>
                <span class="itemStyle text-2xl font-extrabold">{{ overviewData[0].children[0].value }}</span>
                {{ overviewData[0].children[0].unit }}
              </div>
              <div class="flex justify-center items-center">
                <div>
                  {{ overviewData[0].children[1].name }}:&nbsp;{{ overviewData[0].children[1].value }}{{
                    overviewData[0].children[1].unit }}
                </div>
                <div class="bg-[url(assets/imgs/project/up-to.png)] bg-size bg-center w-2 h-4 ml-1"></div>
              </div>
            </div>
            <div class="w-1/3 text-center">
              <div>
                <span class="totalStyle text-3xl font-extrabold">{{ overviewData[0].projectNum.value }}</span>
              </div>
              <div class="text-2xl font-bold">{{ overviewData[0].projectNum.name }}</div>
              <div>(个)</div>
            </div>
            <div class="w-1/3 text-center">
              <div>{{ overviewData[0].children[2].name }}</div>
              <div>
                <span class="text-2xl font-bold">&nbsp;</span>&nbsp;--&nbsp;个
              </div>
              <div>
                {{ overviewData[0].children[3].name }}:
                <span>&nbsp;&nbsp;--</span>&nbsp;
              </div>
            </div>
          </div>

          <div class="bg-[url(assets/imgs/project/tray-item-r.png)] bg-size flex 8k:w-1/2 4k:w-full h-40 items-center">
            <div class="w-1/3 text-center">
              <div>{{ overviewData[1].children[0].name }}</div>
              <div>
                <span class="itemStyle text-2xl font-extrabold">{{ overviewData[1].children[0].value }}</span>
                {{ overviewData[1].children[0].unit }}
              </div>
              <div class="flex justify-center items-center">
                <div>
                  {{ overviewData[1].children[1].name }}:&nbsp;{{ overviewData[1].children[1].value }}{{
                    overviewData[1].children[1].unit }}
                </div>
                <div class="bg-[url(assets/imgs/project/up-to.png)] bg-size bg-center w-2 h-4 ml-1"></div>
              </div>
            </div>
            <div class="w-1/3 text-center">
              <div>
                <span class="totalStyle text-3xl font-extrabold">{{ overviewData[1].projectNum.value }}</span>
              </div>
              <div class="text-2xl font-bold">{{ overviewData[1].projectNum.name }}</div>
              <div>{{ overviewData[1].projectNum.unit }}</div>
            </div>
            <div class="w-1/3 text-center">
              <div>{{ overviewData[1].children[2].name }}</div>
              <div>
                <span class="itemStyle text-2xl font-extrabold">{{ overviewData[1].children[2].value }}</span>
                {{ overviewData[1].children[2].unit }}
              </div>
              <div>
                {{ overviewData[1].children[3].name }}:&nbsp;{{ overviewData[1].children[3].value }}{{
                  overviewData[1].children[3].unit }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <SecondLevelTitle title="战略性新兴产业"></SecondLevelTitle>

    <div class="w-full 8k:h-1/3 flex justify-between items-center flex-wrap">
      <div v-for="(item, index) in strategicIndustry" :key="index"
        class="8k:w-1/5 4k:w-1/3 flex flex-col items-center mb-4">
        <div class="bg-[url('assets/imgs/project/zlcy1.png')] bg-size w-40 h-6 flex items-center justify-center">{{
          item.name }}</div>
        <div class="bg-[url('assets/imgs/project/zlcy2.png')] bg-size bg-center w-40 h-40 flex flex-col items-center">
          <div class="text-xl mt-6">
            {{ item.children[0].name }}:&nbsp;&nbsp;
            <span class="itemStyle font-bold">{{ item.children[0].value }}</span>
            {{ item.children[0].unit }}
          </div>
          <div class="text-xl">
            {{ item.children[1].name }}:&nbsp;&nbsp;
            <span class="totalStyle font-bold">{{ item.children[1].value }}</span>
            {{ item.children[1].unit }}
          </div>
        </div>
      </div>
    </div>

    <!-- 第三部分 -->
    <div class="w-full 8k:h-1/3 flex justify-between flex-wrap">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="项目规模"></SecondLevelTitle>
        <PipeIconChart :data="projectSize" :comname="currentComp" class="w-full h-60" />
      </div>
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="项目分布"></SecondLevelTitle>
        <!-- <Tablechart class="w-full h-60" /> -->
        <ScrollTablechart class="w-full" :tableTitles="projectDistribution.titles"
          :tableData="projectDistribution.tableData" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.totalStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #ffbd00, #fff5a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.itemStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #42bbd9, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>