/**
 * @fileoverview Externs for the OpenLayers 2.11 API.
 * Hand made - feel free to add any missing function from docs:
 * @see http://dev.openlayers.org/docs/files/OpenLayers-js.html
 */

var OpenLayers = {}

/**
 * @constructor
 * @param {Node|string} div
 * @param {Object.<string, *>=} options
 */
OpenLayers.Map = function(div, options) {};

/**
 * @param {OpenLayers.Layer} layer
 */
OpenLayers.Map.prototype.addLayer = function( layer ) {};
OpenLayers.Map.prototype.getCenter = function() {};
OpenLayers.Map.prototype.getZoom = function() {};
OpenLayers.Map.prototype.zoomToMaxExtent = function() {};
OpenLayers.Map.prototype.getLonLatFromViewPortPx = function() {};

/**
 * @constructor
 * @param {string} name The layer name
 * @param {Object.<string, *>=} opt_options
 */
OpenLayers.Layer = function(name, opt_options) {};

/**
 * @constructor
 * @extends OpenLayers.Layer
 * @param {string=} name The layer name
 * @param {Object.<string, *>=} opt_options
 */
OpenLayers.Layer.OSM = function(name, opt_options) {};