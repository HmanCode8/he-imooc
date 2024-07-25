<template>
  <div class="map relative">
    <div ref="target" class="w-full h-full"></div>
    <!-- 专题栏 -->
    <div
      class="top-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] top-0 z-10"
    >
      <div
        class="tabs-container bg-[url('assets/imgs/main/t-tabs.png')] w-1/4 h-20 bg-cover flex justify-between px-10 mt-4"
      >
        <div
          :class="`t-item hover:cursor-pointer font-bold flex items-center h-full relative ${global.componentId === tab.value ? 'text-[#75fbfd] ' : ''}`"
          v-for="tab in topTabs"
          :key="tab.value"
          @click="global.setMapCurrentTab(tab.value)"
        >
          <div class="font-[YouSheBiaoTiHei]">{{ tab.name }}</div>
          <div
            v-if="currentTopTab === tab.value"
            class="t-item-line absolute left-1/2 translate-x-[-50%] top-12 w-12 h-4"
          ></div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <!-- :style="`transform: translateY(-${computerLayout(bottomTabs.length, index)}px)`" -->
    <div
      class="bottom-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] bottom-0 z-10"
    >
      <div
        :class="`flex flex-col font-bold items-center hover:cursor-pointer t-item-${index + 1} ${currentBottomTab === tab.value ? 'select-active' : ''}  px-2 m-1`"
        v-for="(tab, index) in bottomTabs"
        :key="tab.value"
        @click="currentBottomTab = tab.value"
      >
        <div :class="`blink-${index + 1} w-10 h-10 bg-cover`"></div>
        <div class="t-item-name">{{ tab.name }}</div>
      </div>
    </div>
    <!-- 图层栏 -->
    <!-- <button class="absolute top-5 left-20 z-20" @click="toggleMap">切换地图</button> -->
    <!-- :style="`transform: translateX(${computerLayout(layerTabs.length, index, 10)}px)`" -->

    <div class="layer-tabs w-40 h-[80%] flex absolute left-[30%] top-1/2 translate-y-[-50%] z-10">
      <div class="h-full w-1/2 layer-bg bg-[url('assets/imgs/main/layer-tabs.png')]">
        <div class="img-list flex flex-col items-center h-[80%]">
          <div
            :class="`layer-item-${index + 1} w-1/2 h-[9%] relative hover:cursor-pointer`"
            @click="onLayerOnchange(i.name)"
            v-for="(i, index) in layers "
            :key="i.name"
          >
            <div
              v-if="currentLayerTab === i.name"
              class="w-full h-full layer-active absolute top-0 left-0 bg-[url('assets/imgs/main/layer-active.png')]"
            ></div>
          </div>
        </div>
        <div class="h-[20%] flex flex-col justify-around items-center">
          <div
            class="tool-item hover:cursor-pointer"
            v-for="(i, index) in iconList"
            :key="i.name"
            @click="iconctive = i.value"
          >
            <i
              :class="`iconfont ${i.value} ${iconctive === i.value ? 'text-[#00BAFF]' : ''} font-bold text-xl`"
            ></i>
          </div>

          <!-- <div class="tool-item w-5 h-5 bg-[url('assets/imgs/main/icon-delete.png')]"></div> -->
          <!-- <div class="tool-item w-5 h-5 bg-[url('assets/imgs/main/icon-expad.png')]"></div> -->
        </div>
      </div>

      <div class="layer-shaw p-3 w-full h-full ml-[-10px] bottom-0">
        <div ref="leyerRef" class>
          <div v-for="sub in currentItem" :key="sub.name" class>
            <div
              class="bg-[url('assets/imgs/main/layer-child.png')] w-full px-2 py-1 flex items-center h-6 bg-size font-bold"
            >{{ sub.name }}</div>
            <div v-for="item in sub.children" :key="item.name" class="pl-2">
              <div
                :class="` hover:cursor-pointer ${loadedLayerGroup.includes(item.name) ? 'select-item' : ''}`"
                @click="updateLayer(item)"
              >{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右下角图例 -->

    <!-- <div class="legend absolute bg-slate-400 right-[30%] mr-10 bottom-20 z-10">
			<div class="legend-title px-2 border-b-2 border-slate-600">图例</div>
			<div class="legend-content px-1">
				<div class="legend-item flex items-center ">
					<img class="legend-item-color w-4 h-4 bg-lime-400" alt="管线1" />
					<div class="legend-item-desc">管线1</div>
				</div>
			</div>
		</div>
		<div ref="popupCom" class="popup">
			<span class="icon-close" @click="closePopup">✖</span>
			<div style="background-color: #fff; padding: 5px; border: 1px solid black; color: #7fcc58;"
				v-for="(value, key) in popupObject">
				<p>{{ key }}:{{ value }}</p>
			</div>
    </div>-->

    <!-- 右下角图例 -->

    <div
      ref="legendRef"
      v-if="global.componentId === 'operation-maintenance'"
      class="legend absolute bg-slate-400 right-[30%] mr-10 bottom-20 z-10"
    >
      <MapLegend @update:checked="legendOnchage" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, toRef, watch, inject } from "vue";
import "ol/ol.css";
import { Map, View } from "ol";
import Overlay from "ol/Overlay";
import { toStringHDMS } from "ol/coordinate";
import { useGlobalStore } from "@/store";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import _ from "lodash";

import MapLegend from "@/components/MapLegend.vue";
// 引入盐城的GeoJSON数据
// import yanchengGeoJson from '@/assets/MapData/yancheng.json'
// import layerConfigUrl from '/config/layer.json?url'
import ImageLayer from "ol/layer/Image";
import TileLayer from "ol/layer/Tile";
import { ImageWMS, WMTS } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import proj4 from "proj4";
import { get as getProjection } from "ol/proj";
import { register } from "ol/proj/proj4";
import Feature from "ol/Feature";
import { GeoJSON, WKT } from "ol/format";

const layers = ref([]);
const gsap = inject("gsap");
const leyerRef = ref(null);
const legendRef = ref(null);
const geoJsonParser = new GeoJSON();
const global = useGlobalStore();
const target = ref(null);
const currentTopTab = toRef(global.componentId);
const currentBottomTab = ref("underground-pipeline");
const currentLayerTab = ref(null);
const loadedLayerGroup = ref([]);

const map = ref(null);
const popupCom = ref(null);
const popupObject = ref({});
const infoOverlay = ref(null);
const legendGroup = ref([]);
const isCesiumMap = ref(false);
const cesiumViewer = ref(null);

const { layerConfig = {} } = window;

const topTabs = ref([
  {
    name: "总览",
    value: "overview"
  },
  {
    name: "基础设施",
    value: "infrastructure"
  },
  {
    name: "项目管理",
    value: "project-management"
  },
  {
    name: "运维管养",
    value: "operation-maintenance"
  },
  {
    name: "运行监测",
    value: "running-monitoring"
  },
  {
    name: "预警处置",
    value: "warning-disposal"
  }
]);

const bottomTabs = ref([
  {
    name: "燃气监管",

    value: "gas-monitoring"
  },
  {
    name: "供水监管",
    value: "water-supply-monitoring"
  },
  {
    name: "雨水监管",
    value: "rain-monitoring"
  },
  {
    name: "污水监管",
    value: "water-pollution-monitoring"
  },
  {
    name: "综合监管",
    value: "comprehensive-monitoring"
  },
  {
    name: "地下管线",
    value: "underground-pipeline"
  },
  {
    name: "道路塌陷",
    value: "road-collapse"
  },
  {
    name: "桥梁监管",
    value: "bridge-monitoring"
  },
  {
    name: "施工破坏",
    value: "construction-damage"
  },
  {
    name: "智慧路灯",
    value: "intelligent-traffic-light"
  }
]);

// icon列表
const iconList = ref([
  {
    name: "图层",
    value: "icon-tuceng"
  },
  {
    name: "删除",
    value: "icon-delete"
  },
  {
    name: "展开",
    value: "icon-zhankai"
  }
]);

const iconctive = ref(iconList.value[0].value);
const onLayerOnchange = val => {
  currentLayerTab.value = val;
};

const currentItem = computed(() =>
  _.get(
    _.find(layers.value, item => item.name === currentLayerTab.value),
    "children",
    []
  )
);
const legendOnchage = val => {
  console.log(val);
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

watch(
  () => global.componentId,
  value => {
    currentTopTab.value = value;
    setDefaultLayers(value);
  }
);
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

// 深拷贝对象
const deepCopy = source => {
  const target = {};
  for (let index in source) {
    target[index] = source[index];
  }
  return target;
};

const createLayer = (config, group = null) => {
  let layer = null;
  if ("WMTS" === config.type) {
    let matrixIds = new Array(config.resolutions.length);
    for (let z = 0; z < matrixIds.length; ++z) {
      matrixIds[z] = z;
    }
    layer = new TileLayer({
      source: new WMTS({
        url: config.url,
        layer: config.layer,
        matrixSet: config.matrixSet,
        style: config.style,
        projection: config.projection,
        format: config.format,
        tileGrid: new WMTSTileGrid({
          origin: config.origin,
          extent: config.extent,
          resolutions: config.resolutions,
          matrixIds: matrixIds
        })
      })
    });
  } else if (config.type.endsWith("WMS")) {
    layer = new ImageLayer({
      source: new ImageWMS({
        url: config.url,
        projection: config.projection,
        params: {
          LAYERS: config.layer,
          FORMAT: config.format ? config.format : "image/png"
        }
      })
    });
  }
  if (null != layer) {
    layer.set("layerName", config.name);
    layer.set("layerGroup", group ? group : currentTopTab.value);
    layer.set("layerType", config.type);
    layer.set("detailLayer", config.detailLayer ? config.detailLayer : "");
    layer.set("legendLayer", config.legendLayer ? config.legendLayer : "");
  }
  return layer;
};

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
  console.log(baseLayerConfig, "baseLayerConfig");
  const baseLayers = baseLayerConfig.map(v =>
    createLayer(getLayerSource(v), "base")
  );

  const p = new Map({
    target: target.value,
    layers: baseLayers,
    controls: [],
    view: new View({
      center: [120.2327, 33.4905],
      zoom: 10,
      maxZoom: 20,
      minZoom: 8,
      projection: layerConfig.systemProjection
    })
  });
  /**
   * 保存地图示例，后续叠加图层需要
   */
  map.value = p;

  // 延迟加载次要图层
  setTimeout(() => {
    setDefaultLayers(currentTopTab.value);
    map.value.addOverlay(infoOverlay.value);
  }, 1000); // 延迟1秒加载
};

const getLayerSource = sourceName => {
  return deepCopy(layerConfig["layerList"].find(v => v["name"] === sourceName));
};

const setDefaultLayers = moduleName => {
  let defaultLayerGroup = ["base", moduleName];
  map.value.getLayers().forEach(v => {
    if (!defaultLayerGroup.includes(v.get("layerGroup"))) {
      map.value.removeLayer(v);
    }
  });
  loadedLayerGroup.value.length = 0;
  if (layerConfig["layerTrees"].hasOwnProperty(moduleName)) {
    layers.value = layerConfig["layerTrees"][moduleName];
    currentLayerTab.value = _.get(layers.value, "0.name", "");
    const defaultLoadLayerList = traverseLayerDefine(layers.value).filter(
      v => v.defaultLoad
    );
    const groupedLayerMap = Object.groupBy(
      defaultLoadLayerList,
      ({ source }) => source
    );
    for (let sourceName in groupedLayerMap) {
      loadedLayerGroup.value = loadedLayerGroup.value.concat(
        groupedLayerMap[sourceName].map(v => v.name)
      );
      const loadLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.layer)
        .map(v => v.layer)
        .join(",");
      const showDetailLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.showDetail)
        .map(v => v.layer)
        .join(",");
      const showLegendLayerStr = groupedLayerMap[sourceName]
        .filter(v => v.showLegend)
        .map(v => v.layer)
        .join(",");
      const layerParam = {
        source: sourceName,
        layer: loadLayerStr,
        detailLayer: showDetailLayerStr,
        legendLayer: showLegendLayerStr
      };
      addLayer(layerParam);
    }
  }
};

const traverseLayerDefine = layerList => {
  let layerDefines = [];
  layerList.forEach(v => {
    if ("layer" === v.type) {
      layerDefines.push(v);
    }
    if (v.children) {
      layerDefines.push(traverseLayerDefine(v.children));
    }
  });
  return layerDefines.flat(Infinity);
};

const updateLayer = layerParam => {
  if ("layer" !== layerParam.type) {
    return;
  }
  if (loadedLayerGroup.value.includes(layerParam.name)) {
    loadedLayerGroup.value = loadedLayerGroup.value.filter(
      layer => layer !== layerParam.name
    );
    const layer = map.value
      .getAllLayers()
      .find(v => layerParam.source === v.get("layerName"));
    if (layer) {
      if (layerParam.layer) {
        const layerArr = layerParam.layer.split(",");
        const newLayerStr = layer
          .getSource()
          .getParams()
          ["LAYERS"].split(",")
          .filter(l => !layerArr.includes(l))
          .join(",");
        if (0 < newLayerStr.length) {
          layer.set(
            "detailLayer",
            layer
              .get("detailLayer")
              .split(",")
              .filter(l => !layerArr.includes(l))
              .join(",")
          );
          layer.set(
            "legendLayer",
            layer
              .get("legendLayer")
              .split(",")
              .filter(l => !layerArr.includes(l))
              .join(",")
          );
          layer.getSource().getParams()["LAYERS"] = newLayerStr;
          layer.getSource().changed();
          return;
        }
      }
      map.value.removeLayer(layer);
    }
  } else {
    loadedLayerGroup.value.push(layerParam.name);
    const layer = map.value
      .getAllLayers()
      .find(v => layerParam.source === v.get("layerName"));
    if (layer) {
      if (layerParam.layer) {
        const layerArr = layerParam.layer.split(",");
        const newLayerStr = layer
          .getSource()
          .getParams()
          ["LAYERS"].split(",")
          .concat(layerArr)
          .join(",");
        if (layerParam.showDetail) {
          layer.set(
            "detailLayer",
            layer
              .get("detailLayer")
              .split(",")
              .concat(layerArr)
              .join(",")
          );
        }
        if (layerParam.showLegend) {
          layer.set(
            "legendLayer",
            layer
              .get("legendLayer")
              .split(",")
              .concat(layerArr)
              .join(",")
          );
        }
        layer.getSource().getParams()["LAYERS"] = newLayerStr;
        layer.getSource().changed();
      }
    } else {
      const initParam = deepCopy(layerParam);
      initParam["detailLayer"] = layerParam.showDetail ? layerParam.layer : "";
      initParam["legendLayer"] = layerParam.showLegend ? layerParam.layer : "";
      addLayer(initParam);
    }
  }
};

const addLayer = layerValue => {
  const layerParam = getLayerSource(layerValue["source"]);
  layerParam["detailLayer"] = layerValue["detailLayer"];
  layerParam["legendLayer"] = layerValue["legendLayer"];
  if (!layerParam["layer"] && layerValue["layer"]) {
    layerParam["layer"] = layerValue["layer"];
  }
  const layer = createLayer(layerParam);
  map.value.addLayer(layer);
  if (layerValue["legendLayer"] && 0 < layerValue["legendLayer"].length) {
    const legendUrl = layer
      .getSource()
      .getLegendUrl(map.value.getView().getResolution(), {
        LAYER: layerValue["legendLayer"]
      });
    if (legendUrl) {
      fetch(legendUrl);
    }
  }
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
          "http://127.0.0.1:8089/data/gx/"+element+"/"+item+"/tileset.json"
        );
        viewer.scene.primitives.add(tileset);
      }
    }
  } catch (error) {
    console.error(`Error creating tileset: ${error}`);
  }
};

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
  .layer-bg {
    background-size: 100% 100%;

    @for $i from 1 through 10 {
      .layer-item-#{$i} {
        background-image: url("@/assets/imgs/main/layer-#{$i}.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .layer-active {
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }

    // .i-img {
    // 	background-image: url('@/assets/imgs/main/base.png');
    // 	background-size: 100% 100%;
    // }
  }

  .layer-shaw {
    // 左上角开始渐变背景，从上到下透明度从0到1，颜色#0a234a, #305fad
    background: linear-gradient(
      to bottom,
      rgba(11, 29, 65, 0.6),
      rgb(7, 32, 50),
      rgba(57, 142, 203, 0.4)
    );
    // 右上角开始渐变背景，从上到下透明度从0到1
    // background: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    // background: linear-gradient(to bottom, #0a234a, #305fad);
    // 背景透明度，从上到下
    // background-color: raba(0, 0, 0, .5);
  }
}

.tool-item {
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.select-active {
  // filter: drop-shadow(2px 4px 6px red);
  color: #00faff;
  background-image: url("@/assets/imgs/main/icon-b-active.png");
  background-size: 100% 100%;
  transform: translateY(-20px);
  // background-position: center center;
  transition: all 0.3s ease-in-out;
  // background-repeat: no-repeat;
}

.select-item {
  color: #00faff;
}

.t-item-line {
  background-image: url("@/assets/imgs/main/t-tabs-active.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.info-overlay {
  background-color: rgb(18, 2, 2);
  border: 1px solid black;
  padding: 5px;
  color: #7fcc58;
}

.popup {
  width: 300px;
  height: 100px;
  background: #fff;
  position: absolute;
  top: -115px;
  left: -150px;
  box-sizing: border-box;
  padding: 10px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }

  .icon-close {
    position: absolute;
    top: 0px;
    right: 8px;
    cursor: pointer;
  }

  .content {
    margin-top: 14px;
  }
}
</style>
