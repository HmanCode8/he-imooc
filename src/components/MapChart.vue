<template>
	<div class="map relative">
		<div ref="target" class="w-full h-full"></div>
		<!-- 专题栏 -->
		<div
			class="top-tabs  w-full flex  items-center justify-center absolute left-1/2 translate-x-[-50%] top-0  z-10 ">
			<div class="tabs-container bg-[url('assets/imgs/to-tabs-bg.png')]  bg-cover flex justify-between p-2  mt-4">
				<div :class="`t-item hover:cursor-pointer m-2 font-bold  ${currentTopTab === tab.value ? 'text-[#75fbfd]' : ''}`"
					v-for="tab in topTabs" :key="tab.value" @click="topTabChange(tab.value)">{{ tab.name }}</div>
				<!-- <el-segmented v-model="currentTopTab" :options="topTabs">
					<template #default="{ item }">
						<div class="">
							<el-icon size="20">
								<component :is="item.icon" />
							</el-icon>
							<div class="">{{ item.name }}</div>
						</div>
					</template>
</el-segmented> -->

			</div>


		</div>
		<!-- 导航栏 -->
		<!-- :style="`transform: translateY(-${computerLayout(bottomTabs.length, index)}px)`" -->
		<div
			class="bottom-tabs w-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] bottom-0  z-10 ">
			<div :class="`flex flex-col items-center hover:cursor-pointer t-item-${index + 1} ${currentBottomTab === tab.value ? 'select-active' : ''}  px-2 m-1`"
				v-for="(tab, index) in bottomTabs" :key="tab.value" @click="currentBottomTab = tab.value">
				<div :class="`blink w-10 h-10 bg-[url('assets/imgs/icon-b-2.svg')] bg-cover`">
				</div>
				<div class="t-item-name">{{ tab.name }}</div>
			</div>
		</div>
		<!-- 图层栏 -->
		<!-- <button class=" absolute top-5" @click="toggleMap">切换地图</button> -->
		<!-- :style="`transform: translateX(${computerLayout(layerTabs.length, index, 10)}px)`" -->

		<div class="layer-tabs bg-[#215291] flex absolute left-[30%] top-1/2 translate-y-[-50%] z-10">
			<ul class="w-16 flex flex-col items-center justify-center">
				<li v-for="(tab, index) in layerTabs" :key="tab.value"
					:class="`layer-tab w-full text-center relative hover:cursor-pointer`"
					@click="currentLayerTab = tab.value">
					<div :class="`layer-tab-name py-2 ${currentLayerTab === tab.value ? 'border-b' : ''}`"> {{
						tab.name }}
					</div>
					<div class="layer-tab-detail absolute left-20 w-20 bg-orange-800"
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

		<!-- 右下角图例 -->

		<div class="legend absolute bg-slate-400 right-[30%] mr-10 bottom-20 z-10">
			<div class="legend-title px-2 border-b-2 border-slate-600">图例</div>
			<div class="legend-content px-1">
				<div class="legend-item flex items-center ">
					<div class="legend-item-color w-4 h-4 bg-lime-400"></div>
					<div class="legend-item-name">管线</div>
					<div class="legend-item-desc">管线1</div>
				</div>
				<div class="legend-item flex items-center ">
					<div class="legend-item-color w-4 h-4 bg-lime-400"></div>
					<div class="legend-item-name">设施</div>
					<div class="legend-item-desc">设施1</div>
				</div>
				<div class="legend-item flex items-center">
					<div class="legend-item-color w-4 h-4 bg-lime-400"></div>
					<div class="legend-item-name">设备</div>
					<div class="legend-item-desc">设备1</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { fromLonLat, toLonLat } from 'ol/proj'
import GeoJSON from 'ol/format/GeoJSON'
import { boundingExtent, getCenter } from 'ol/extent'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Text from 'ol/style/Text'
import Overlay from 'ol/Overlay'
import { toStringHDMS } from 'ol/coordinate'
import { useGlobalStore } from "@/store";
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import _ from 'lodash'


// 引入盐城的GeoJSON数据
// import yanchengGeoJson from '@/assets/MapData/yancheng.json'
import TileLayer from "ol/layer/Tile";
import { WMTS } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import proj4 from "proj4";
import { get as getProjection } from 'ol/proj';
import { register } from "ol/proj/proj4";
const global = useGlobalStore()
const target = ref(null)
const currentTopTab = ref('overview')
const currentBottomTab = ref('underground-pipeline')
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

const computerLayout = (size, index, initStyle = 10) => {
	let styles = []
	for (let key = 0; key <= size; key++) {
		styles.push(initStyle * key)
	}
	const newStyles = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
	const newStyles1 = _.difference(styles, _.takeRight(styles, Math.ceil(_.size(styles) / 2)))
	const arr = [..._.reverse(newStyles), ...newStyles1]
	const nextstyles = [...newStyles1, ...(size % 2 === 0 ? _.reverse(newStyles1) : _.tail(_.reverse(newStyles1)))]
	return size === 10 ? nextstyles[index] : arr[index]
}

const openDB = () => {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('TileCacheDB', 1);

		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			if (!db.objectStoreNames.contains('tiles')) {
				db.createObjectStore('tiles', { keyPath: 'url' });
			}
		};

		request.onsuccess = (event) => {
			resolve(event.target.result);
		};

		request.onerror = (event) => {
			reject('Error opening IndexedDB: ', event.target.errorCode);
		};
	});
};

const loadTile = (url, tile, db) => {
	const transaction = db.transaction(['tiles'], 'readonly');
	const store = transaction.objectStore('tiles');
	const request = store.get(url);

	request.onsuccess = () => {
		if (request.result) {
			const tileUrlFunction = tile.getTileUrlFunction();
			tile.getImage().src = tileUrlFunction(tile.getTileCoord(), 1, ol.proj.get('EPSG:3857'));
		} else {
			fetch(url)
				.then(response => response.blob())
				.then(blob => {
					const objectURL = URL.createObjectURL(blob);
					tile.getImage().src = objectURL;

					const transaction = db.transaction(['tiles'], 'readwrite');
					const store = transaction.objectStore('tiles');
					store.put({ url, blob });
				})
				.catch(err => {
					console.error('Failed to fetch tile:', err);
					tile.setState(3); // Set tile state to error
				});
		}
	};

	request.onerror = (event) => {
		console.error('Error fetching tile from IndexedDB:', event.target.errorCode);
	};
};


const initOpenLayersMap = () => {
	// 引入4490坐标系定义
	proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs +type=crs")
	register(proj4)
	const projection = getProjection('EPSG:4490');
	const size = 1.4078260158586589;
	const resolutions = new Array(19);
	const matrixIds = new Array(19);
	for (let z = 0; z < 20; ++z) {
		// generate resolutions and matrixIds arrays for this WMTS
		resolutions[z] = size / Math.pow(2, z);
		matrixIds[z] = z;
	}
	// 加载午夜蓝风格天地图
	const baseLayer = new TileLayer({
		source: new WMTS({
			url: "https://jiangsu.tianditu.gov.cn/historyraster/rest/services/historyVector/js_sldt_blue/MapServer/WMTS",
			layer: "historyVector_js_sldt_blue",
			matrixSet: "default",
			style: "default",
			projection: projection,
			format: "image/png",
			tileGrid: new WMTSTileGrid({
				origin: [-180, 90],
				resolutions: resolutions,
				matrixIds: matrixIds
			})
		})
	})

	//工具配置
	map.value = new Map({
		target: target.value,
		layers: [baseLayer],
		controls: [],
		view: new View({
			center: [120.181, 33.349],
			zoom: 14,
			maxZoom: 20,
			minZoom: 8,
			projection: projection
		}),
	});

	// 地图弹窗
	const infoOverlay = new Overlay({
		element: document.createElement('div'),
		positioning: 'bottom-center',
		offset: [0, -30],
		autoPan: true,
		autoPanAnimation: {
			duration: 250,
		},
	});
	map.value.addOverlay(infoOverlay);

	// 绑定点击事件
	map.value.on('singleclick', function (evt) {
		const coordinate = evt.coordinate;
		const hdms = toStringHDMS(toLonLat(coordinate));

		const element = infoOverlay.getElement();
		element.innerHTML = `<div style="background-color: #fff; padding: 5px; border: 1px solid black; color: #7fcc58;" class="info-overlay"><p>${hdms}</p></div>`;
		infoOverlay.setPosition(coordinate);
		// 放大地图
		// map.value.getView().animate({
		//   center: coordinate,
		//   zoom: 10,
		//   duration: 500,
		//   easing: Cesium.EasingFunction.LINEAR_NONE,
		// });
	});

	//map.value.getView().fit([116.103580,30.710719,122.090304,35.212659], { size: map.value.getSize(), maxZoom: 20 });
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

@keyframes blink {
	0% {
		transform: rotate3d(0, 0, 1, 0deg)
	}

	50% {
		transform: rotate3d(0, 0, 1, 180deg)
	}

	100% {
		transform: rotate3d(0, 0, 1, 0deg)
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
			animation: blink 1s infinite;
			// background-image: url('@/assets/imgs/iocn-b-1.svg');
		}
	}
}

.select-active {
	filter: drop-shadow(2px 4px 6px red);
	color: #7fcc58;
	transform: translateY(-20px);
	transition: all 0.3s ease-in-out;
}

.info-overlay {
	background-color: rgb(18, 2, 2);
	border: 1px solid black;
	padding: 5px;
	color: #7fcc58;
}
</style>
