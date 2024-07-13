<template>
	<div class="map relative">
		<div ref="target" class="w-full h-full"></div>
		<div v-if="show"
			class="absolute text-white w-1/3 bg-[#20293a] index-100 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">

			<div class="header flex justify-between items-center p-2">
				<div class=" font-bold">地图标题</div>
				<div class="close hover: cursor-pointer" @click="show = false">X</div>
			</div>

			<div class="content">
				你点击的位置：{{ locationName }}
			</div>
		</div>
		<div ref="popup" class="ol-popup">
			<a href="#" ref="popupCloser" class="ol-popup-closer"></a>
			<div ref="popupContent"></div>
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

// 引入盐城的GeoJSON数据
import yanchengGeoJson from '@/assets/MapData/yancheng.json'

const show = ref(false)
const target = ref(null)
const locationName = ref('')
const popup = ref(null)
const popupContent = ref(null)
const popupCloser = ref(null)

// 弹出框的HTML模板
const popupTemplate = `
<div class="popup">
	<div class="popup-content" ref="popupContent"></div>
	<div class="popup-closer" ref="popupCloser">X</div>
</div>
`

onMounted(() => {
	// 创建一个VectorSource并加载GeoJSON数据
	const vectorSource = new VectorSource({
		features: new GeoJSON().readFeatures(yanchengGeoJson, {
			featureProjection: 'EPSG:3857' // 将GeoJSON数据投影到Web Mercator
		})
	})

	// 设置样式，包含边界样式和文本样式
	const vectorLayerStyle = new Style({
		fill: new Fill({
			color: 'rgba(0, 123, 255, 0.5)' // 区域填充颜色
		}),
		stroke: new Stroke({
			color: '#319FD3', // 边界颜色
			width: 2 // 边界宽度
		}),
		text: new Text({
			font: '12px Calibri,sans-serif',
			fill: new Fill({
				color: '#000' // 文本颜色
			}),
			stroke: new Stroke({
				color: '#fff', // 文本边界颜色
				width: 3 // 文本边界宽度
			})
		})
	})

	// 应用样式并为每个要素设置文本
	vectorSource.getFeatures().forEach(feature => {
		const name = feature.get('name') // 假设GeoJSON中有一个字段叫'name'，包含板块名称
		feature.setStyle(
			new Style({
				fill: new Fill({
					color: 'rgba(0, 123, 255, 0.5)'
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
		style: vectorLayerStyle
	})

	// 获取GeoJSON数据的边界范围
	const extent = boundingExtent(vectorSource.getFeatures().map(feature => feature.getGeometry().getExtent()))
	const center = getCenter(extent)

	// 初始化OpenLayers地图
	const map = new Map({
		target: target.value,
		layers: [vectorLayer], // 仅添加VectorLayer到地图
		view: new View({
			center: center,
			zoom: 10, // 根据需要调整缩放级别
			maxZoom: 18, // 设置最大缩放级别
			minZoom: 8 // 设置最小缩放级别
		})
	})

	// 调整视图以适应盐城区域
	map.getView().fit(extent, { size: map.getSize(), maxZoom: 14 }) // 设置最大缩放级别

	// 创建并配置Overlay用于弹出框
	const overlay = new Overlay({
		element: popup.value,
		autoPan: true,
		autoPanAnimation: {
			duration: 250
		}
	})
	map.addOverlay(overlay)
	// 关闭弹出框
	popupCloser.value.onclick = function () {
		overlay.setPosition(undefined)
		popupCloser.value.blur()
		return false
	}

	// 添加点击事件
	map.on('singleclick', function (evt) {
		const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
			return feature
		})
		if (feature) {
			const coordinates = feature.getGeometry().getCoordinates()
			const name = feature.get('name') // 获取板块名称
			const info = feature.get('center') // 假设GeoJSON中有一个字段叫'info'，包含板块的其他信息
			popupContent.value.innerHTML = `<div class="info-content">
					<p>${name}</p>
				</div><br />`
			overlay.setPosition([coordinates[0][0][0][0], coordinates[0][0][0][1]])
		}
	})
	// 添加点击事件
	// map.on('singleclick', function (evt) {
	// 	console.log(evt.coordinate) // 点击坐标
	// 	const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
	// 		return feature
	// 	})
	// 	if (feature) {
	// 		show.value = true // 打开弹窗
	// 		const name = feature.get('name') // 板块名称
	// 		locationName.value = name // 记录点击位置名称
	// 		// const content = `
	// 		// 	<div class="content">
	// 		// 		<p>${name}</p>
	// 		// 		<p>具体内容</p>
	// 		// 	</div>
	// 		// `
	// 		// document.querySelector('.content').innerHTML = content // 更新弹窗内容
	// 	} else {
	// 		show.value = false // 关闭弹窗		
	// 	}
	// })
})
</script>

<style lang="scss" scoped>
/* 全屏铺满 */
.w-full {
	width: 100%;
}

.h-full {
	height: 100%;
}

/* 设置地图容器的样式 */
div[ref="target"] {
	position: relative;
}

.info-content {
	padding: 10px;
	background-color: #fff;
}
</style>