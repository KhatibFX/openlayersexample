import './ol.css';
import './ol.js';

const extent = [0, 0, 1024, 968];
const projection = new ol.proj.Projection({
  code: "xkcd-image",
  units: "pixels",
  extent: extent
});
const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Image({
          source: new ol.source.ImageStatic({
            attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
            url: 'https://imgs.xkcd.com/comics/online_communities.png',
            projection: projection,
            imageExtent: extent,
          }),
      }),
    ],
    view: new ol.View({
        center: ol.extent.getCenter(extent),
        zoom: 2,
        maxZoom: 8
    }),
});
