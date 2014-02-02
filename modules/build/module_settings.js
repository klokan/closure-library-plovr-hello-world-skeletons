(function(a){with(a){
goog.ui.Component.prototype.getChildCount = JSCompiler_unstubMethod(3, function() {
  return this.children_ ? this.children_.length : 0
});
goog.ui.Component.prototype.addChildAt = JSCompiler_unstubMethod(2, function($child$$, $index$$54_sibling$$, $contentElement_opt_render$$) {
  if($child$$.inDocument_ && ($contentElement_opt_render$$ || !this.inDocument_)) {
    throw Error(goog.ui.Component.Error.ALREADY_RENDERED);
  }
  if(0 > $index$$54_sibling$$ || $index$$54_sibling$$ > this.getChildCount()) {
    throw Error(goog.ui.Component.Error.CHILD_INDEX_OUT_OF_BOUNDS);
  }
  if(!this.childIndex_ || !this.children_) {
    this.childIndex_ = {}, this.children_ = []
  }
  $child$$.getParent() == this ? (goog.object.set(this.childIndex_, $child$$.getId(), $child$$), goog.array.remove(this.children_, $child$$)) : goog.object.add(this.childIndex_, $child$$.getId(), $child$$);
  $child$$.setParent(this);
  goog.array.insertAt(this.children_, $child$$, $index$$54_sibling$$);
  $child$$.inDocument_ && this.inDocument_ && $child$$.getParent() == this ? ($contentElement_opt_render$$ = this.getContentElement(), $contentElement_opt_render$$.insertBefore($child$$.getElement(), $contentElement_opt_render$$.childNodes[$index$$54_sibling$$] || null)) : $contentElement_opt_render$$ ? (this.element_ || this.createDom(), $index$$54_sibling$$ = this.getChildAt($index$$54_sibling$$ + 1), $child$$.render_(this.getContentElement(), $index$$54_sibling$$ ? $index$$54_sibling$$.element_ : 
  null)) : this.inDocument_ && (!$child$$.inDocument_ && $child$$.element_ && $child$$.element_.parentNode) && $child$$.enterDocument()
});
goog.ui.Component.prototype.addChild = JSCompiler_unstubMethod(1, function($child$$, $opt_render$$) {
  this.addChildAt($child$$, this.getChildCount(), $opt_render$$)
});
goog.ui.Component.prototype.getContentElement = JSCompiler_unstubMethod(0, function() {
  return this.element_
});
example.Settings = function $example$Settings$($dom$$) {
  goog.ui.Component.call(this, $dom$$)
};
goog.inherits(example.Settings, goog.ui.Component);
example.Settings.prototype.createDom = function $example$Settings$$createDom$() {
  example.Settings.superClass_.createDom.call(this);
  this.getElement().innerHTML = "This is the settings component."
};
a.app = example.App.getInstance(), a.settings = new example.Settings(app.getDomHelper());
app.addChild(settings, !0);
goog.module.ModuleManager.getInstance().setLoaded("settings");
}})(__plovr__);
//@ sourceURL=build/module_settings.js