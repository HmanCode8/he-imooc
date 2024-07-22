<template>
  <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import { Label } from "cesium";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  barData: {
    type: Object,
    required: true
  }
});

const target = ref(null);
let mChart = null;
onMounted(() => {
  mChart = echarts.init(target.value);
  renderChart();
});

const handleResize = size => {
  console.log("resize", size);
  mChart.resize();
};

const renderChart = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function(parms) {
        var str =
          "类型:" +
          parms[0].axisValue +
          "</br>" +
          parms[0].marker +
          "巡检及时率:" +
          parms[0].value;
        return str;
      }
    },
    // legend: {
    //   show: false,
    //   data: ["预警项目"],
    //   textStyle: { fontSize: 12, color: "#fff" },
    //   itemWidth: 12,
    //   itemHeight: 12,
    //   itemGap: 15,
    //   top: "-1%",
    //   right: "2%"
    // },
    textStyle: {
      color: "#ffffff"
    },
    color: ["#E78134", "#24F3FF", "#FDBF47", "#FDBF47"],
    grid: {
      containLabel: true,
      left: "6%",
      top: "20%",
      bottom: "6%",
      right: "6%"
    },
    xAxis: {
      type: "category",
      data: props.barData.xData,
      axisLine: {
        lineStyle: {
          color: "#B5B5B5"
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 10, //刻度标签与轴线之间的距离。
        textStyle: {
          fontFamily: "Microsoft YaHei",
          color: "#ffffff"
        }
      }
    },
    yAxis: {
      name: "单位：个",
      nameLocation: "end",
      nameTextStyle: {
        align: "left",
        padding: [0, 0, 0, 380]
      },
      type: "value",
      min: 0,
      max: 10,
      boundaryGap: ["20%", "60%"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#B5B5B5"
        }
      },
      splitLine: {
        lineStyle: {
          // 使用深浅的间隔色
          color: ["#B5B5B5"],
          type: "dashed",
          opacity: 0.5
        }
      },
      // axisLabel: {
      //   formatter: '{value}%'
      // },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        name: "巡检及时率",
        data: props.barData.yData,
        stack: "zs",
        type: "bar",
        barMaxWidth: "auto",
        barWidth: 22,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: "linear",
            global: false,
            colorStops: [
              //873D0A
              {
                offset: 0,
                color: "#FF9C11"
              },
              {
                offset: 1,
                color: "#873D0A"
              }
            ]
          }
        }
      },
      {
        data: props.barData.yData,
        type: "pictorialBar",
        barMaxWidth: "10",
        symbolPosition: "end",
        symbol: "diamond",
        symbolOffset: [0, "-50%"],
        symbolSize: [22, 10],
        zlevel: 2
      }
    ]
  };
  mChart.setOption(option);
};
</script>
