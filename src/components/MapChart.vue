<template>
	<div class="map relative">
		<div ref="target" class="w-full h-full"></div>
		<!-- 专题栏 -->
		<div class="top-tabs w-full flex items-center justify-center absolute top-0  z-10 ">
			<div :class="` t-item hover:cursor-pointer px-2 m-1  ${currentTopTab === tab.value ? 'bg-lime-400' : ''}`"
				v-for="tab in topTabs" :key="tab.value" @click="topTabChange(tab.value)">{{ tab.name }}</div>
		</div>
		<!-- 导航栏 -->
		<div class="bottom-tabs w-full flex items-center justify-center absolute bottom-0  z-10 ">
			<div :style="`transform: translateY(-${computerLayout(bottomTabs.length, index)}px)`"
				:class="`flex flex-col items-center hover:cursor-pointer t-item-${index + 1} ${currentBottomTab === tab.value ? 'text-amber-300' : ''}  px-2 m-1`"
				v-for="(tab, index) in bottomTabs" :key="tab.value" @click="currentBottomTab = tab.value">
				<div class="icon w-10 h-10 bg-[url('assets/imgs/icon-b.png')] bg-cover bg-slate-400"></div>
				<div class="t-item-name">{{ tab.name }}</div>
			</div>
		</div>
		<!-- 图层栏 -->
		<!-- <button class=" absolute top-5" @click="toggleMap">切换地图</button> -->

		<div class="layer-tabs flex absolute top-1/2 z-10">
			<ul>
				<li v-for="(tab, index) in layerTabs" :key="tab.value"
					:style="`transform: translateX(${computerLayout(layerTabs.length, index)}px)`"
					:class="`layer-tab bg-zinc-700 ml-2 px-4 relative hover:cursor-pointer`"
					@click="currentLayerTab = tab.value">
					<div :class="`layer-tab-name mt-4 ${currentLayerTab === tab.value ? 'bg-lime-400' : ''}`"> {{
						tab.name }}
					</div>
					<div class="layer-tab-detail absolute left-14 w-0 opacity-0 hover:w-20 bg-slate-600"
						v-if="tab.detail && currentLayerTab === tab.value">
						<div class="layer-tab-title">{{ tab.detail.title }}</div>
						<div class="layer-tab-content">
							<div v-for="(item, index) in tab.detail.content" :key="index" class="layer-tab-item">
								<div class="layer-tab-item-name">{{ item.name }}</div>
							</div>
						</div>
					</div>

				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { fromLonLat } from 'ol/proj'
import GeoJSON from 'ol/format/GeoJSON'
import { boundingExtent, getCenter } from 'ol/extent'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Text from 'ol/style/Text'
import Overlay from 'ol/Overlay'
import { useGlobalStore } from "@/store";
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import _ from 'lodash'

// 颜色列表
const colors = [
	'#319FD3',
	'#FFC0CB',
	'#FFA500',
	'#FFD700',
	'#808080',
	'#008080',
	'#00FFFF',
	'#000080',
	'#800080',
	'#FF00FF'
]

// 引入盐城的GeoJSON数据
import yanchengGeoJson from '@/assets/MapData/yancheng.json'
const global = useGlobalStore()
const target = ref(null)
const currentTopTab = ref('overview')
const currentBottomTab = ref('overview')
const currentLayerTab = ref('pipeline')
const map = ref(null);
const isCesiumMap = ref(false);
const cesiumViewer = ref(null);
const emits = defineEmits(['changeComponent'])

const topTabs = ref([
	{
		name: '总览',
		value: 'overview'
	},
	{
		name: '基础设施',
		value: 'infrastructure'
	},
	{
		name: '项目管理',
		value: 'project-management'
	},
	{
		name: '运维管养',
		value: 'operation-maintenance'
	},
	{
		name: '运行监测',
		value: 'running-monitoring'
	},
	{
		name: '预警处置',
		value: 'warning-disposal'
	}
])

const bottomTabs = ref([
	{
		name: '燃气监管',

		value: 'gas-monitoring'
	},
	{
		name: '供水监管',
		value: 'water-supply-monitoring'
	},
	{
		name: '雨水监管',
		value: 'rain-monitoring'
	},
	{
		name: '污水监管',
		value: 'water-pollution-monitoring'
	},
	{
		name: '综合监管',
		value: 'comprehensive-monitoring'
	},
	{
		name: '地下管线',
		value: 'underground-pipeline'
	},
	{
		name: '道路塌陷',
		value: 'road-collapse'
	},
	{
		name: '桥梁监管',
		value: 'bridge-monitoring'
	},
	{
		name: '施工破坏',
		value: 'construction-damage'
	},
	{
		name: '智慧路灯',
		value: 'intelligent-traffic-light'
	}
])
const layerTabs = ref([
	{
		name: '管线',
		value: 'pipeline',
		detail: {
			title: '管线1',
			content: '管线1的详细信息'
		}
	},
	{
		name: '设施',
		value: 'facility'
	},
	{
		name: '设备',
		value: 'devicek'
	},
	{
		name: '预警',
		value: 'warning'
	},
	{
		name: '风险',
		value: 'risk',
		detail: {
			title: '燃气风险',
			content: [
				{
					name: '当前隐患',
					value: 'now'
				},

				{
					name: '历史隐患',
					value: 'history'
				},
				{
					name: '预计隐患',
					value: 'forecast'
				}
			]
		}
	},
	{
		name: '巡养',
		value: 'patrol'
	},
	{
		name: '隐患',
		value: 'hazard'
	},
	{
		name: '辅助',
		value: 'assistance'
	}
])

const topTabChange = (value) => {
	global.setMapCurrentTab(value)
	emits('changeComponent', value)
	currentTopTab.value = value
}

const computerLayout = (size, index) => {
	const initStyle10 = 10
	let styles = []
	for (let key = 0; key <= size; key++) {
		styles.push(initStyle10 * key)
	}
	const newStyles = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
	const newStyles1 = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
	const arr = [..._.reverse(newStyles), ...newStyles1]
	const nextstyles = [...newStyles1, ...(size % 2 === 0 ? _.reverse(newStyles1) : _.tail(_.reverse(newStyles1)))]
	return size === 10 ? nextstyles[index] : arr[index]
}

const initOpenLayersMap = () => {
	// 创建一个VectorSource并加载GeoJSON数据
	const vectorSource = new VectorSource({
		features: new GeoJSON().readFeatures(yanchengGeoJson, {
			featureProjection: 'EPSG:3857' // 将GeoJSON数据投影到Web Mercator
		})
	})


	// 应用样式并为每个要素设置文本
	vectorSource.getFeatures().forEach((feature, index) => {
		const name = feature.get('name') // 假设GeoJSON中有一个字段叫'name'，包含板块名称
		feature.setStyle(
			new Style({
				fill: new Fill({
					color: colors[index]
				}),
				stroke: new Stroke({
					color: '#319FD3',
					width: 2
				}),
				text: new Text({
					text: name,
					font: '12px Calibri,sans-serif',
					fill: new Fill({
						color: '#000'
					}),
					stroke: new Stroke({
						color: '#fff',
						width: 3
					})
				})
			})
		)
	})

	// 创建一个VectorLayer并将VectorSource添加到该图层
	const vectorLayer = new VectorLayer({
		source: vectorSource,
		style: {}
	})

	const extent = boundingExtent(
		vectorSource.getFeatures().map((feature) => feature.getGeometry().getExtent())
	);
	const center = getCenter(extent);

	//工具配置
	map.value = new Map({
		target: target.value,
		layers: [vectorLayer],
		controls: [],
		view: new View({
			center: center,
			zoom: 14,
			maxZoom: 18,
			minZoom: 8,
		}),
	});

	map.value.getView().fit(extent, { size: map.value.getSize(), maxZoom: 14 });
};

const initCesiumMap = async () => {
	Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MmMwNmM1My03NzI4LTQ0NDUtOTBiYy1hM2I2ZmUxZDNmOWUiLCJpZCI6MjI4NzQzLCJpYXQiOjE3MjExMzU1OTZ9.bZrwv5u7g418lGuDhTuRqkrWJDHAFWGGd1TiTbsM9dU';

	cesiumViewer.value = new Cesium.Viewer(target.value, {
		terrainProvider: await Cesium.createWorldTerrainAsync(),
	});

	cesiumViewer.value.scene.globe.depthTestAgainstTerrain = true;
};

onMounted(() => {
	initOpenLayersMap()
})
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

.info-content {
	padding: 10px;
	background-color: #fff;
}

.top-tabs {
	left: 50%;
	transform: translateX(-50%);
}

.bottom-tabs {
	left: 50%;
	transform: translateX(-50%);
}

.layer-tabs {
	top: 50%;
	transform: translateY(-50%);
}
</style>
