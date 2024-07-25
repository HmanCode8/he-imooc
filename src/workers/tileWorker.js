// tileWorker.js

import ImageLayer from "ol/layer/Image";
import TileLayer from "ol/layer/Tile";
import { ImageWMS, WMTS } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";

self.onmessage = function (event) {
  console.log("tileWorker received message:", event.data.config);
  const config = event.data.config;
  const group = event.data.group;
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
  } else if (config.type.endsWith("WMS")) {
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
  }

  if (null != layer) {
    layer.set("layerName", config.name);
    layer.set("layerGroup", group ? group : currentTopTab.value);
    layer.set("layerType", config.type);
    layer.set("detailLayer", config.detailLayer ? config.detailLayer : "");
    layer.set("legendLayer", config.legendLayer ? config.legendLayer : "");
  }
  postMessage(layer);
};
