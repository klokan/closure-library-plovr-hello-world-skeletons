goog.provide('example.IFrame');


goog.require('goog.dom.iframe');



/**
 * @constructor
 * @param {Element} parent
 * @param {string} id
 * @param {string} content
 * @param {string} style
 */
example.IFrame = function(parent, id, content, style) {
  iframe = goog.dom.iframe.createWithContent(parent, undefined, content, style);
  iframe.id = id;
  iframe['name'] = id;
};
