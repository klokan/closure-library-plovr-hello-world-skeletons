goog.provide('hello.main');

/**
 * The main function for this example
 */
hello.main = function() {
    var map = new OpenLayers.Map("map");
    map.addLayer(new OpenLayers.Layer.OSM());
    map.zoomToMaxExtent();
}

goog.exportSymbol('main',hello.main);