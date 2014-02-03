// This example code is based on 
//   Closure: The Definitive Guide: Michael Bolin, 
//   http://plovr.com/modules.html, 
//   http://plovr.com/demo/modules.html 
//   and https://github.com/bolinfest/plovr

goog.provide('example.api');

goog.require('example.App');

/** @param {string} message */
example.api.setMessage = function(message) {
  var app = example.App.getInstance();
  app.setMessage(message);
};

goog.exportSymbol('example.api.setMessage', example.api.setMessage);
