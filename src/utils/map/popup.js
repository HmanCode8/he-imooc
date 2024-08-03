// layers/popup.js
import "ol/ol.css";
import Overlay from "ol/Overlay";
import _ from "lodash";
import {ImageArcGISRest} from "ol/source";
import {get as getProjection} from "ol/proj";
import {getRequestExtent} from "ol/source/Image";
import {round} from "ol/math";
import {getHeight, getWidth} from "ol/extent";
import {DECIMALS} from "ol/source/common";
import {appendParams} from "ol/uri";
import {EsriJSON, GeoJSON} from "ol/format";

const esriJsonParser = new EsriJSON();
const geoJsonParser = new GeoJSON();

function createDefaultPopup(element) {
    return new Overlay({
        id: "popup",
        element: element,
        positioning: 'bottom-center',
        offset: [0, 0],
        autoPan: true,
        autoPanAnimation: {
            duration: 250,
        },
    });
}

async function getPopInfo(evt, currentLayerGroup, getEnglishKey = true) {
    const viewResolution = evt.map.getView().getResolution();
    const projection = evt.map.getView().getProjection();
    let layers = evt.map.getAllLayers();
    for (let index in layers) {
        if (layers[index].get("detailLayer") && 0 < layers[index].get("detailLayer").length) {
            const url = "arcgis_WMS" === layers[index].get("layerType") ?
                getArcgisIdentifyUrl(layers[index], evt.map, {
                    "GEOMETRY": evt.coordinate[0] + "," + evt.coordinate[1],
                    "LAYERS": "visible:" + layers[index].get("detailLayer")
                }) :
                layers[index].getSource().getFeatureInfoUrl(evt.coordinate, viewResolution, projection, {
                    "INFO_FORMAT": "application/json",
                    "QUERY_LAYERS": layers[index].get("detailLayer"),
                    "FEATURE_COUNT": 1
                });
            if (url) {
                const responseText = await fetch(url).then(response => response.text());
                const jsonObj = JSON.parse(responseText);
                const layerId = "arcgis_WMS" === layers[index].get("layerType") ?
                    ("" + _.get(jsonObj, "results.0.layerId", "")) :
                    _.get(jsonObj, "features.0.id", "").split(".")[0];
                const features = "arcgis_WMS" === layers[index].get("layerType") ?
                    _.get(jsonObj, "results", []).map(v => esriJsonParser.readFeature(v)) :
                    geoJsonParser.readFeatures(responseText);
                if (0 < features.length) {
                    const filterFields = _.get(layerConfig, "detailFields", []);
                    const exceptFields = ["geometry", "shape", "objectid", "_"];
                    const englishRegExp=new RegExp("[A-Za-z]");
                    const showProperties = _.mapValues(
                        _.pickBy(features[0].getProperties(),
                            (v, k) => (getEnglishKey || !englishRegExp.test(k))
                                && !exceptFields.some(prefix => _.toLower(k).startsWith(prefix))
                                && (0 === filterFields.length || filterFields.includes(k))),
                        v => _.isNil(v) || "null" === _.toLower(v) ? "" : v);
                    if (0 < Object.keys(showProperties).length) {
                        const name = _.get(
                            _.find(currentLayerGroup, v =>
                                v.source === layers[index].get("layerName") && _.get(v, "detailLayer", "").split(",").includes(layerId)),
                            "name", "") + "详情";
                        return {layerName: name, properties: showProperties};
                    }
                }
            }
        }
    }
    return {};
}

function popElement(evt, popElementName = "popup") {
    const overlap = evt.map.getOverlayById(popElementName)
    if (overlap) {
        overlap.setPosition(evt.coordinate);
    }
}

function closePop(map, popElementName = "popup") {
    map && map.getOverlayById(popElementName).setPosition(undefined);
}

function getArcgisIdentifyUrl(layer, mapInstance, queryParam) {
    if (!layer.getSource() instanceof ImageArcGISRest) {
        return undefined;
    }
    const projection = getProjection(layer.getSource().getProjection() ?
        layer.getSource().getProjection() : mapInstance.getProjection());
    const resolution = mapInstance.getView().getResolution();
    const pixelRatio = layer.getSource().hidpi_ ? mapInstance.pixelRatio_ : 1;
    const extent = getRequestExtent(mapInstance.getView().calculateExtent(mapInstance.getSize()),
        resolution, pixelRatio, layer.getSource().ratio_);
    const srid = projection.getCode().split(/:(?=\d+$)/).pop();

    const imageResolution = resolution / pixelRatio;

    const width = round(getWidth(extent) / imageResolution, DECIMALS);
    const height = round(getHeight(extent) / imageResolution, DECIMALS);
    const dpi = Math.round(_.get(layer.getSource().getParams(), "DPI", 90) * pixelRatio);

    const params = {
        'F': 'JSON',
        'GEOMETRYTYPE': 'esriGeometryPoint',
        'TOLERANCE': 5
    };
    Object.assign(params, queryParam);
    params['IMAGEDISPLAY'] = width + ',' + height + ',' + dpi;
    params['MAPEXTENT'] = extent.join(',');
    params['SR'] = srid;
    return appendParams(layer.getSource().getUrl() + "/identify", params);
}

export {createDefaultPopup, getPopInfo, popElement, closePop};
