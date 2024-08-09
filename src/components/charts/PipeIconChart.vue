<template>
  <div ref="target" v-resize-ob="handleResize" class="w-full h-60"></div>
</template>

<script setup>
import { h, onMounted, ref, toRef, watch } from "vue";
import * as echarts from "echarts";
import bgimage from "@/assets/imgs/main/title-h-third.png";
import useRootFontSize from "@/hooks/useRootFontSize";
import _ from "lodash";

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  comname: {
    type: String,
    require: true
  }
});

const target = ref(null);
const chartData = toRef(props, "data");
const rootFontSize = useRootFontSize();
let mChart = null;
onMounted(() => {
  mChart = echarts.init(target.value);
});
const colors = [
  ["#0175c4", "#03163a"],
  ["#01a0c7", "#032748"],
  ["#b99c0b", "#1a232b"],
  ["#c16b27", "#2c3e50"],
  ["#FF3939", "#2c3e50"],
  ["#FF9900", "#2c3e50"], // 黄色
];

watch([chartData, rootFontSize], ([newChartData, newFontSize]) => {
  renderChart(newFontSize);
  if (mChart) {
    mChart.resize();
  }
});
const handleResize = () => {
  const fontSize = useRootFontSize();
  renderChart(fontSize.value);
  if (mChart) {
    mChart.resize();
  }
};
const renderChart = (fontSize = chartFontSize) => {
  const total = _.reduce(
    chartData.value,
    (pre, cur) => pre + Number(cur.value),
    0
  );
  const unit = chartData.value[0].unit || "km";
  const echartData = _.map(chartData.value, (c, index) => {
    const p = (Number(c.value) / total) * 100 || 0;
    const percent = p.toFixed(2) + "%";
    return {
      value: c.value,
      name: c.name,
      percent: percent,
      itemStyle: {
        normal: {
          //颜色渐变
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: colors[index][0] },
            { offset: 1, color: colors[index][1] }
          ])
        }
      }
    };
  });
  let colorArr = _.map(colors, (c) => c[0]);
  // 图例的样式

  let legendRich = {
    name: {
      fontSize,
      color: "#fff"
    },
    value: {
      fontSize,
      color: "#fff"
    }
  };

  for (let index = 0; index < colorArr.length; index++) {
    const color = colorArr[index];
    legendRich["percent" + index] = {
      fontSize,
      color: color
    };
  }

  const option = {
    //你的代码
    legend: {
      // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
      orient: "vertical",
      // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
      x: "40%",
      // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
      y: "40%",
      itemWidth: 20, // 设置图例图形的宽
      // itemHeight: 18, // 设置图例图形的高
      textStyle: {
        // color: "#fff", // 图例文字颜色
        rich: legendRich
      },
      // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
      itemGap: 18,

      formatter: function (name) {
        let str = "";
        echartData.map((item, index) => {
          if (item.name === name) {
            if (props.comname == "项目规模") {
              str = `{name|${name}}\r\r{${"percent" +
                index}|${item.percent}}`;
            } else {
              str = `{name|${name}}\r{value|${item.value}${unit}}\r\r{${"percent" +
                index}|${item.percent}}`;
            }

          }
        });
        return str;
      }
    },
    tooltip: {
      show: true,
      formatter: function (value) {
        let data = value.data;
        return `${data.name} ${data.value} (${data.percent})`;
      }
    },
    series: [
      {
        name: "告警类型",
        type: "pie",
        labelLine: {
          show: false
        },
        label: {
          show: false
        },

        radius: ["30%", "50%"],
        center: ["20%", "70%"],
        hoverAnimation: false,
        data: echartData
      }
    ],
    graphic: {
      elements: [
        {
          type: "text",
          left: "44%",
          top: "15%",
          style: {
            text: "总数",
            textAlign: "center",
            fill: "#fff",
            fontSize // 确保 fontSize 有值
          }
        },
        {
          type: "text",
          right: "10%",
          top: "15%",
          style: {
            text: `${total}${unit}`,
            textAlign: "center",
            fontSize, // 确保 fontSize 有值
            fill: "#ffff00"
          }
        },
        {
          type: "image",
          left: "44%",
          top: "20%",
          style: {
            image: bgimage,
            width: 250,
            height: 10
          }
        }
      ]
    }
  };
  mChart.setOption(option);
};
</script>
