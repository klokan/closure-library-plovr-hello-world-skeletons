// BEGIN_INCLUDE_APP
goog.provide('example.App');

goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.ui.Component');


/**
 * @param {!goog.dom.DomHelper} dom
 * @constructor
 * @extends {goog.ui.Component}
 */
example.App = function(dom) {
  goog.base(this, dom);
};
goog.inherits(example.App, goog.ui.Component);

/** @inheritDoc */
example.App.prototype.createDom = function() {
  var dom = this.dom_;
  var el = dom.createDom('div', undefined /* opt_attributes */,
      dom.createDom('span', undefined /* opt_attributes */, 'Messages appear here'));
  this.setElementInternal(el);
};

/** @inheritDoc */
example.App.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
};

/** @param {string} message */
example.App.prototype.setMessage = function(message) {
  var span = this.dom_.getElementsByTagNameAndClass(
      'span', undefined /* className */, this.getElement())[0];
  span.innerHTML = goog.string.htmlEscape(message);
};

/**
 * @type {example.App}
 * @private
 */
example.App.instance_;

/**
 * @param {string} id
 */
example.App.install = function(id) {
  if (example.App.instance_) return;
  var dom = new goog.dom.DomHelper();
  var app = new example.App(dom);
  app.render(dom.getElement(id));
  example.App.instance_ = app;  
};

/** @return {example.App} */
example.App.getInstance = function() {
  return example.App.instance_;
};
// END_INCLUDE_APP

// BEGIN_INCLUDE_EXPORT
goog.exportSymbol('example.App.install', example.App.install);
// END_INCLUDE_EXPORT
