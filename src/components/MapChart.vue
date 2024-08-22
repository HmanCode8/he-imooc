<template>
  <div class="map relative">
    <div ref="target" class="w-full h-[99.9999%]" id="sceneGISContainer">
      <div id="infobox" class="bubble"></div>
    </div>
    <div class="absolute top-40 right-1/3 bg-[url('assets/imgs/main/layercontrol.png')] w-80 h-80 bg-size "
      v-show="threedlayercontrol">
      <div
        class="h-14 w-full px-2 border-b-2 border-b-slate-500 flex flex-row justify-between items-center text-2xl font-[YouSheBiaoTiHei]">
        图层目录
      </div>
      <div class="w-full max-h-60 mt-4 overflow-auto">
        <el-tree ref="threedtree" :data="threeDData" :props="defaultProps" show-checkbox @node-click="handleNodeClick"
          @check-change="handleCheckChange" node-key="id" default-expand-all
          :default-checked-keys="defaultCheckedKeys"></el-tree>
      </div>
    </div>
    <!-- 专题栏 -->
    <div class="top-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] top-0">
      <div
        class="tabs-container bg-[url('assets/imgs/main/t-tabs.png')] w-1/4 h-20 bg-size flex justify-around px-10 mt-4 z-10">
        <div
          :class="`t-item hover:cursor-pointer flex items-center h-full relative ${global.componentId === tab.value ? 'text-[#75fbfd] ' : ''}`"
          v-for="tab in topTabs" :key="tab.value" @click="global.setMapCurrentTab(tab.value)">
          <div class="font-[pengmenzhengdao]">{{ tab.name }}</div>
          <div v-if="global.componentId === tab.value"
            class="bg-[url('assets/imgs/main/t-tabs-active.png')] bg-size absolute left-1/2 translate-x-[-50%] top-12 w-12 h-4">
          </div>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="bottom-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] bottom-0 z-10">
      <div class="flex h-full bg-[url('assets/imgs/main/b-tabs.png')] bg-size">
        <div
          :class="`flex flex-col hover:cursor-pointer items-center px-2 ${currentBottomTab === tab.value ? ' translate-y-[-20px] duration-150' : ''}`"
          @click="currentBottomTab = tab.value" v-for=" (tab, index) in bottomTabs" :key="tab.value">
          <div :class="`${currentBottomTab === tab.value ? 'select-active' : ''} px-2`">
            <div :class="`blink-${index + 1} w-14  h-10 bg-size`"></div>
          </div>
          <div :class="`font-bold ${currentBottomTab === tab.value ? 'text-[#00faff]' : ''}`">
            {{ tab.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- 图层树-->
    <div class="layer-tabs w-60 h-[80%] flex absolute left-[30%] top-1/2 translate-y-[-50%] z-10"
      v-show="'scene' !== mapType">
      <div class="h-full w-20 bg-size bg-[url('assets/imgs/main/layer-tabs.png')] z-20">
        <div class="img-list flex flex-col items-center h-[80%]">
          <div :class="`layer-item-${layer.remark} bg-size w-2/3 h-[9%] relative hover:cursor-pointer`"
            @click="currentLayerTab = layer.remark" v-for="(layer, index) in layers " :key="layer.name">
            <div v-if="currentLayerTab === layer.remark"
              class="w-full h-full absolute top-0 left-0 bg-[url('assets/imgs/main/layer-active.png')] bg-size">
            </div>
          </div>
        </div>
        <div class="h-[20%] flex flex-col justify-around items-center">
          <div class=" hover:cursor-pointer" v-for="i in iconList" :key="i.name" @click="changeActiveIcon(i.name)">
            <i
              :class="`iconfont ${i.value} ${'图层' === i.name && showSubLayerTab ? 'text-[#00BAFF]' : ''} font-bold text-xl`"></i>
          </div>
        </div>
      </div>

      <div class="layer-shaw p-3 w-32 h-full bottom-0" v-show="'scene' !== mapType && showSubLayerTab">
        <div ref="leyerRef">
          <div v-for="sub in currentItem" :key="sub.name" class="mb-4">
            <div
              class="bg-[url('assets/imgs/main/layer-child.png')] w-full px-2 mb-4 py-1 flex items-center h-6 bg-size font-bold">
              {{ sub.name }}
            </div>
            <div v-if="sub.children && 0 < sub.children.length" class="ml-4">
              <div v-for="item in sub.children" :key="item.remark" class="pl-2">
                <div :class="`hover:cursor-pointer ${loadedLayerGroup.includes(item.remark) ? 'text-[#00faff]' : ''}`"
                  @click="updateLayer(item)">{{ item.name }}
                </div>
              </div>
            </div>
            <div v-else>---</div>
          </div>
        </div>

      </div>
    </div>

    <!-- 地图弹出框 -->
    <div ref="popupCom">
      <warningLevelModal v-if="layerConfig.staticPopLayers.includes(popupObject.remark)"
        @update:closePop="closePop(map)" />
      <MapPopup v-else :popupObject="popupObject" @update:closePop="closePop(map)" />
    </div>

    <!-- 图例 -->
    <div v-show="'scene' !== mapType && 0 < legendGroup.length"
      class="absolute right-[28.5%] 4k:bottom-[16%] 8k:bottom-44">
      <MapLegend :legendGroup="legendGroup" />
    </div>

    <!-- 地图切换 -->
    <div class="absolute right-[28.5%] 4k:bottom-[10%] 8k:bottom-20">
      <MapToggle v-model="mapType" class="" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import { useGlobalStore } from "@/store";
import _ from "lodash";

import MapLegend from "@/components/MapLegend.vue";
import MapToggle from "@/components/MapToggle.vue";
import MapPopup from "@/components/MapPopup.vue";
import warningLevelModal from '@/components/common/Modal.vue'
import proj4 from "proj4";
import { register } from "ol/proj/proj4";

import { topTabs, bottomTabs, iconList } from '@/assets/chartData/const'
import { gxTypes, ShaderCode } from "@/utils/map3d/const";
import { createLayer, getLegend, traverseLayerDefine } from "@/utils/map/layer";
import { closePop, createDefaultPopup, getPopInfo, popElement } from "@/utils/map/popup";

const { layerConfig = {}, map3dServer } = window;
const layers = ref([])
const gsap = inject('gsap')
const leyerRef = ref(null)
const global = useGlobalStore()
const target = ref(null)
const threedtree = ref(null);
const currentBottomTab = ref('comprehensive-monitoring')
const currentLayerTab = ref('ranqi');
const currentLayerGroup = ref([]);
const loadedLayerGroup = ref([]);
const mapType = ref('vector')
const map = ref(null);
const showSubLayerTab = ref(true);
const popupCom = ref(null);
const popupObject = ref({});
const legendGroup = ref([]);
const cesiumViewer = ref(null);
const iconActive = ref(iconList[0].name);
const threedlayercontrol = ref(false);
const defaultCheckedKeys = ref([1, 2]); // 默认(选中)展开的3D图层
let viewer = ref(null);

const currentItem = computed(() =>
  _.get(
    _.find(layers.value, item => item.remark === currentLayerTab.value),
    "children",
    []
  )
);

const changeActiveIcon = iconName => {
  iconActive.value = iconName;
  switch (iconName) {
    case "图层":
      showSubLayerTab.value = !showSubLayerTab.value;
      break;
    case "清除":
      removeAllLayerExcept();
      break;
    case "展开":
      showSubLayerTab.value = true;
      break;
  }
};

const initOpenLayersMap = () => {
  const { customProjections = '' } = layerConfig
  const key = Object.keys(customProjections)[0];
  const value = Object.values(customProjections)[0];
  proj4.defs([[key, value]]);
  register(proj4);

  const baseLayerConfig = layerConfig["baseLayer"][mapType.value];
  const baseLayers = baseLayerConfig.map(v =>
    createLayer(getLayerSource(v), "base")
  );

  const infoOverlay = createDefaultPopup(popupCom.value, '');

  const p = new Map({
    target: target.value,
    layers: baseLayers,
    controls: [],
    overlays: [infoOverlay],
    view: new View({
      center: [120.15648234, 33.35160457],
      zoom: 13,
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
  setDefaultLayers(global.componentId);
};

const getLayerSource = sourceName => {
  return _.cloneDeep(layerConfig["layerList"].find(v => v["name"] === sourceName));
}

const setDefaultLayers = moduleName => {
  if ("vector" !== mapType.value) {
    mapType.value = "vector";
  }
  if (layerConfig["layerTrees"].hasOwnProperty(moduleName)) {
    layers.value = layerConfig["layerTrees"][moduleName];
    currentLayerGroup.value = traverseLayerDefine(layers.value);
    loadDefaultLayers(moduleName, ["base", moduleName]);
  }
};

const loadDefaultLayers = async (configName, stayLayerGroup = ["base"]) => {
  const defaultLoadLayerArr = _.get(layerConfig.defaultLayers, configName, []);
  if (0 === defaultLoadLayerArr.length) {
    return;
  }
  closePop(map.value);
  if (0 < stayLayerGroup.length) {
    removeAllLayerExcept(stayLayerGroup)
  }
  if (0 < defaultLoadLayerArr.length) {
    const firstDefaultLayer = defaultLoadLayerArr[0];
    const defaultLoadLayerList = defaultLoadLayerArr.map(v => _.find(currentLayerGroup.value, it => it.remark === v));
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
      await addLayer(layerParam);
    }
  } else {
    currentLayerTab.value = _.get(layers.value, "0.name", "");
  }
};

const updateLayer = async layerParam => {
  const isHaveChecked = _.includes(loadedLayerGroup.value, layerParam.remark)
  if (!isHaveChecked) {
    loadedLayerGroup.value.push(layerParam.remark);
  } else {
    loadedLayerGroup.value = loadedLayerGroup.value.filter(v => v !== layerParam.remark);
  }
  if ("layer" !== layerParam.type) {
    return;
  }
  const loadLayerArr = _.get(layerParam, "layer", "").split(",");
  const detailLayerArr = _.get(layerParam, "detailLayer", "").split(",");
  const legendLayerArr = _.get(layerParam, "legendLayer", "").split(",");
  if (isHaveChecked) {
    closePop(map.value);
    const layer = map.value
      .getAllLayers()
      .find(v => layerParam.source === v.get("layerName"));
    if (layer && layerParam.layer) {
      _.remove(legendGroup.value, v => v.source === layerParam.source && legendLayerArr.includes(v.layerId));
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
  } else {
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
        const newLegend = await getLegend(map.value, layer, layerParam["legendLayer"]);
        legendGroup.value = _.union(newLegend, legendGroup.value);
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
  if (map.value && layerValue["legendLayer"] && 0 < layerValue["legendLayer"].length) {
    const newLegend = await getLegend(map.value, layer, layerValue["legendLayer"]);
    legendGroup.value = _.union(newLegend, legendGroup.value);
  }
}

const removeAllLayerExcept = (stayLayerGroup = ["base"]) => {
  map.value && map.value.getAllLayers().forEach(v => {
    if (!stayLayerGroup.includes(v.get("layerGroup"))) {
      map.value.removeLayer(v);
    }
  });
  legendGroup.value = [];
  loadedLayerGroup.value = [];
}

const queryPopupDetail = async evt => {
  const popInfo = await getPopInfo(evt, currentLayerGroup.value, layerConfig.getEnglishKey, layerConfig.popupSearchPixel);
  if (0 < Object.keys(popInfo).length) {
    popupObject.value = popInfo;
    popElement(evt);
  } else {
    closePop(evt.map);
  }
};

let layers_3d = [];

const addGX = (viewer) => {
  //加载管线
  const comps = [
    "pipelineGeo",
    "pipelineI3dm",
    "pipelineJG",
    "pipelinePointInstance",
    "pipelineWellGeo"
  ];
  try {
    const { children } = threeDData.value[0]
    for (let i = 0; i < children.length; i++) {
      for (let j = 0; j < comps.length; j++) {
        const item = comps[j];
        const tileset = viewer.scene.primitives.add(new SceneGIS.SceneGIS3DTileset({
          url: `${map3dServer}/3dtile_gx/${children[i].key}/${item}/tileset.json`,
        }));
        layers_3d.push({
          name: children[i].label + '-' + item,
          obj: tileset
        });
      }
    }
  } catch (error) {
    console.error(`Error creating tileset: ${error}`);
  } finally {
    threedlayercontrol.value = true;
  }
};

let qxtileset = null;
const addOsgb = (viewer) => {
  //加载倾斜
  qxtileset = viewer.scene.primitives.add(new SceneGIS.SceneGIS3DTileset({
    url: `${map3dServer}/3dtile_op/tileset.json`
  }));
};

const setHSV = (viewer, h, s, v) => {
  //颜色饱和度
  let Hscale = h;
  let Sscale = s;
  let Vscale = v;

  let postProcessStage = new SceneGIS.PostProcessStage({
    fragmentShader: ShaderCode,
    uniforms: {
      Hscale() {
        return Hscale;
      },
      Sscale() {
        return Sscale;
      },
      Vscale() {
        return Vscale;
      }
    }
  });
  let postProcessStageComposite = new SceneGIS.PostProcessStageComposite({
    stages: [postProcessStage]
  });
  viewer.scene.postProcessStages.add(postProcessStageComposite);
};

//创建信息框
let element = null;
const createBubble = (viewer, clickPosition, infoboxContainer, properties) => {
  if (element != null) {
    infoboxContainer.style.display = "none";
    infoboxContainer.removeChild(element);
    element = null;
  }
  //弹窗
  infoboxContainer.style.display = "block";

  element = document.createElement("div");

  let str = "";
  let obj = {};
  for (let key in properties) {
    if (Object.prototype.toString.call(properties[key]) === '[object Object]') {
      let newObj = properties[key];
      for (let key1 in newObj) {
        obj[key1] = newObj[key1];
      }
    } else {
      obj[key] = properties[key];
    }

  }

  for (let key in obj) {
    str += '<tr><td>' + key + '</td><td>' + obj[key].toString() + '</td></tr>'
  }


  element.innerHTML = `
      <div class="test"">
        <div class="thstyle">
          <div class="textStyle">属性值</div>
          <div class="closeStyle" id="closeInfoBox">X</div>
        </div>
        <div>
        <table class="tableStyle">`+ str + `
          </table>
        </div>

      </div>`;

  //弹窗随屏幕移动而移动
  infoboxContainer.appendChild(element);

  let btn = document.getElementById("closeInfoBox");
  btn.onclick = function () {
    if (element != null) {
      infoboxContainer.style.display = "none";
      infoboxContainer.removeChild(element);
      element = null;
      silhouetteGreen.selected = [];
      checkedPostProcessStage = null;
      //如果想让点击事件失效
      // self.handler.destroy();
      // self.handler = null;
    }
  };

  viewer.scene.postRender.addEventListener(function () {
    // 每一帧都去计算气泡的正确位置
    if (clickPosition) {
      let canvasHeight = viewer.scene.canvas.height;
      let windowPosition = new SceneGIS.Cartesian2();
      SceneGIS.SceneTransforms.wgs84ToWindowCoordinates(
        viewer.scene,
        clickPosition,
        windowPosition
      );
      infoboxContainer.style.bottom =
        canvasHeight - windowPosition.y - 950 + "px";
      infoboxContainer.style.left = windowPosition.x + "px";
      infoboxContainer.style.visibility = "visible";
    }
  });
};

// 当前选中的变量初始信息
const selected = {
  feature: undefined,
  originalColor: new SceneGIS.Color(),
};
let silhouetteGreen = null;
let checkedPostProcessStage = null;
const setInfoBox = (viewer) => {

  //判断是否支持描边，如果支持就使用描边选中，如果不支持就将选中的要素标色
  // if (SceneGIS.PostProcessStageLibrary.isSilhouetteSupported(viewer.scene)) {
  //绿色描边的边缘检测
  // silhouetteGreen = SceneGIS.PostProcessStageLibrary.createEdgeDetectionStage();
  // silhouetteGreen.uniforms.color = SceneGIS.Color.LIME;
  // silhouetteGreen.uniforms.length = 0.01;
  // silhouetteGreen.selected = [];

  // checkedPostProcessStage = SceneGIS.PostProcessStageLibrary.createSilhouetteStage([
  //     silhouetteGreen,
  //   ])

  // //将两种边缘检测的后置渲染组合到描边的后置渲染
  // viewer.scene.postProcessStages.add(
  //   checkedPostProcessStage
  // );

  let handler = new SceneGIS.ScreenSpaceEventHandler(
    viewer.scene.canvas
  );

  handler.setInputAction(function (event) {
    //用来拾取三维空间中的物体
    let pickedFeature = viewer.scene.pick(event.position);

    // 检查是否点击到 3D Tileset
    if (pickedFeature instanceof SceneGIS.SceneGIS3DTileFeature) {
      // 高亮绿色选中的要素
      // silhouetteGreen.selected = [];
      // silhouetteGreen.selected = [pickedFeature];
      // 获取属性
      const properties = pickedFeature.getPropertyNames().reduce((obj, property) => {
        obj[property] = pickedFeature.getProperty(property);
        return obj;
      }, {});
      let position = viewer.scene.pickPosition(event.position);
      let infoboxContainer = document.getElementById("infobox");
      createBubble(viewer, position, infoboxContainer, properties);
    }
  }, SceneGIS.ScreenSpaceEventType.LEFT_CLICK);
  // }
};

const initCesiumMap = async () => {
  return new Promise((resolve, reject) => {
    cesiumViewer.value = new SceneGISEX.SceneEX("sceneGISContainer").viewer;
    viewer = cesiumViewer.value;

    //视角初始化
    viewer.camera.setView({
      destination: SceneGIS.Cartesian3.fromDegrees(
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

    //TAA抗锯齿
    viewer.scene.postProcessStages.taa.enabled = true;
    viewer.scene._taaProcessStage._brightDiff = 20;
    viewer.scene._taaProcessStage._depthDiff = 20;
    viewer.scene._taaProcessStage.disableCameraStatic = true;
    resolve(viewer);
  })
};

const gxKeys = Object.keys(gxTypes)

const threeDData = ref([
  {
    id: 1,
    label: '管线',
    children: _.map(gxKeys, k => {
      return {
        id: k + 2,
        key: k,
        label: gxTypes[k]
      }
    }),
  },
  {
    id: 2,
    label: '倾斜模型',
  }
]);

const defaultProps = {
  children: 'children',
  label: 'label',
}

const handleCheckChange = (data, checked, indeterminate) => {
  let { label = '' } = JSON.parse(JSON.stringify(data));
  if (label === "倾斜模型") {
    qxtileset.show = checked;
  } else {
    layers_3d.forEach(item => {
      if (label.indexOf(item.name.split('-')[0]) > -1) {
        item.obj.show = checked;
      }
    })
  }
};

const handleNodeClick = (data, { checked }) => {
  let { label = '' } = JSON.parse(JSON.stringify(data));
  if (label === "倾斜模型") {
    viewer.flyTo(qxtileset);
  } else {
    for (let i = 0; i < layers_3d.length; i++) {
      const element = layers_3d[i];
      if (element.name.indexOf(label) > -1) {
        viewer.flyTo(element.obj);
        break;
      }
    }
  }
};

const initLayerTree = (key) => {
  layers.value = layerConfig["layerTrees"][key];
  currentLayerTab.value = _.get(layers.value, "0.name", "");
}

const change2dBaseMap = mapType => {
  try {
    const baseLayerArr = _.get(layerConfig, `baseLayer.${mapType}`, []);
    const baseLayers = baseLayerArr.map(v => createLayer(getLayerSource(v), "base"));
    const existingBaseLayers = map.value.getAllLayers().filter(v => "base" === v.get("layerGroup"));

    if (existingBaseLayers.length !== baseLayerArr.length || !existingBaseLayers.every(layer => baseLayerArr.includes(layer.get("layerName")))) {
      existingBaseLayers.forEach(v => map.value.removeLayer(v));
      const layerCollection = map.value.getLayers();
      baseLayers.forEach((layer, index) => layerCollection.insertAt(index, layer));
    }
  } catch (error) {
    console.error("Error changing 2D base map:", error);
  }
}

watch(mapType, async (val) => {
  try {
    if (mapType.value !== "scene") {
      cesiumViewer.value?.destroy();
      cesiumViewer.value = null;
      if (map.value) {
        map.value.setTarget(target.value);
        change2dBaseMap(val);
      } else {
        initOpenLayersMap();
      }
      threedlayercontrol.value = false;
    } else {
      if (map.value) {
        closePop(map.value);
        map.value.setTarget(null);
      }
      const viewer = await initCesiumMap();

      addOsgb(viewer);
      addGX(viewer);
      setHSV(viewer, 1, 1, 1.2);
      setInfoBox(viewer);
    }
  } catch (error) {
    console.error("Error in mapType watcher:", error);
  }
});

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
    initLayerTree(value)
    map.value && setDefaultLayers(value);
  }, {
  immediate: true
}
);
watch(
  () => global.moduleName,
  value => {
    if (map.value && global.moduleName && 0 < global.moduleName.length) {
      loadDefaultLayers(global.componentId + "-" + value);
    }
  }
);

onMounted(() => {
  initOpenLayersMap();
});
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

$layers: jichu, gongshui, daolu, ludeng, qiaoliang, wushui, yushui, zonghe, xiangmu, ranqi, jiance;

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
        rgba(11, 29, 65, 0.6) 40%,
        rgba(48, 95, 173, 0.6) 60%,
        rgba(48, 95, 173, 0.6) 80%,
        rgba(11, 29, 65, 0.6) 100%),
      transparent;
  }
}

.subLayerTab-enter-active {
  transition: all 0.8s ease-in;
}

.subLayerTab-leave-active {
  transition: all 0.8s ease-in;
}

.subLayerTab-enter-from,
.subLayerTab-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.select-active {
  // filter: drop-shadow(2px 4px 6px red);
  // color: #00faff;
  background-image: url("@/assets/imgs/main/icon-b-active.webp");
  background-size: 100% 100%;
  // transform: translateY(-20px);
  transition: all 0.3s ease-in-out;
}

.bubble {
  text-align: center;
  z-index: 999;
  position: fixed;
  margin: 0;
  background-image: url("@/assets/imgs/main/map-popup-bg.png");
  background-size: 100% 100%;
  display: none;
}


.test {
  width: 29em;
  height: 27em;
  caret-color: transparent; //设置闪烁的光标消失
  color: #ffffff;

  .thstyle {
    margin: 4em 0 0 3em;
    padding: 10em 10em 0 10em;
    display: flex;
    // justify-content: space-between;

    .textStyle {
      font-size: 24px;
    }

    .closeStyle {
      margin: 0 0 0 12em;
      font-size: 24px;
      cursor: pointer;
    }
  }

  .tableStyle {
    width: 28em;
    height: 26em;
    margin: 0 0 0 2.5em;
    font-size: 14px;

    td {
      border: 1px solid #3cc2b7;
    }
  }
}

.el-tree {
  background: rgba(11, 29, 65, 0.0);
  --el-tree-node-hover-bg-color: #2166cd;
  color: #ffffff;
}

:deep(.el-tree-node__label) {
  font-size: 20px;
}
</style>
