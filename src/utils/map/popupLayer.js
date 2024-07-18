// layers/popupLayer.js
import "ol/ol.css";
import Overlay from "ol/Overlay";

function createPopupLayer(map, element) {
  const overlay = new Overlay({
    element: element,
    autoPan: true,
    autoPanAnimation: {
      duration: 250,
    },
  });

  map.addOverlay(overlay);

  return overlay;
}

export { createPopupLayer };
