<script setup>
import { onMounted, ref, computed } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import PipeIconChart from "../charts/PipeIconChart.vue";
import Tablechart from "../charts/Tablechart.vue";
import ScrollTablechart from "../charts/ScrollTablechart.vue";

import { projectManageData } from "@/assets/chartData/data";

const {
  overviewData,
  strategicIndustry,
  projectDistribution,
  projectSize
} = projectManageData;

const tableTitles = ref([]);

const currentComp = ref('项目规模');

onMounted(() => {});

const tabs1 = ref([
  { id: 1, name: "Tab 1" },
  { id: 2, name: "Tab 2" },
  { id: 3, name: "Tab 3" },
  { id: 4, name: "Tab 4" },
  { id: 5, name: "Tab 5" },
  { id: 6, name: "Tab 6" },
  { id: 7, name: "Tab 7" },
  { id: 8, name: "Tab 8" },
  { id: 9, name: "Tab 9" },
  { id: 10, name: "Tab 10" }
]);
const list = ref([
  { category: "综合交通", count: 100 },
  { category: "公共配套", count: 100 },
  { category: "市政公用", count: 100 },
  { category: "城市管理", count: 100 },
  { category: "城市路桥", count: 100 },
  { category: "村镇建设", count: 100 },
  { category: "园林绿化", count: 100 },
  { category: "水利设施", count: 100 },
  { category: "住房建设", count: 100 },
  { category: "信息化", count: 100 }
]);
</script>

<template>
  <div class="pipe-analy">
    <div class="8k:h-1/3">
      <FristLevelTitle title="2024年全市城乡建设重点项目"></FristLevelTitle>
      <SecondLevelTitle title="项目概览"></SecondLevelTitle>

      <!-- 第一部分 -->
      <div class="w-full flex justify-between flex-wrap">
        <div class="w-full flex flex-wrap justify-between items-center mb-4">
          <div
            class="bg-[url(assets/imgs/project/tray-item-l.png)] bg-size flex 8k:w-1/2 4k:w-full h-40 items-center"
          >
            <div class="w-1/3 text-center">
              <div>{{overviewData[0].children[0].name}}</div>
              <div>
                <span
                  class="itemStyle text-2xl font-extrabold"
                >{{overviewData[0].children[0].value}}</span>
                {{overviewData[0].children[0].unit}}
              </div>
              <div class="flex justify-center items-center">
                <div>{{overviewData[0].children[1].name}}:&nbsp;{{overviewData[0].children[1].value}}{{overviewData[0].children[1].unit}}</div>
                <div
                  class="bg-[url(assets/imgs/project/up-to.png)] bg-cover bg-center w-2 h-4 ml-1"
                ></div>
              </div>
            </div>
            <div class="w-1/3 text-center">
              <div>
                <span
                  class="totalStyle text-3xl font-extrabold"
                >{{overviewData[0].projectNum.value}}</span>
              </div>
              <div class="text-2xl font-bold">{{overviewData[0].projectNum.name}}</div>
              <div>(个)</div>
            </div>
            <div class="w-1/3 text-center">
              <div>{{overviewData[0].children[2].name}}</div>
              <div>
                <span class="text-2xl font-bold">&nbsp;</span>&nbsp;--&nbsp;个
              </div>
              <div>
                {{overviewData[0].children[3].name}}:
                <span>&nbsp;&nbsp;--</span>&nbsp;
              </div>
            </div>
          </div>

          <div
            class="bg-[url(assets/imgs/project/tray-item-r.png)] bg-size flex 8k:w-1/2 4k:w-full h-40 items-center"
          >
            <div class="w-1/3 text-center">
              <div>{{overviewData[1].children[0].name}}</div>
              <div>
                <span
                  class="itemStyle text-2xl font-extrabold"
                >{{overviewData[1].children[0].value}}</span>
                {{overviewData[1].children[0].unit}}
              </div>
              <div class="flex justify-center items-center">
                <div>{{overviewData[1].children[1].name}}:&nbsp;{{overviewData[1].children[1].value}}{{overviewData[1].children[1].unit}}</div>
                <div
                  class="bg-[url(assets/imgs/project/up-to.png)] bg-cover bg-center w-2 h-4 ml-1"
                ></div>
              </div>
            </div>
            <div class="w-1/3 text-center">
              <div>
                <span
                  class="totalStyle text-3xl font-extrabold"
                >{{overviewData[1].projectNum.value}}</span>
              </div>
              <div class="text-2xl font-bold">{{overviewData[1].projectNum.name}}</div>
              <div>{{overviewData[1].projectNum.unit}}</div>
            </div>
            <div class="w-1/3 text-center">
              <div>{{overviewData[1].children[2].name}}</div>
              <div>
                <span
                  class="itemStyle text-2xl font-extrabold"
                >{{overviewData[1].children[2].value}}</span>
                {{overviewData[1].children[2].unit}}
              </div>
              <div>{{overviewData[1].children[3].name}}:&nbsp;{{overviewData[1].children[3].value}}{{overviewData[1].children[3].unit}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <SecondLevelTitle title="战略性新兴产业"></SecondLevelTitle>

    <div class="w-full 8k:h-1/3 flex justify-between items-center flex-wrap">
      <div
        v-for="(item, index) in strategicIndustry"
        :key="index"
        class="8k:w-1/5 4k:w-1/3 flex flex-col items-center mb-4"
      >
        <div
          class="bg-[url('assets/imgs/project/zlcy1.png')] bg-cover w-40 h-6 flex items-center justify-center"
        >{{ item.name }}</div>
        <div
          class="bg-[url('assets/imgs/project/zlcy2.png')] bg-cover bg-center w-40 h-40 flex flex-col items-center"
        >
          <div class="text-xl mt-6">
            {{item.children[0].name}}:&nbsp;&nbsp;
            <span
              class="itemStyle font-bold"
            >{{ item.children[0].value}}</span>
            {{ item.children[0].unit}}
          </div>
          <div class="text-xl">
            {{ item.children[1].name}}:&nbsp;&nbsp;
            <span
              class="totalStyle font-bold"
            >{{item.children[1].value}}</span>
            {{item.children[1].unit}}
          </div>
        </div>
      </div>
    </div>

    <!-- 第三部分 -->
    <div class="w-full 8k:h-1/3 flex justify-between flex-wrap">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="项目规模"></SecondLevelTitle>
        <!-- <PipeIconChart class="w-full h-60" /> -->
        <PipeIconChart :data="projectSize" :comname="currentComp" class="w-full h-60" />
      </div>
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="项目分布"></SecondLevelTitle>
        <!-- <Tablechart class="w-full h-60" /> -->
        <ScrollTablechart
          class="w-full"
          :tableTitles="projectDistribution.titles"
          :tableData="projectDistribution.tableData"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 10 {
  .type-icon-#{$i} {
    background-image: url("@/assets/imgs/project/type-item-#{$i}.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
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