import TileLayer from "ol/layer/Tile";
import { ImageArcGISRest, ImageWMS, TileArcGISRest, WMTS } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import ImageLayer from "ol/layer/Image";
import _ from "lodash";
import { TileGrid } from "ol/tilegrid";

function createLayer(config, group = null) {
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
          matrixIds: matrixIds,
        }),
      }),
    });
  } else if ("arcgis_WMTS" === config.type) {
    let matrixIds = new Array(config.resolutions.length);
    for (let z = 0; z < matrixIds.length; ++z) {
      matrixIds[z] = z;
    }
    layer = new TileLayer({
      source: new TileArcGISRest({
        url: config.url,
        projection: config.projection,
        params: { DPI: _.get(config, "dpi", 96) },
        tileGrid: new TileGrid({
          origin: config.origin,
          extent: config.extent,
          resolutions: config.resolutions,
          tileSize: _.get(config, "size", [256, 256]),
        }),
      }),
    });
  } else if (config.type.endsWith("geoserver_WMS")) {
    layer = new ImageLayer({
      source: new ImageWMS({
        url: config.url,
        projection: config.projection,
        params: {
          LAYERS: config.layer,
          FORMAT: config.format ? config.format : "image/png",
        },
      }),
    });
  } else if (config.type.endsWith("arcgis_WMS")) {
    layer = new ImageLayer({
      source: new ImageArcGISRest({
        url: config.url,
        projection: config.projection,
        params: { LAYERS: "show:" + config.layer },
      }),
    });
  }
  if (null != layer) {
    layer.set("layerName", config.name);
    layer.set("layerGroup", group);
    layer.set("layerType", config.type);
    layer.set("detailLayer", config.detailLayer ? config.detailLayer : "");
    layer.set("legendLayer", config.legendLayer ? config.legendLayer : "");
    layer.setOpacity(_.clamp(_.get(config, "opacity"), 1.0), 0.0, 1.0);
  }
  return layer;
}

function traverseLayerDefine(layerList) {
  let layerDefines = [];
  layerList.forEach((v) => {
    if ("layer" === v.type) {
      layerDefines.push(v);
    }
    if (v.children) {
      layerDefines.push(traverseLayerDefine(v.children));
    }
  });
  return layerDefines.flat(Infinity);
}

async function getLegend(map, layer, legendLayer) {
  const legendUrl =
    "arcgis_WMS" === layer.get("layerType")
      ? layer.getSource().getUrl() +
        "/queryLegends?f=json&transparent=true&size=20,20&LAYERS=show:" +
        legendLayer
      : layer
          .getSource()
          .getLegendUrl(map.getView().getResolution(), { LAYER: legendLayer });
  if (legendUrl) {
    return await fetch(legendUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.layers) {
          return res.layers
            .map((v) =>
              v.legend.map((it) => {
                return {
                  source: layer.get("layerName"),
                  layerId: "" + v.layerId,
                  img: "data:" + it.contentType + ";base64," + it.imageData,
                  label: it.label,
                };
              })
            )
            .flat(Infinity);
        }
      });
  }
}

export { createLayer, traverseLayerDefine, getLegend };
