var extent;
var projection;
var blueprintLayer;
var mapView;
var map;


function initMap(imageWidth, imageHeight, blueprintUrl, mapDivision){
    extent = [0, 0, imageWidth, imageHeight];
    projection = new ol.proj.Projection({
      code: "pixel",
      units: "pixels",
      extent: extent
    });
    alert("how are you");
    blueprintLayer = new ol.layer.Image({
        source: new ol.source.ImageStatic({
            url: blueprintUrl,
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
        target: mapDivision,
        layers: [
            blueprintLayer
        ],
        view: mapView
    });
}
