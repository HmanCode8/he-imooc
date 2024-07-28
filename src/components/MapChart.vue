<template>
  <div class="map relative">
    <div ref="target" class="w-full h-full"></div>
    <!-- 专题栏 -->
    <div class="top-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] top-0 z-10">
      <div
        class="tabs-container bg-[url('assets/imgs/main/t-tabs.png')] w-1/4 h-20 bg-cover flex justify-between px-10 mt-4">
        <div
          :class="`t-item hover:cursor-pointer font-bold flex items-center h-full relative ${global.componentId === tab.value ? 'text-[#75fbfd] ' : ''}`"
          v-for="tab in topTabs" :key="tab.value" @click="global.setMapCurrentTab(tab.value)">
          <div class="font-[pengmenzhengdao]">{{ tab.name }}</div>
          <div v-if="global.componentId === tab.value"
            class="bg-[url('assets/imgs/main/t-tabs-active.png')] bg-size absolute left-1/2 translate-x-[-50%] top-12 w-12 h-4">
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <!-- :style="`transform: translateY(-${computerLayout(bottomTabs.length, index)}px)`" -->
    <div class="bottom-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] bottom-0 z-10">
      <div class="flex h-full bg-[url('assets/imgs/main/b-tabs.png')] bg-size">
        <div
          :class="`flex flex-col font-bold items-center hover:cursor-pointer t-item-${index + 1} ${currentBottomTab === tab.value ? 'select-active' : ''}  px-2 m-1`"
          v-for="(tab, index) in bottomTabs" :key="tab.value" @click="currentBottomTab = tab.value">
          <div :class="`blink-${index + 1} w-10 h-10 bg-cover`"></div>
          <div class="t-item-name">{{ tab.name }}</div>
        </div>
      </div>
    </div>
    <!-- 图层栏 -->
    <!-- <button class="absolute top-5 left-20 z-20" @click="toggleMap">切换地图</button> -->
    <!-- :style="`transform: translateX(${computerLayout(layerTabs.length, index, 10)}px)`" -->

    <div class="layer-tabs w-60 h-[80%] flex absolute left-[30%] top-1/2 translate-y-[-50%] z-10">
      <div class="h-full w-1/2 layer-bg bg-[url('assets/imgs/main/layer-tabs.png')]">
        <div class="img-list flex flex-col items-center h-[80%]">
          <div :class="`layer-item-${layer.remark} bg-size w-1/2 h-[9%] relative hover:cursor-pointer`"
            @click="onLayerOnchange(layer.remark)" v-for="(layer, index) in layers " :key="layer.name">
            <div v-if="currentLayerTab === layer.remark"
              class="w-full h-full absolute top-0 left-0 bg-[url('assets/imgs/main/layer-active.png')] bg-size">
            </div>
          </div>
        </div>
        <div class="h-[20%] flex flex-col justify-around items-center">
          <div class=" hover:cursor-pointer" v-for="(i, index) in iconList" :key="i.name" @click="iconctive = i.value">
            <i :class="`iconfont ${i.value} ${iconctive === i.value ? 'text-[#00BAFF]' : ''} font-bold text-xl`"></i>
          </div>
        </div>
      </div>

      <div class="layer-shaw p-3 w-full h-full ml-[-10px] bottom-0">
        <div ref="leyerRef" class>
          <div v-for="sub in currentItem" :key="sub.name" class="mb-4">
            <div
              class="bg-[url('assets/imgs/main/layer-child.png')] w-full px-2 mb-4 py-1 flex items-center h-6 bg-size font-bold">
              {{ sub.name }}</div>
            <div v-if="sub.children && 0 < sub.children.length" class="ml-4">
              <div v-for="item in sub.children" :key="item.remark" class="pl-2">
                <div :class="` hover:cursor-pointer ${loadedLayerGroup.includes(item.remark) ? 'text-[#00faff]' : ''}`"
                  @click="updateLayer(item)">{{ item.name }}</div>
              </div>
            </div>
            <div v-else>---</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右下角图例 -->

    <!-- <div class="legend absolute bg-slate-400 right-[30%] mr-10 bottom-20 z-10">
			<div class="legend-title px-2 border-b-2 border-slate-600">图例</div>
			<div class="legend-content px-1">
				<div class="legend-item flex items-center ">
					<img :src="legend.img" :alt="legend.source + legend.label" />
					<div class="legend-item-desc">{{ legend.label }}</div>
				</div>
			</div>
		</div>
		-->

    <!-- 地图弹出框 -->

    <div ref="popupCom" class="popup overflow-auto">
      <div class="banner">
        <div class="title">{{ popupObject.layerName }}</div>
        <div class="close-icon" @click="closePop(map)">✖</div>
      </div>
      <div class="info-wrapper overflow-auto">
        <div class="info-text" v-for="(value, key) in popupObject.properties">{{ key }} : {{ value }}</div>
      </div>
    </div>

    <!-- 图例 -->

    <div ref="legendRef" v-if="0 < legendGroup.length"
      class="legend absolute bg-slate-400 right-[30%] mr-10 bottom-20 z-10">
      <MapLegend @update:checked="legendOnchage" :legendGroup="legendGroup" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import { useGlobalStore } from "@/store";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import _ from "lodash";

import MapLegend from "@/components/MapLegend.vue";
import proj4 from "proj4";
import { register } from "ol/proj/proj4";

import { topTabs, bottomTabs, iconList } from '@/assets/chartData/const'

import { createLayer, getLegend, traverseLayerDefine } from "@/utils/map/layer";
import { closePop, createDefaultPopup, getPopInfo, popElement } from "@/utils/map/popup";

const { layerConfig = {} } = window;
const layers = ref([])
const gsap = inject('gsap')
const leyerRef = ref(null)
const legendRef = ref(null)
const global = useGlobalStore()
const target = ref(null)
const currentBottomTab = ref('underground-pipeline')
const currentLayerTab = ref('ranqi');
const currentLayerGroup = ref([]);
const loadedLayerGroup = ref([]);

const map = ref(null);
const popupCom = ref(null);
const popupObject = ref({});
const legendGroup = ref([]);
const isCesiumMap = ref(false);
const cesiumViewer = ref(null);


const iconctive = ref(iconList[0].value);
const onLayerOnchange = val => {
  currentLayerTab.value = val;
};

const currentItem = computed(() =>
  _.get(
    _.find(layers.value, item => item.remark === currentLayerTab.value),
    "children",
    []
  )
);
const legendOnchage = val => {
  console.log(val);
};


// const computerLayout = (size, index, initStyle = 10) => {
// 	let styles = []
// 	for (let key = 0; key <= size; key++) {
// 		styles.push(initStyle * key)
// 	}
// 	const newStyles = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
// 	const newStyles1 = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
// 	const arr = [..._.reverse(newStyles), ...newStyles1]
// 	const nextstyles = [...newStyles1, ...(size % 2 === 0 ? _.reverse(newStyles1) : _.tail(_.reverse(newStyles1)))]
// 	return size === 10 ? nextstyles[index] : arr[index]
// }

const initOpenLayersMap = () => {
  if (layerConfig.hasOwnProperty("customProjections")) {
    let projectionArr = [];
    for (let key in layerConfig.customProjections) {
      projectionArr.push([key, layerConfig.customProjections[key]]);
    }
    proj4.defs(projectionArr);
  }
  register(proj4);

  const baseLayerConfig = layerConfig["baseLayer"]["raster"];
  const baseLayers = baseLayerConfig.map(v =>
    createLayer(getLayerSource(v), "base")
  );

  const infoOverlay = createDefaultPopup(popupCom.value);

  const p = new Map({
    target: target.value,
    layers: baseLayers,
    controls: [],
    overlays: [infoOverlay],
    view: new View({
      center: [120.2327, 33.4905],
      zoom: 10,
      maxZoom: 20,
      minZoom: 8,
      projection: layerConfig.systemProjection
    })
  });
  p.on("singleclick", queryPopupDetail);
  /**
   * 保存地图示例，后续叠加图层需要
   */
  map.value = p;

  // 延迟加载次要图层
  setTimeout(() => {
    // setDefaultLayers(global.componentId);
  }, 1000); // 延迟1秒加载
};

const getLayerSource = sourceName => {
  return _.cloneDeep(layerConfig["layerList"].find(v => v["name"] === sourceName));
}

const setDefaultLayers = moduleName => {
  let defaultLayerGroup = ["base", moduleName];
  map.value && map.value.getLayers().forEach(v => {
    if (!defaultLayerGroup.includes(v.get("layerGroup"))) {
      map.value.removeLayer(v);
    }
  });
  if (layerConfig["layerTrees"].hasOwnProperty(moduleName)) {
    layers.value = layerConfig["layerTrees"][moduleName];
    currentLayerGroup.value = traverseLayerDefine(layers.value);
    loadDefaultLayers(moduleName, false);
  }
};

const loadDefaultLayers = (configName, isRemoveFirst) => {
  if (isRemoveFirst) {
    map.value.getLayers().forEach(v => {
      if ("base" !== v.get("layerGroup")) {
        map.value.removeLayer(v);
      }
    });
  }
  loadedLayerGroup.value.length = 0;
  const defaultLoadLayerArr = _.get(layerConfig.defaultLayers, configName, []);
  if (0 < defaultLoadLayerArr.length) {
    const firstDefaultLayer = defaultLoadLayerArr[0];
    const defaultLoadLayerList = currentLayerGroup.value.filter(
      v => defaultLoadLayerArr.includes(v.remark)
    );
    currentLayerTab.value = _.get(_.find(layers.value,
      v => v.children && v.children.some(
        sub => sub.children && sub.children.some(
          item => firstDefaultLayer === item.remark
        )
      )
    ), "remark", "");
    loadedLayerGroup.value = loadedLayerGroup.value.concat(
      defaultLoadLayerList.map(v => v.remark)
    );
    const groupedLayerMap = Object.groupBy(
      defaultLoadLayerList,
      ({ source }) => source
    );
    for (let sourceName in groupedLayerMap) {
      const loadLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.layer)
        .map(v => v.layer)
        .join(",");
      const showDetailLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.detailLayer)
        .map(v => v.detailLayer)
        .join(",");
      const showLegendLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.legendLayer)
        .map(v => v.legendLayer)
        .join(",");
      const layerParam = {
        source: sourceName,
        layer: loadLayerStr,
        detailLayer: showDetailLayerStr,
        legendLayer: showLegendLayerStr
      };
      addLayer(layerParam);
    }
  } else {
    currentLayerTab.value = _.get(layers.value, "0.name", "");
  }
};


const updateLayer = async layerParam => {
  if ("layer" !== layerParam.type) {
    return;
  }
  const loadLayerArr = _.get(layerParam, "layer", "").split(",");
  const detailLayerArr = _.get(layerParam, "detailLayer", "").split(",");
  const legendLayerArr = _.get(layerParam, "legendLayer", "").split(",");
  if (loadedLayerGroup.value.includes(layerParam.remark)) {
    loadedLayerGroup.value = loadedLayerGroup.value.filter(
      layer => layer !== layerParam.remark
    );
    const layer = map.value
      .getAllLayers()
      .find(v => layerParam.source === v.get("layerName"));
    if (layer) {
      if (layerParam.layer) {
        legendGroup.value = legendGroup.value.filter(v => v.source !== layerParam.source || !loadLayerArr.includes(v.layerId));
        const layerPrefix = "arcgis_WMS" === layer.get("layerType") ? "show:" : "";
        const newLayerStr = layer.getSource().getParams()["LAYERS"].substring(layerPrefix.length)
          .split(",").filter(l => !loadLayerArr.includes(l)).join(",");
        if (0 < newLayerStr.length) {
          if (0 < detailLayerArr.length) {
            layer.set(
              "detailLayer",
              layer.get("detailLayer").split(",").filter(l => !detailLayerArr.includes(l)).join(",")
            );
          }
          if (0 < legendLayerArr.length) {
            layer.set(
              "legendLayer",
              layer.get("legendLayer").split(",").filter(l => !legendLayerArr.includes(l)).join(",")
            );
          }
          layer.getSource().getParams()["LAYERS"] = layerPrefix + newLayerStr;
          layer.getSource().changed();
          return;
        }
      }
      map.value.removeLayer(layer);
    }
  } else {
    loadedLayerGroup.value.push(layerParam.remark);
    const layer = map.value
      .getAllLayers().find(v => layerParam.source === v.get("layerName"));
    if (layer) {
      if (layerParam.layer) {
        const layerPrefix = "arcgis_WMS" === layer.get("layerType") ? "show:" : "";
        const newLayerStr = layer.getSource().getParams()["LAYERS"].substring(layerPrefix.length)
          .split(",").concat(loadLayerArr).join(",");
        if (0 < detailLayerArr.length) {
          layer.set(
            "detailLayer",
            layer.get("detailLayer").split(",").concat(detailLayerArr).join(",")
          );
        }
        if (0 < legendLayerArr.length) {
          layer.set(
            "legendLayer",
            layer.get("legendLayer").split(",").concat(legendLayerArr).join(",")
          );
        }
        layer.getSource().getParams()["LAYERS"] = layerPrefix + newLayerStr;
        layer.getSource().changed();
        const newLegend = await getLegend(map.value, layer, layerValue["legendLayer"]);
        legendGroup.value = legendGroup.value.concat(newLegend);
      }
    } else {
      addLayer(layerParam);
    }
  }
};

const addLayer = async layerValue => {
  const layerParam = getLayerSource(layerValue["source"]);
  layerParam["detailLayer"] = layerValue["detailLayer"];
  layerParam["legendLayer"] = layerValue["legendLayer"];
  if (!layerParam["layer"] && layerValue["layer"]) {
    layerParam["layer"] = layerValue["layer"];
  }
  const layer = createLayer(layerParam, global.componentId);
  map.value && map.value.addLayer(layer);
  if (layerValue["legendLayer"] && 0 < layerValue["legendLayer"].length) {
    const newLegend = await getLegend(map.value, layer, layerValue["legendLayer"]);
    legendGroup.value = legendGroup.value.concat(newLegend);
  }
}

const queryPopupDetail = async evt => {
  popupObject.value = await getPopInfo(evt, currentLayerGroup.value);
  0 < Object.keys(popupObject.value).length ? popElement(evt) : closePop(evt.map);
};

const initCesiumMap = async () => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MmMwNmM1My03NzI4LTQ0NDUtOTBiYy1hM2I2ZmUxZDNmOWUiLCJpZCI6MjI4NzQzLCJpYXQiOjE3MjExMzU1OTZ9.bZrwv5u7g418lGuDhTuRqkrWJDHAFWGGd1TiTbsM9dU";

  cesiumViewer.value = new Cesium.Viewer(target.value, {
    // terrainProvider: await Cesium.createWorldTerrainAsync()
  });

  //   cesiumViewer.value.scene.globe.depthTestAgainstTerrain = true;
  const viewer = cesiumViewer.value;
  //todo
  //加载倾斜
  try {
    const tileset = await Cesium.Cesium3DTileset.fromUrl(
      "http://127.0.0.1:8089/data/ycosgb3/tileset.json"
    );
    viewer.scene.primitives.add(tileset);
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(
        120.17147298986772,
        33.301942305971394,
        137.11303375009118
      ),
      orientation: {
        heading: 0.345650960729154,
        pitch: -0.28325898231466784,
        roll: 6.283183439173194
      }
    });
  } catch (error) {
    console.error(`Error creating tileset: ${error}`);
  }

  //加载管线
  let gxTypes = ["dxline", "gdline", "jsline", "trline", "ysline"];
  let comps = [
    "pipelineGeo",
    "pipelineI3dm",
    "pipelineJG",
    "pipelinePointInstance",
    "pipelineWellGeo"
  ];

  try {
    for (let i = 0; i < gxTypes.length; i++) {
      const element = gxTypes[i];
      for (let j = 0; j < comps.length; j++) {
        const item = comps[j];

        const tileset = await Cesium.Cesium3DTileset.fromUrl(
          "http://127.0.0.1:8089/data/gx/" + element + "/" + item + "/tileset.json"
        );
        viewer.scene.primitives.add(tileset);
      }
    }
  } catch (error) {
    console.error(`Error creating tileset: ${error}`);
  }
};

watch(
  () => currentLayerTab.value,
  () => {
    gsap.fromTo(
      leyerRef.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.3, ease: "linear" }
    );
  }
);

const initLayerTree = (key) => {
  layers.value = layerConfig["layerTrees"][key];
  currentLayerTab.value = _.get(layers.value, "0.name", "");
}

watch(
  () => global.componentId,
  value => {
    initLayerTree(value)
    setDefaultLayers(value);
  }, {
  immediate: true
}
);
onMounted(() => {
  initOpenLayersMap();
});

const toggleMap = () => {
  if (isCesiumMap.value) {
    cesiumViewer.value.destroy();
    initOpenLayersMap();
  } else {
    map.value.setTarget(null);
    initCesiumMap();
  }
  isCesiumMap.value = !isCesiumMap.value;
};
</script>

<style lang="scss" scoped>
@use "sass:math";

@keyframes blink {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  50% {
    transform: rotate3d(0, 0, 1, 180deg);
  }

  100% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

$layers: jichu, gongshui, daolu, ludeng, qiaoliang, wushui, yushui, zonghe, xiangmu, ranqi;

// 定义一个数组
// $colors: guanxian, green, blue;

// 使用 @each 遍历数组
@each $layer in $layers {
  .layer-item-#{$layer} {
    // 在这里定义你的 CSS 属性
    background-image: url("@/assets/imgs/main/layer-#{$layer}.png");
  }
}

.blink {
  transition: all 4s ease-in-out;
  transform-origin: center center;
  // animation: blink 5s infinite;
}

.info-content {
  padding: 10px;
  background-color: #fff;
}

.top-tabs {

  // background-color: #b01f1f;
  .tabs-container {
    // 背景半透明
    // background-color: rgba(142, 45, 45, 0.5);
    background-size: 100% 100%;
  }

  .el-segmented {
    background-color: transparent;
    color: rgb(216, 228, 228);
    --el-segmented-item-selected-color: var(--el-text-color-primary);
    --el-segmented-item-selected-bg-color: #2b92c6;
    // --el-border-radius-base: 16px;
  }
}

.bottom-tabs {

  //循环
  @for $i from 1 through 10 {
    .blink-#{$i} {
      // 这里可以添加你想要的样式
      background-image: url("@/assets/imgs/main/icon-b-#{$i}.png");
      // 其他样式...
    }
  }
}

.layer-tabs {

  .layer-shaw {
    // 左上角开始渐变背景，从上到下透明度从0到1，颜色#0a234a, #305fad
    background: linear-gradient(to bottom,
        rgba(11, 29, 65, 0.6),
        rgb(7, 32, 50),
        rgba(57, 142, 203, 0.4));
  }
}

.select-active {
  // filter: drop-shadow(2px 4px 6px red);
  color: #00faff;
  background-image: url("@/assets/imgs/main/icon-b-active.png");
  background-size: 100% 100%;
  transform: translateY(-20px);
  transition: all 0.3s ease-in-out;
}

.popup {
  width: 845px;
  height: 587px;
  background: url("@/assets/imgs/main/map-popup-bg.png") -1px -1px no-repeat;
  background-size: 847px 589px;
  margin-left: 73px;

  .banner {
    height: 62px;
    color: rgba(255, 255, 255, 1);
    font-size: 48px;
    font-family: "YouSheBiaoTiHei";
    font-weight: normal;
    text-align: left;
    white-space: nowrap;
    line-height: 62px;
    margin: 48px 0 0 74px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .title {
      overflow-wrap: break-word;
    }

    .close-icon {
      color: rgba(205, 228, 248, 1);
      font-size: 32px;
      cursor: pointer;
      margin: 10px 70px 0 0;
    }
  }

  .info-wrapper {
    max-height: 370px;
    width: 610px;
    overflow-wrap: break-word;
    font-size: 0;
    font-family: "PingFangSC-Regular";
    font-weight: normal;
    text-align: left;
    margin: 40px 0 0 85px;

    .info-text {
      width: 609px;
      overflow-wrap: break-word;
      color: rgba(205, 228, 248, 1);
      font-size: 32px;
      font-family: "PingFangSC-Regular";
      font-weight: normal;
      text-align: left;
      white-space: normal;
      line-height: 45px;
    }
  }
}
</style>
