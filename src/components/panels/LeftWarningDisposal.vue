<script setup>
import { ref, isRef } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import WarningAreaChart from "../charts/WarningAreaChart.vue";
import WarningTableChart from "../charts/WarningTableChart.vue";
import { warningDisposalData } from "@/assets/chartData/data";

const {
  warningSourceData,
  warningLevelData,
  warningTrendData,
  warningTypeData,
  warningSpaceFeaturesData
} = warningDisposalData;

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
let levelData = ref(warningLevelData[0]);
const setWarningLevelData = name => {
  if (name === "总数") {
    warningLevelData.forEach(element => {
      if (element.name === "总数") {
        levelData = element;
      }
    });
  } else {
    warningLevelData.forEach(element => {
      if (element.name === name) {
        levelData = element;
      }
    });
  }
};
//-----------预警事件趋势
//获取具体时间
const getPastDate = daysAgo => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
  return `${month}-${day}`;
};

let areaChartData = ref({});
const setAreaChartData = data => {
  //设置面积图echart数据
  let xArray = [];
  let yArray = [];
  let children = isRef(data)
    ? data.value.children[2].children
    : data.children[2].children;
  for (let i = children.length - 1; i >= 0; i--) {
    const item = children[i];
    yArray.push(item.value);
    let date = getPastDate(item.flag);
    xArray.push(date);
  }
  areaChartData.value.xData = xArray;
  areaChartData.value.yData = yArray;
};

let trendData = ref(warningTrendData[0]);
const setWarningTrendData = name => {
  if (name === "总数") {
    warningTrendData.forEach(element => {
      if (element.name === "总数") {
        trendData = element;
        setAreaChartData(trendData);
      }
    });
  } else {
    warningTrendData.forEach(element => {
      if (element.name === name) {
        trendData = element;
        setAreaChartData(trendData);
      }
    });
  }
};
setAreaChartData(trendData);

//-----------预警类型
let typeData = ref(warningTypeData[0].children);
const setWarningTypeData = name => {
  if (name === "总数") {
    warningTypeData.forEach(element => {
      if (element.name === "总数") {
        typeData.value = element.children;
      }
    });
  } else {
    warningTypeData.forEach(element => {
      if (element.name === name) {
        typeData.value = element.children;
      }
    });
  }
};

//-----------预警事件空间特征
let tableData = ref(warningSpaceFeaturesData[0].children);
for (let i = 0; i < tableData.value.length; i++) {
  const element = tableData.value[i];
  element.id = i + 1;
}
const setwarningSpaceFeaturesData = name => {
  if (name === "总数") {
    warningSpaceFeaturesData.forEach(element => {
      if (element.name === "总数") {
        tableData.value = element.children;
      }
    });
  } else {
    warningSpaceFeaturesData.forEach(element => {
      if (element.name === name) {
        tableData.value = element.children;
      }
    });
  }
  for (let i = 0; i < tableData.value.length; i++) {
    const element = tableData.value[i];
    element.id = i + 1;
  }
};

// const pipeActive = ref(warningSourceData[0].name)
const pipeActive = ref("");
let oldName = "";
const changeActive = name => {
  if (oldName === name) {
    name = "总数"
  }
  pipeActive.value = name;
  //设置预警等级
  setWarningLevelData(name);
  //设置预警趋势
  setWarningTrendData(name);
  //设置预警类型
  setWarningTypeData(name);
  //设置预警事件空间特征
  setwarningSpaceFeaturesData(name);
  oldName = name;
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
          <div :class="`${pipeActive === item.name ? 'leftIconChecked' : 'leftIcon'} w-40 h-12 flex flex-col`"
            @click="changeActive(item.name)">
            <div class="ml-6">{{ item.name }}</div>
            <div class="ml-4">
              <span
                :class="`${pipeActive === item.name ? 'warningsourcestyle_checked' : 'warningsourcestyle'} text-2xl`">{{
                  item.value }}</span>个
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div
        class="bg-[url('assets/imgs/warning/yj-source1.png')] bg-cover bg-center w-80 h-60 flex items-center justify-center">
        <div class="bg-[url('assets/imgs/warning/alarm.png')] bg-cover bg-center w-12 h-12"></div>
      </div>
      <!-- 右边 -->
      <div class="flex flex-wrap mt-10">
        <div v-for="(item, index) in warningDataRight" :key="index">
          <div :class="`${pipeActive === item.name ? 'rightIconChecked' : 'rightIcon'} w-40 h-12 flex flex-col `"
            @click="changeActive(item.name)">
            <div class="ml-24">{{ item.name }}</div>
            <div class="ml-20">
              <span
                :class="`${pipeActive === item.name ? 'warningsourcestyle_checked' : 'warningsourcestyle'} text-2xl`">{{
                  item.value }}</span>个
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="预警等级"></SecondLevelTitle>
        <div class="w-full flex items-center justify-center">
          <div
            class="bg-[url('assets/imgs/warning/yjlevel.png')] bg-cover bg-center w-28 h-28 flex flex-col items-center justify-around">
            <div class>
              <span class="warninglevel text-2xl font-extrabold">{{ levelData.value }}</span>
              <span>个</span>
            </div>
            <div class="mb-5">总数</div>
          </div>

          <div class="ml-10">
            <div
              class="bg-[url('assets/imgs/warning/firstwarning.png')] bg-cover bg-center w-80 h-8 flex items-center justify-around">
              一级预警
              <div>
                <span class="text-xl font-bold ml-8">{{ levelData.children[0].value }}</span>个
              </div>
              <div>
                <span class="text-xl font-bold ml-8">{{ levelData.children[0].percent }}</span>%
              </div>
            </div>
            <div
              class="bg-[url('assets/imgs/warning/secondwarning.png')] bg-cover bg-center w-80 mt-4 mb-4 h-8 flex items-center justify-around">
              二级预警
              <div>
                <span class="text-xl font-bold">{{ levelData.children[1].value }}</span>个
              </div>
              <div>
                <span class="text-xl font-bold">{{ levelData.children[1].percent }}</span>%
              </div>
            </div>
            <div
              class="bg-[url('assets/imgs/warning/thirdwarning.png')] bg-cover w-80 h-8 flex items-center justify-around">
              三级预警
              <div>
                <span class="text-xl font-bold">{{ levelData.children[2].value }}</span>个
              </div>
              <div>
                <span class="text-xl font-bold">{{ levelData.children[2].percent }}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle class="w-full" title="预警事件趋势">
          <!-- <template v-slot:title-slot>
            <Tab :data="timeTabs" @onTabOnchage="onTabChange" />
          </template> -->
        </SecondLevelTitle>
        <div class="w-full h-full flex items-center justify-center">
          <div class="w-full h-full flex-2">
            <div class="bg-[url('assets/imgs/warningtotal.png')] bg-cover w-90 flex items-center justify-center">
              <span class="warninglevel text-2xl font-bold">{{ trendData.children[0].name }}</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class>
                <span class="warningtotal text-xl font-bold">{{ trendData.children[0].value }}</span>
                <span class="warningtotal font-bold">件</span>
              </div>
              <div class>
                <span class="warningtotal text-xl font-bold">{{ trendData.children[1].value }}</span>
                <span class="warningtotal font-bold">%</span>
                {{ trendData.children[1].name }}
              </div>
            </div>
          </div>
          <WarningAreaChart class="flex-2" :trendChartData="areaChartData" />
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="预警类型"></SecondLevelTitle>
        <div class="flex flex-wrap">
          <div class="bg-[url('assets/imgs/warning/waringtype1.png')] bg-size mt-2 w-[30%] m-2 h-32 flex items-center"
            v-for="(item, index) in typeData" :key="index">
            <div :class="`warningtype_${index + 1} bg-size mt-2 w-8 h-8`"></div>
            <div class="mt-3">
              <div class="name">{{ item.name }}</div>
              <div class="pipe-point">
                <span class="text-2xl font-bold">{{ item.value }}</span>个
              </div>
              <div class="pipe-point">
                <span class="text-2xl font-bold">{{ item.percent }}</span>%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="预警事件空间特征"></SecondLevelTitle>
        <WarningTableChart :tableData="tableData" />
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
  background-image: url("@/assets/imgs/warning/yj-source-type-right-checked.png"),
    url("@/assets/imgs/warning/warningsource4.png");
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