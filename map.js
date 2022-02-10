var extent;
var projection;
var blueprintLayer;
var mapView;
var map;


function initMap(){
    extent = [0, 0, 1920, 1061];
    projection = new ol.proj.Projection({
      code: "pixel",
      units: "pixels",
      extent: extent
    });
    blueprintLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: 'map-small.jpg',
            projection: projection,
            imageExtent: extent
        })
    });

    mapView = new ol.View({
        center: ol.extent.getCenter(extent),
        zoom: 0.6,
        maxZoom: 8
    });
    map = new ol.Map({
        target: 'map',
        layers: [
            blueprintLayer
        ],
        view: mapView
    });
}
