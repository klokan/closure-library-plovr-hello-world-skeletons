goog.provide('hello.main');

goog.require('goog.dom');

hello.main = function() {

  var output = goog.dom.getElement('output');

  var newHeader = goog.dom.createDom('h1', {'class': 'dialog'},
    'Closure Stylesheets GSS with Plovr - example demo project!');
  goog.dom.appendChild(output, newHeader);

}

goog.exportSymbol('main', hello.main);