<template>
  <div class="">
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { h, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
// import { Label } from "cesium";
import useRootFontSize from "@/hooks/useRootFontSize";

const props = defineProps({
  barData: {
    type: Object,
    required: true
  },
  trendChartData: {
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

watch(
  () => props.trendChartData,
  newVal => {
    mChart = echarts.init(target.value);
    renderChart();
  },
  { deep: true }
);

const handleResize = size => {
  const fontSize = useRootFontSize();
  renderChart(fontSize.value);
  mChart.resize();
};

const renderChart = fontSize => {
  const option = {
    tooltip: {
      trigger: "axis",
      // axisPointer: {
      //   type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      // },
      formatter: function (parms) {
        var str =
          "日期:" +
          parms[0].axisValue +
          "</br>" +
          parms[0].marker +
          "事件数:" +
          parms[0].value;
        return str;
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.trendChartData.xData,
      axisLabel: {
        // interval: 0, // 强制显示每个标签
        textStyle: {
          fontSize
        }
      }
    },
    yAxis: {
      type: "value",
      // max: 8,
      axisLabel: {
        textStyle: {
          fontSize
        }
      }
    },
    series: [
      {
        data: props.trendChartData.yData,
        type: "line",
        areaStyle: {
          // 使用线性渐变色
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0.6, color: "rgba(1,88,136,1)" }, // 0% 处的颜色
              { offset: 1, color: "rgba(1,1,1,0)" } // 100% 处的颜色
            ],
            global: false // 缺省为 false
          }
        },
        // 设置折线的颜色
        lineStyle: {
          color: "#00ABD8" // 在这里设置线的颜色
        },
        // 可选：设置拐点（点）的样式
        itemStyle: {
          color: "#00ABD8" // 设置点的颜色，保持一致
        }
      }
    ],
    graphic: [
      {
        type: "text",
        right: "5%",
        top: "5%",
        style: {
          text: "事件数/件",
          textAlign: "center",
          fill: "#A8B1AF",
          fontSize
        }
      }
    ],
    grid: {
      top: "20%", // 上边距
      right: "10%", // 右边距
      bottom: "10%", // 下边距
      left: "5%", // 左边距
      containLabel: true // 是否包含轴标签
    }
  };
  mChart.setOption(option);
};
</script>
