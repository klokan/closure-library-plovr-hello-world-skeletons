// Example of communication between iframes.
goog.require('example.templates');
goog.require('goog.dom');
goog.require('goog.dom.iframe');

/**
 * Main
 */
example.main = function() {
  // iframe1
  var contPars = {
    srciframe: 'iframe1',
    dstiframe: 'iframe2',
    srccolor: 'red',
    dstcolor: 'orange',
    debug: goog.DEBUG
  };
  goog.dom.iframe.createWithContent(goog.dom.getElement('if1'),
      undefined,
      example.templates.iframe(contPars),
      'width:33%;').id = 'iframe1';

  // iframe2
  contPars = {
    srciframe: 'iframe2',
    dstiframe: 'iframe3',
    srccolor: 'blue',
    dstcolor: 'yellow',
    debug: goog.DEBUG
  };
  goog.dom.iframe.createWithContent(goog.dom.getElement('if2'),
      undefined,
      example.templates.iframe(contPars),
      'width:33%;').id = 'iframe2';

  // iframe3
  contPars = {
    srciframe: 'iframe3',
    dstiframe: 'iframe2',
    srccolor: 'green',
    dstcolor: 'pink',
    debug: goog.DEBUG
  };
  goog.dom.iframe.createWithContent(goog.dom.getElement('if3'),
      undefined,
      example.templates.iframe(contPars),
      'width:33%;').id = 'iframe3';
};

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
};

goog.exportSymbol('main', example.main);
