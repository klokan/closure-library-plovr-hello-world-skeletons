var $JSCompiler_alias_FALSE$$ = !1, $goog$global$$ = this;
function $goog$typeOf$$($value$$41$$) {
  var $s$$2$$ = typeof $value$$41$$;
  if("object" == $s$$2$$) {
    if($value$$41$$) {
      if($value$$41$$ instanceof Array) {
        return"array"
      }
      if($value$$41$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$41$$);
      if("[object Window]" == $className$$1$$) {
        return"object"
      }
      if("[object Array]" == $className$$1$$ || "number" == typeof $value$$41$$.length && "undefined" != typeof $value$$41$$.splice && "undefined" != typeof $value$$41$$.propertyIsEnumerable && !$value$$41$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$41$$.call && "undefined" != typeof $value$$41$$.propertyIsEnumerable && !$value$$41$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$41$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$47$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$47$$ || "object" == $type$$47$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isObject$$($val$$10$$) {
  var $type$$48$$ = typeof $val$$10$$;
  return"object" == $type$$48$$ && null != $val$$10$$ || "function" == $type$$48$$
}
Math.floor(2147483648 * Math.random()).toString(36);
function $goog$string$htmlEscape$$($str$$31$$) {
  if(!$goog$string$allRe_$$.test($str$$31$$)) {
    return $str$$31$$
  }
  -1 != $str$$31$$.indexOf("&") && ($str$$31$$ = $str$$31$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$31$$.indexOf("<") && ($str$$31$$ = $str$$31$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$31$$.indexOf(">") && ($str$$31$$ = $str$$31$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$31$$.indexOf('"') && ($str$$31$$ = $str$$31$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$31$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$10$$, $obj$$21$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$10$$, $obj$$21$$, $opt_fromIndex$$6$$)
} : function($arr$$11$$, $obj$$22$$, $fromIndex_i$$12_opt_fromIndex$$7$$) {
  $fromIndex_i$$12_opt_fromIndex$$7$$ = null == $fromIndex_i$$12_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex_i$$12_opt_fromIndex$$7$$ ? Math.max(0, $arr$$11$$.length + $fromIndex_i$$12_opt_fromIndex$$7$$) : $fromIndex_i$$12_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$11$$)) {
    return!$goog$isString$$($obj$$22$$) || 1 != $obj$$22$$.length ? -1 : $arr$$11$$.indexOf($obj$$22$$, $fromIndex_i$$12_opt_fromIndex$$7$$)
  }
  for(;$fromIndex_i$$12_opt_fromIndex$$7$$ < $arr$$11$$.length;$fromIndex_i$$12_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$12_opt_fromIndex$$7$$ in $arr$$11$$ && $arr$$11$$[$fromIndex_i$$12_opt_fromIndex$$7$$] === $obj$$22$$) {
      return $fromIndex_i$$12_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$14$$, $f$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$14$$, $f$$, $opt_obj$$1$$)
} : function($arr$$15$$, $f$$1$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$15$$.length, $arr2$$ = $goog$isString$$($arr$$15$$) ? $arr$$15$$.split("") : $arr$$15$$, $i$$14$$ = 0;$i$$14$$ < $l$$2$$;$i$$14$$++) {
    $i$$14$$ in $arr2$$ && $f$$1$$.call($opt_obj$$2$$, $arr2$$[$i$$14$$], $i$$14$$, $arr$$15$$)
  }
};
function $goog$array$concat$$($var_args$$40$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments)
}
function $goog$array$clone$$($arr$$41$$) {
  if("array" == $goog$typeOf$$($arr$$41$$)) {
    return $goog$array$concat$$($arr$$41$$)
  }
  for(var $rv$$3$$ = [], $i$$29$$ = 0, $len$$ = $arr$$41$$.length;$i$$29$$ < $len$$;$i$$29$$++) {
    $rv$$3$$[$i$$29$$] = $arr$$41$$[$i$$29$$]
  }
  return $rv$$3$$
}
function $goog$array$slice$$($arr$$43$$, $start$$5$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$43$$, $start$$5$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$43$$, $start$$5$$, $opt_end$$13$$)
}
;var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : null
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_3$$;
if($ua$$inline_3$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_4$$ = $goog$global$$.navigator;
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_3$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_3$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_3$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_4$$.product
}
var $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_6$$ = "", $re$$inline_7$$;
  if($goog$userAgent$detectedOpera_$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_8$$ = $goog$global$$.opera.version, $version$$inline_6$$ = "function" == typeof $operaVersion$$inline_8$$ ? $operaVersion$$inline_8$$() : $operaVersion$$inline_8$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_7$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_7$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_7$$ = /WebKit\/(\S+)/), $re$$inline_7$$) {
      var $arr$$inline_9$$ = $re$$inline_7$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_6$$ = $arr$$inline_9$$ ? $arr$$inline_9$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_10$$, $doc$$inline_55$$ = $goog$global$$.document;
    $docMode$$inline_10$$ = $doc$$inline_55$$ ? $doc$$inline_55$$.documentMode : void 0;
    if($docMode$$inline_10$$ > parseFloat($version$$inline_6$$)) {
      $goog$userAgent$VERSION$$ = "" + $docMode$$inline_10$$;
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_6$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  if(!$goog$userAgent$isVersionCache_$$[$version$$8$$]) {
    for(var $order$$inline_14$$ = 0, $v1Subs$$inline_15$$ = ("" + $goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $v2Subs$$inline_16$$ = ("" + $version$$8$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $subCount$$inline_17$$ = Math.max($v1Subs$$inline_15$$.length, $v2Subs$$inline_16$$.length), $subIdx$$inline_18$$ = 0;0 == $order$$inline_14$$ && $subIdx$$inline_18$$ < $subCount$$inline_17$$;$subIdx$$inline_18$$++) {
      var $v1Sub$$inline_19$$ = $v1Subs$$inline_15$$[$subIdx$$inline_18$$] || "", $v2Sub$$inline_20$$ = $v2Subs$$inline_16$$[$subIdx$$inline_18$$] || "", $v1CompParser$$inline_21$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_22$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_23$$ = $v1CompParser$$inline_21$$.exec($v1Sub$$inline_19$$) || ["", "", ""], $v2Comp$$inline_24$$ = $v2CompParser$$inline_22$$.exec($v2Sub$$inline_20$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_23$$[0].length && 0 == $v2Comp$$inline_24$$[0].length) {
          break
        }
        $order$$inline_14$$ = ((0 == $v1Comp$$inline_23$$[1].length ? 0 : parseInt($v1Comp$$inline_23$$[1], 10)) < (0 == $v2Comp$$inline_24$$[1].length ? 0 : parseInt($v2Comp$$inline_24$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_23$$[1].length ? 0 : parseInt($v1Comp$$inline_23$$[1], 10)) > (0 == $v2Comp$$inline_24$$[1].length ? 0 : parseInt($v2Comp$$inline_24$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_23$$[2].length) < (0 == $v2Comp$$inline_24$$[2].length) ? -1 : (0 == $v1Comp$$inline_23$$[2].length) > 
        (0 == $v2Comp$$inline_24$$[2].length) ? 1 : 0) || ($v1Comp$$inline_23$$[2] < $v2Comp$$inline_24$$[2] ? -1 : $v1Comp$$inline_23$$[2] > $v2Comp$$inline_24$$[2] ? 1 : 0)
      }while(0 == $order$$inline_14$$)
    }
    $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $order$$inline_14$$
  }
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$() {
  return $goog$userAgent$isDocumentModeCache_$$[9] || ($goog$userAgent$isDocumentModeCache_$$[9] = $goog$userAgent$IE$$ && !!document.documentMode && 9 <= document.documentMode)
}
;var $goog$dom$defaultDomHelper_$$, $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$() || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
function $goog$dom$classes$add$$($element$$10$$, $var_args$$45$$) {
  var $className$$inline_27_classes$$;
  $className$$inline_27_classes$$ = ($className$$inline_27_classes$$ = $element$$10$$.className) && "function" == typeof $className$$inline_27_classes$$.split ? $className$$inline_27_classes$$.split(/\s+/) : [];
  var $args$$3_args$$inline_30$$ = $goog$array$slice$$(arguments, 1), $b$$4_classes$$inline_29$$;
  $b$$4_classes$$inline_29$$ = $className$$inline_27_classes$$;
  for(var $rv$$inline_31$$ = 0, $i$$inline_32$$ = 0;$i$$inline_32$$ < $args$$3_args$$inline_30$$.length;$i$$inline_32$$++) {
    0 <= $goog$array$indexOf$$($b$$4_classes$$inline_29$$, $args$$3_args$$inline_30$$[$i$$inline_32$$]) || ($b$$4_classes$$inline_29$$.push($args$$3_args$$inline_30$$[$i$$inline_32$$]), $rv$$inline_31$$++)
  }
  $b$$4_classes$$inline_29$$ = $rv$$inline_31$$ == $args$$3_args$$inline_30$$.length;
  $element$$10$$.className = $className$$inline_27_classes$$.join(" ");
  return $b$$4_classes$$inline_29$$
}
;function $goog$object$forEach$$($obj$$30$$, $f$$18$$) {
  for(var $key$$18$$ in $obj$$30$$) {
    $f$$18$$.call(void 0, $obj$$30$$[$key$$18$$], $key$$18$$, $obj$$30$$)
  }
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function $goog$object$extend$$($target$$40$$, $var_args$$48$$) {
  for(var $key$$41$$, $source$$2$$, $i$$47$$ = 1;$i$$47$$ < arguments.length;$i$$47$$++) {
    $source$$2$$ = arguments[$i$$47$$];
    for($key$$41$$ in $source$$2$$) {
      $target$$40$$[$key$$41$$] = $source$$2$$[$key$$41$$]
    }
    for(var $j$$4$$ = 0;$j$$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$4$$++) {
      $key$$41$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$4$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$41$$) && ($target$$40$$[$key$$41$$] = $source$$2$$[$key$$41$$])
    }
  }
}
;function $goog$dom$setProperties$$($element$$18$$, $properties$$) {
  $goog$object$forEach$$($properties$$, function($val$$19$$, $key$$42$$) {
    "style" == $key$$42$$ ? $element$$18$$.style.cssText = $val$$19$$ : "class" == $key$$42$$ ? $element$$18$$.className = $val$$19$$ : "for" == $key$$42$$ ? $element$$18$$.htmlFor = $val$$19$$ : $key$$42$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$18$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$42$$], $val$$19$$) : 0 == $key$$42$$.lastIndexOf("aria-", 0) ? $element$$18$$.setAttribute($key$$42$$, $val$$19$$) : $element$$18$$[$key$$42$$] = $val$$19$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $goog$dom$append_$$($doc$$12$$, $parent$$6$$, $args$$8$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$6$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$12$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(var $i$$51$$ = 2;$i$$51$$ < $args$$8$$.length;$i$$51$$++) {
    var $arg$$5$$ = $args$$8$$[$i$$51$$];
    $goog$isArrayLike$$($arg$$5$$) && !($goog$isObject$$($arg$$5$$) && 0 < $arg$$5$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$5$$) ? $goog$array$clone$$($arg$$5$$) : $arg$$5$$, $childHandler$$) : $childHandler$$($arg$$5$$)
  }
}
function $goog$dom$isNodeList$$($val$$20$$) {
  if($val$$20$$ && "number" == typeof $val$$20$$.length) {
    if($goog$isObject$$($val$$20$$)) {
      return"function" == typeof $val$$20$$.item || "string" == typeof $val$$20$$.item
    }
    if("function" == $goog$typeOf$$($val$$20$$)) {
      return"function" == typeof $val$$20$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$goog$dom$DomHelper$$.prototype.$createDom$ = function $$goog$dom$DomHelper$$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$54$$) {
  var $doc$$inline_35$$ = this.$document_$, $args$$inline_36$$ = arguments, $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$ = $args$$inline_36$$[0], $attributes$$inline_38$$ = $args$$inline_36$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_38$$ && ($attributes$$inline_38$$.name || $attributes$$inline_38$$.type)) {
    $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$ = ["<", $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$];
    $attributes$$inline_38$$.name && $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_38$$.name), '"');
    if($attributes$$inline_38$$.type) {
      $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_38$$.type), '"');
      var $clone$$inline_40$$ = {};
      $goog$object$extend$$($clone$$inline_40$$, $attributes$$inline_38$$);
      $attributes$$inline_38$$ = $clone$$inline_40$$;
      delete $attributes$$inline_38$$.type
    }
    $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$.push(">");
    $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$ = $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$.join("")
  }
  $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$ = $doc$$inline_35$$.createElement($element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$);
  $attributes$$inline_38$$ && ($goog$isString$$($attributes$$inline_38$$) ? $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$.className = $attributes$$inline_38$$ : "array" == $goog$typeOf$$($attributes$$inline_38$$) ? $goog$dom$classes$add$$.apply(null, [$element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$].concat($attributes$$inline_38$$)) : $goog$dom$setProperties$$($element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$, $attributes$$inline_38$$));
  2 < $args$$inline_36$$.length && $goog$dom$append_$$($doc$$inline_35$$, $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$, $args$$inline_36$$);
  return $element$$inline_41_tagName$$inline_37_tagNameArr$$inline_39$$
};
$goog$dom$DomHelper$$.prototype.createElement = function $$goog$dom$DomHelper$$$$createElement$($name$$59$$) {
  return this.$document_$.createElement($name$$59$$)
};
$goog$dom$DomHelper$$.prototype.createTextNode = function $$goog$dom$DomHelper$$$$createTextNode$($content$$1$$) {
  return this.$document_$.createTextNode($content$$1$$)
};
$goog$dom$DomHelper$$.prototype.appendChild = function $$goog$dom$DomHelper$$$$appendChild$($parent$$7$$, $child$$2$$) {
  $parent$$7$$.appendChild($child$$2$$)
};
function $example$IFrame$$($content$$inline_58_parent$$16$$, $id$$1$$, $content$$3_iframe$$inline_48$$) {
  var $domHelper$$inline_46$$ = $content$$inline_58_parent$$16$$ ? new $goog$dom$DomHelper$$(9 == $content$$inline_58_parent$$16$$.nodeType ? $content$$inline_58_parent$$16$$ : $content$$inline_58_parent$$16$$.ownerDocument || $content$$inline_58_parent$$16$$.document) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$), $contentBuf$$inline_47_doc$$inline_59$$ = [];
  $contentBuf$$inline_47_doc$$inline_59$$.push("<!DOCTYPE html>");
  $contentBuf$$inline_47_doc$$inline_59$$.push("<html><head>", void 0, "</head><body>", $content$$3_iframe$$inline_48$$, "</body></html>");
  $content$$3_iframe$$inline_48$$ = $domHelper$$inline_46$$.$createDom$("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;width:33%;", src:'javascript:""'});
  $content$$inline_58_parent$$16$$.appendChild($content$$3_iframe$$inline_48$$);
  $content$$inline_58_parent$$16$$ = $contentBuf$$inline_47_doc$$inline_59$$.join("");
  $contentBuf$$inline_47_doc$$inline_59$$ = $content$$3_iframe$$inline_48$$.contentDocument || $content$$3_iframe$$inline_48$$.contentWindow.document;
  $contentBuf$$inline_47_doc$$inline_59$$.open();
  $contentBuf$$inline_47_doc$$inline_59$$.write($content$$inline_58_parent$$16$$);
  $contentBuf$$inline_47_doc$$inline_59$$.close();
  iframe = $content$$3_iframe$$inline_48$$;
  iframe.id = $id$$1$$;
  iframe.name = $id$$1$$
}
;$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);
"ScriptEngine" in $goog$global$$ && "JScript" == $goog$global$$.ScriptEngine() && ($goog$global$$.ScriptEngineMajorVersion(), $goog$global$$.ScriptEngineMinorVersion(), $goog$global$$.ScriptEngineBuildVersion());
function $soy$$0$0escapeHtml$$($value$$58$$) {
  return"object" === typeof $value$$58$$ && $value$$58$$ && 0 === $value$$58$$.$contentKind$ ? $value$$58$$.content : ("" + $value$$58$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$)
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\u000c":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$6$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$6$$]
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
function $example$templates$iframe$$($opt_data$$3$$) {
  return"\t" + ($opt_data$$3$$.debug ? '<script src="http://localhost:9810/compile?id=inframe"><\/script>' : '<script src="inframe.js"><\/script>') + '<div id="background" style="background-color:' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$srccolor$) + '"><center><h1>' + $soy$$0$0escapeHtml$$($opt_data$$3$$.$srciframe$) + "</h1><button onclick=\"changeColor('" + $soy$$0$0escapeHtml$$($opt_data$$3$$.$dstiframe$) + "', '" + $soy$$0$0escapeHtml$$($opt_data$$3$$.$dstcolor$) + "')\">" + $soy$$0$0escapeHtml$$($opt_data$$3$$.$dstiframe$) + 
  " to " + $soy$$0$0escapeHtml$$($opt_data$$3$$.$dstcolor$) + "</button></center>"
}
;function $opt_object$$inline_61$$() {
  var $contPars$$ = {$srciframe$:"iframe1", $dstiframe$:"iframe2", $srccolor$:"red", $dstcolor$:"orange", debug:$JSCompiler_alias_FALSE$$};
  new $example$IFrame$$($goog$isString$$("if1") ? document.getElementById("if1") : "if1", "iframe1", $example$templates$iframe$$($contPars$$));
  $contPars$$ = {$srciframe$:"iframe2", $dstiframe$:"iframe3", $srccolor$:"blue", $dstcolor$:"yellow", debug:$JSCompiler_alias_FALSE$$};
  new $example$IFrame$$($goog$isString$$("if2") ? document.getElementById("if2") : "if2", "iframe2", $example$templates$iframe$$($contPars$$));
  $contPars$$ = {$srciframe$:"iframe3", $dstiframe$:"iframe2", $srccolor$:"green", $dstcolor$:"pink", debug:$JSCompiler_alias_FALSE$$};
  new $example$IFrame$$($goog$isString$$("if3") ? document.getElementById("if3") : "if3", "iframe3", $example$templates$iframe$$($contPars$$))
}
var $parts$$inline_62$$ = ["main"], $cur$$inline_63$$ = $goog$global$$;
!($parts$$inline_62$$[0] in $cur$$inline_63$$) && $cur$$inline_63$$.execScript && $cur$$inline_63$$.execScript("var " + $parts$$inline_62$$[0]);
for(var $part$$inline_64$$;$parts$$inline_62$$.length && ($part$$inline_64$$ = $parts$$inline_62$$.shift());) {
  !$parts$$inline_62$$.length && void 0 !== $opt_object$$inline_61$$ ? $cur$$inline_63$$[$part$$inline_64$$] = $opt_object$$inline_61$$ : $cur$$inline_63$$ = $cur$$inline_63$$[$part$$inline_64$$] ? $cur$$inline_63$$[$part$$inline_64$$] : $cur$$inline_63$$[$part$$inline_64$$] = {}
}
;
