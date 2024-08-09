// layers/clusterLayer.js
import "ol/ol.css";
import { Map, View } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Cluster } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Style, Circle, Fill, Stroke, Text } from "ol/style";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";

export function createClusterLayer(features, distance = 40) {
  const vectorSource = new VectorSource({
    features: features,
  });

  const clusterSource = new Cluster({
    distance: distance,
    source: vectorSource,
  });

  const styleCache = {};
  const clusters = new VectorLayer({
    source: clusterSource,
    style: function (feature) {
      const size = feature.get("features").length;
      let style = styleCache[size];
      if (!style) {
        style = new Style({
          image: new Circle({
            radius: 10,
            stroke: new Stroke({
              color: "#fff",
            }),
            fill: new Fill({
              color: "#3399CC",
            }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({
              color: "#fff",
            }),
          }),
        });
        styleCache[size] = style;
      }
      return style;
    },
  });

  return clusters;
}
