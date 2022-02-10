const extent = [0, 0, 1920, 1061];
const projection = new ol.proj.Projection({
  code: "pixel",
  units: "pixels",
  extent: extent
});
const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Image({
          source: new ol.source.ImageStatic({
              url: 'https://imgs.xkcd.com/comics/online_communities.png',
              projection: projection,
              imageExtent: extent
          }),
      }),
    ],
    view: new ol.View({
        center: ol.extent.getCenter(extent),
        zoom: 0.6,
        maxZoom: 8
    }),
});
