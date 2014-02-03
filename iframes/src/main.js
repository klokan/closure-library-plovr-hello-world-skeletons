// Example of communication between iframes.

goog.require('example.IFrame');
goog.require('example.templates');
goog.require('goog.dom');


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
  new example.IFrame(goog.dom.getElement('if1'),
      'iframe1',
      example.templates.iframe(contPars),
      'width:33%;');

  // iframe2
  contPars = {
    srciframe: 'iframe2',
    dstiframe: 'iframe3',
    srccolor: 'blue',
    dstcolor: 'yellow',
    debug: goog.DEBUG
  };
  new example.IFrame(goog.dom.getElement('if2'),
      'iframe2',
      example.templates.iframe(contPars),
      'width:33%;');

  // iframe3
  contPars = {
    srciframe: 'iframe3',
    dstiframe: 'iframe2',
    srccolor: 'green',
    dstcolor: 'pink',
    debug: goog.DEBUG
  };
  new example.IFrame(goog.dom.getElement('if3'),
      'iframe3',
      example.templates.iframe(contPars),
      'width:33%;');
};

goog.exportSymbol('main', example.main);
