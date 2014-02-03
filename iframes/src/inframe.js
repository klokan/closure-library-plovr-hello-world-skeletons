goog.provide('example.inframe');
goog.require('goog.dom');
goog.require('goog.dom.DomHelper');
goog.require('goog.net.IframeIo');


/**
 * Main
 *
 * @param {string} iframe
 * @param {string} color
 */
example.inframe.main = function(iframe, color) {
  var doc = example.inframe.getIframeDocument(iframe);
  doc.getElementById('background').style['backgroundColor'] = color;
};


/**
 * @param {string} iframe
 * @return {Document}
 */
example.inframe.getIframeDocument = function(iframe) {
  var parentDocument = goog.dom.DomHelper.getOwnerDocument(parent);
  var iframeEl = parentDocument.getElementById(iframe);
  return goog.dom.getFrameContentDocument(iframeEl);
};


goog.exportSymbol('changeColor', example.inframe.main);
