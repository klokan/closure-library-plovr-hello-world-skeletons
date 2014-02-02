(function(a){with(a){
example.App.prototype.setMessage = JSCompiler_unstubMethod(5, function($message$$) {
  this.dom_.getElementsByTagNameAndClass("span", void 0, this.getElement())[0].innerHTML = goog.string.htmlEscape($message$$)
});
goog.debug.LogRecord.prototype.setMessage = JSCompiler_unstubMethod(4, function($msg$$) {
  this.msg_ = $msg$$
});
example.api = {};
example.api.setMessage = function $example$api$setMessage$($message$$) {
  example.App.getInstance().setMessage($message$$)
};
goog.exportSymbol("example.api.setMessage", example.api.setMessage);
goog.module.ModuleManager.getInstance().setLoaded("api");
}})(__plovr__);
//@ sourceURL=build/module_api.js