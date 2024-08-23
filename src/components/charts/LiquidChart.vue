<template>
  <div>
    <div ref="target" class="w-full h-full"></div>

  </div>
</template>

<script setup>
import { h, onMounted, ref, toRef, watch, onUnmounted } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import "echarts-liquidfill";
import useRootFontSize from "@/hooks/useRootFontSize";

const props = defineProps({
  liquidData: {
    type: Object,
    required: true
  },
  index: {
    type: Number
  }
});

const rootFontSize = useRootFontSize();
const target = ref(null);
const data = toRef(props.liquidData);
let mChart = null;

onMounted(() => {
  mChart = echarts.init(target.value);
  renderChart(rootFontSize.value)
});

onUnmounted(() => {
  mChart.dispose();
})

watch([data, rootFontSize], ([newChartData, newFontSize]) => {
  renderChart(newFontSize);
  mChart && mChart.resize();
});

const renderChart = (fontSize) => {
  const option = {
    title: {
      text: data.value.name,
      textStyle: {
        fontSize,
        color: "rgba(255, 255, 255, 0.7)",
        rich: {
          a: {
            fontSize,
          },
        },
      },
      x: "center",
      y: "60%",
    },
    series: [
      {
        type: "liquidFill",
        radius: "100%",
        data: [Number(data.value.value)],
        color: data.value.color,
        label: {
          normal: {
            textStyle: {
              fontSize,       // 字体大小
              color: '#fff',   // 字体颜色
              fontFamily: 'Arial',// 字体系列
              fontWeight: 'bold', // 字体粗细
              textShadowColor: 'rgba(0, 0, 0, 0.5)', // 文字阴影颜色
              textShadowBlur: 10  // 文字阴影模糊半径
            },
            formatter: function (param) {
              return (param.value * 100).toFixed(2) + '%';  // 格式化数值
            }
          }
        },


        backgroundStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0,24,55, 0)"
              },
              {
                offset: 0.75,
                color: "rgba(0,24,55, 0)"
              },
              {
                offset: 1,
                color: data.value.color
              }
            ],
            globalCoord: false
          }
        },

        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 0,
            borderColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(50,115,256, 1)"
                },
                {
                  offset: 0.5,
                  color: "rgba(50,115,233, .75)"
                },
                {
                  offset: 1,
                  color: data.value.color
                }
              ],
              globalCoord: false
            }
          }
        }
      }
    ]
  };
  mChart.setOption(option);
};
</script>
