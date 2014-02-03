(function(a){with(a){
a.$JSCompiler_unstubMethod$$ = function $$JSCompiler_unstubMethod$$$($JSCompiler_unstubMethod_id$$, $JSCompiler_unstubMethod_body$$) {
  return $JSCompiler_stubMap$$[$JSCompiler_unstubMethod_id$$] = $JSCompiler_unstubMethod_body$$
};
$goog$ui$Component$$.prototype.$getDomHelper$ = $JSCompiler_unstubMethod$$(0, $JSCompiler_get$$("$dom_$"));
a.$example$Settings$$ = function $$example$Settings$$$($dom$$4$$) {
  this.$dom_$ = $dom$$4$$ || $goog$dom$getDomHelper$$()
};
$goog$inherits$$($example$Settings$$, $goog$ui$Component$$);
$example$Settings$$.prototype.$createDom$ = function $$example$Settings$$$$$createDom$$() {
  $example$Settings$$.$superClass_$.$createDom$.call(this);
  this.$getElement$().innerHTML = "This is the settings component."
};
a.$app$$ = $example$App$instance_$$, a.$child$$inline_336$$ = new $example$Settings$$($app$$.$getDomHelper$()), a.$index$$inline_337$$ = $app$$.$children_$ ? $app$$.$children_$.length : 0;
$child$$inline_336$$.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
(0 > $index$$inline_337$$ || $index$$inline_337$$ > ($app$$.$children_$ ? $app$$.$children_$.length : 0)) && $JSCompiler_alias_THROW$$(Error("Child component index out of bounds"));
if(!$app$$.$childIndex_$ || !$app$$.$children_$) {
  $app$$.$childIndex_$ = {}, $app$$.$children_$ = []
}
if($child$$inline_336$$.getParent() == $app$$) {
  var $key$$inline_338$$ = $child$$inline_336$$.$getId$();
  $app$$.$childIndex_$[$key$$inline_338$$] = $child$$inline_336$$;
  $goog$array$remove$$($app$$.$children_$, $child$$inline_336$$)
}else {
  var $obj$$inline_339$$ = $app$$.$childIndex_$, $key$$inline_340$$ = $child$$inline_336$$.$getId$();
  $key$$inline_340$$ in $obj$$inline_339$$ && $JSCompiler_alias_THROW$$(Error('The object already contains the key "' + $key$$inline_340$$ + '"'));
  $obj$$inline_339$$[$key$$inline_340$$] = $child$$inline_336$$
}
$JSCompiler_StaticMethods_setParent$$($child$$inline_336$$, $app$$);
(function($arr$$42$$, $index$$55$$, $howMany$$, $var_args$$42$$) {
  $goog$asserts$assert$$($arr$$42$$.length != $JSCompiler_alias_NULL$$);
  $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$42$$, $goog$array$slice$$(arguments, 1))
})($app$$.$children_$, $index$$inline_337$$, 0, $child$$inline_336$$);
if($child$$inline_336$$.$inDocument_$ && $app$$.$inDocument_$ && $child$$inline_336$$.getParent() == $app$$) {
  var $contentElement$$inline_341$$ = $app$$.$element_$;
  $contentElement$$inline_341$$.insertBefore($child$$inline_336$$.$getElement$(), $contentElement$$inline_341$$.childNodes[$index$$inline_337$$] || $JSCompiler_alias_NULL$$)
}else {
  $app$$.$element_$ || $app$$.$createDom$();
  var $sibling$$inline_342$$ = $app$$.$children_$ ? $app$$.$children_$[$index$$inline_337$$ + 1] || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_render_$$($child$$inline_336$$, $app$$.$element_$, $sibling$$inline_342$$ ? $sibling$$inline_342$$.$element_$ : $JSCompiler_alias_NULL$$)
}
$JSCompiler_StaticMethods_setLoaded$$($goog$module$ModuleManager$$.$getInstance$(), "settings");
}})(__plovr__);
//@ sourceURL=module_settings.js