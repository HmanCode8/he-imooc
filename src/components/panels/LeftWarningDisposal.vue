<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import WarningAreaChart from "../charts/WarningAreaChart.vue";
import WarningTableChart from "../charts/WarningTableChart.vue";
import { warningDisposalData } from "@/assets/chartData/data";

const { warningSourceData, warningLevelData } = warningDisposalData;

const list = ref([
  {
    name: "官网",
    value: 100
  },
  {
    name: "微信",
    value: 30
  },
  {
    name: "微博",
    value: 20
  },
  {
    name: "官网",
    value: 100
  },
  {
    name: "微信",
    value: 30
  },
  {
    name: "其他",
    value: 10
  }
]);

const tabs = ref([
  {
    name: "类型",
    value: "type"
  },
  {
    name: "分区",
    value: "partition"
  }
]);

//预警来源
const warningDataLeft = ref([]);
const warningDataRight = ref([]);

for (let i = 0; i < 4; i++) {
  warningDataLeft.value.push(warningSourceData[i]);
}

for (let i = 4; i < 8; i++) {
  warningDataRight.value.push(warningSourceData[i]);
}

const warningType = ref([
  { name: "燃气场站", value: 60, percent: "40" },
  { name: "窨井", value: 23, percent: "40" },
  { name: "管线", value: 25, percent: "40" },
  { name: "终端用户", value: 99, percent: "40" },
  { name: "阀门井", value: 60, percent: "40" }
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

//设置预警等级
let pannelData = ref(warningLevelData[0]);
const setWarningLevelData = name => {
  if (name === "总数") {
    warningLevelData.forEach(element => {
      if (element.name === "总数") {
        pannelData = element;
      }
    });
  } else {
    warningLevelData.forEach(element => {
      if (element.name === name) {
        pannelData = element;
      }
    });
  }
  /* switch (name) {
    case "燃气":
      warningLevelData.forEach(element => {
        if (element.name === name) {
          pannelData = element;
        }
      });
      break;
    default:
      warningLevelData.forEach(element => {
        if (element.name === "总数") {
          pannelData = element;
        }
      });
      break;
  } */
};

// const pipeActive = ref(warningSourceData[0].name)
const pipeActive = ref("");
const changeActive = name => {
  pipeActive.value = name;
  //设置预警等级
  setWarningLevelData(name);
};
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="预警事件分析"></FristLevelTitle>
    <SecondLevelTitle title="预警来源"></SecondLevelTitle>
    <div class="w-full h-60 flex justify-around">
      <!-- 左边 -->
      <div class="flex flex-wrap justify-end mt-10">
        <div v-for="(item, index) in warningDataLeft" :key="index">
          <!-- <div class="leftIcon w-40 h-12 flex flex-col"> -->
          <div
            :class="`${pipeActive === item.name ? 'leftIconChecked' : 'leftIcon'} w-40 h-12 flex flex-col`"
            @click="changeActive(item.name)"
          >
            <div class="ml-6">{{ item.name }}</div>
            <div class="ml-4">
              <span
                :class="`${pipeActive === item.name ? 'warningsourcestyle_checked' : 'warningsourcestyle'} text-2xl`"
              >{{ item.value }}</span>个
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div
        class="bg-[url('assets/imgs/warning/yj-source1.png')] bg-cover bg-center w-80 h-60 flex items-center justify-center"
      >
        <div class="bg-[url('assets/imgs/warning/alarm.png')] bg-cover bg-center w-12 h-12"></div>
      </div>
      <!-- 右边 -->
      <div class="flex flex-wrap mt-10">
        <div v-for="(item, index) in warningDataRight" :key="index">
          <!-- <div
            class="rightIcon w-40 h-12 flex flex-col"
          >-->
          <div
            :class="`${pipeActive === item.name ?'rightIconChecked':'rightIcon'} w-40 h-12 flex flex-col `"
            @click="changeActive(item.name)"
          >
            <div class="ml-24">{{ item.name }}</div>
            <div class="ml-20">
              <span class="warningsourcestyle text-2xl">{{ item.value }}</span>个
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-40">
        <SecondLevelTitle title="预警等级"></SecondLevelTitle>
        <div class="w-full flex items-center justify-center">
          <div
            class="bg-[url('assets/imgs/warning/yjlevel.png')] bg-cover bg-center w-28 h-28 flex flex-col items-center justify-around"
          >
            <div class>
              <span class="warninglevel text-2xl font-extrabold">{{ pannelData.value }}</span>
              <span>个</span>
            </div>
            <div class="mb-5">持续任务时长</div>
          </div>

          <div class="ml-10">
            <div
              class="bg-[url('assets/imgs/warning/firstwarning.png')] bg-cover bg-center w-80 h-8 flex items-center justify-around"
            >
              一级预警
              <div>
                <span class="text-xl font-bold ml-8">{{ pannelData.children[0].value }}</span>个
              </div>
              <div>
                <span class="text-xl font-bold ml-8">{{ pannelData.children[0].percent }}</span>%
              </div>
            </div>
            <div
              class="bg-[url('assets/imgs/warning/secondwarning.png')] bg-cover bg-center w-80 mt-4 mb-4 h-8 flex items-center justify-around"
            >
              二级预警
              <div>
                <span class="text-xl font-bold">120</span>个
              </div>
              <div>
                <span class="text-xl font-bold">76</span>%
              </div>
            </div>
            <div
              class="bg-[url('assets/imgs/warning/thirdwarning.png')] bg-cover w-80 h-8 flex items-center justify-around"
            >
              三级预警
              <div>
                <span class="text-xl font-bold">120</span>个
              </div>
              <div>
                <span class="text-xl font-bold">75</span>%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="预警事件趋势">
          <template v-slot:title-slot>
            <Tab :data="timeTabs" @onTabOnchage="onTabChange" />
          </template>
        </SecondLevelTitle>
        <div class="w-full h-full flex">
          <div class="w-full h-full">
            <div
              class="bg-[url('assets/imgs/warningtotal.png')] bg-cover w-90 flex items-center justify-center"
            >
              <span class="warninglevel text-2xl font-bold">总事件数</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class>
                <span class="warningtotal text-xl font-bold">23</span>
                <span class="warningtotal font-bold">件</span>
              </div>
              <div class>
                <span class="warningtotal text-xl font-bold">4.5</span>
                <span class="warningtotal font-bold">%</span>同比
              </div>
            </div>
          </div>
          <WarningAreaChart />
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="预警类型"></SecondLevelTitle>
        <div class="flex flex-wrap justify-around">
          <div
            class="flex bg-[url('assets/imgs/warning/waringtype1.png')] bg-cover mt-2 w-40 h-32 flex justify-center"
            v-for="(item, index) in warningType"
            :key="index"
          >
            <div :class="`warningtype_${index + 1} bg-cover mt-2 w-8 h-8`"></div>
            <div class="mt-3">
              <div class="name">{{ item.name }}</div>
              <div class="pipe-point">
                <span class="text-[18px] font-bold">{{ item.value }}</span>个
              </div>
              <div class="pipe-point">
                <span class="text-[18px] font-bold">{{ item.percent }}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="预警事件空间特征"></SecondLevelTitle>
        <WarningTableChart />
        <!-- <div class="w-full h-full">
          <div class="itemth grid grid-cols-4 bg-[#081f51] px-3 justify-between text-center mb-2 w-full">
            <div class></div>
            <div class>区域</div>
            <div class>数量/个</div>
            <div class>占比/%</div>
          </div>
          <div class="table-body">
            <div
              class="item grid grid-cols-4 px-3 items-center justify-between text-center mb-2 w-full"
            >
              <div class="bg-[url('assets/imgs/warning/TOP1.png')] bg-cover h-4 w-12">1</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/warning/TOP2.png')] bg-cover h-4 w-12">2</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/warning/TOP3.png')] bg-cover h-4 w-12">3</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/warning/TOP4.png')] bg-cover h-4 w-12">4</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/warning/TOP4.png')] bg-cover h-4 w-12">5</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.itemth {
  grid-template-columns: 1fr 3fr 3fr 3fr;
}

.item {
  grid-template-columns: 1fr 3fr 3fr 3fr;
}

.item:nth-child(odd) {
  background-color: #053b66;
}

.item:nth-child(even) {
  background-color: #012451;
}

.warninglevel {
  font-family: "PangMenZhengDao";
  background: linear-gradient(to top, #d5dcfe, #82a8ee, #f3f3ff, #f3f3ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* 将文字颜色设置为透明，使背景渐变显示出来 */
}

.warningtotal {
  background: linear-gradient(0deg, #ffba00 0%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.warningsourcestyle {
  background: linear-gradient(0deg, #1890ff 0%, #1ee7e7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.warningsourcestyle_checked {
  background: linear-gradient(0deg, #ffba00 0%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

@for $i from 1 through 5 {
  .warningtype_#{$i} {
    background-image: url("@/assets/imgs/warning/ic_#{$i}.png");
  }
}

.leftIcon {
  background-image: url("@/assets/imgs/warning/yj-source-type-left.png"),
    url("@/assets/imgs/warning/warningsource1.png");
  // background-position: center 50%, center center; /* 第二张背景图上升到第一张背景图的一半位置 */
  background-position: 10% -10%;
  background-size: 40%, 80%;
  background-repeat: no-repeat, no-repeat;
}

.leftIconChecked {
  background-image: url("@/assets/imgs/warning/yj-source-type-left-checked.png"),
    url("@/assets/imgs/warning/warningsource3.png");
  // background-position: center 50%, center center; /* 第二张背景图上升到第一张背景图的一半位置 */
  background-position: 10% -10%;
  background-size: 40%, 80%;
  background-repeat: no-repeat, no-repeat;
}

.rightIconChecked {
  background-image: url("@/assets/imgs/warning/yj-source-type-left-checked.png"),
    url("@/assets/imgs/warning/warningsource2.png");
  // background-position: center 50%, center center; /* 第二张背景图上升到第一张背景图的一半位置 */
  background-position: 90% 10%;
  background-size: 40%, 80%;
  background-repeat: no-repeat, no-repeat;
}

.rightIcon {
  background-image: url("@/assets/imgs/warning/yj-source-type-right.png"),
    url("@/assets/imgs/warning/warningsource2.png");
  // background-position: center 50%, center center; /* 第二张背景图上升到第一张背景图的一半位置 */
  background-position: 90% 10%;
  background-size: 40%, 80%;
  background-repeat: no-repeat, no-repeat;
}
</style>