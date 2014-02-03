var $goog$global$$ = this;
Math.floor(2147483648 * Math.random()).toString(36);
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : null
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = !1;
var $ua$$inline_13$$;
if($ua$$inline_13$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_14$$ = $goog$global$$.navigator;
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_13$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_13$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_13$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_14$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_16$$ = "", $re$$inline_17$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_18$$ = $goog$global$$.opera.version, $version$$inline_16$$ = "function" == typeof $operaVersion$$inline_18$$ ? $operaVersion$$inline_18$$() : $operaVersion$$inline_18$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_17$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_17$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_17$$ = /WebKit\/(\S+)/), $re$$inline_17$$) {
      var $arr$$inline_19$$ = $re$$inline_17$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_16$$ = $arr$$inline_19$$ ? $arr$$inline_19$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_20$$, $doc$$inline_74$$ = $goog$global$$.document;
    $docMode$$inline_20$$ = $doc$$inline_74$$ ? $doc$$inline_74$$.documentMode : void 0;
    if($docMode$$inline_20$$ > parseFloat($version$$inline_16$$)) {
      $goog$userAgent$VERSION$$ = "" + $docMode$$inline_20$$;
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_16$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$3_order$$inline_24$$;
  if(!($JSCompiler_temp$$3_order$$inline_24$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$3_order$$inline_24$$ = 0;
    for(var $v1Subs$$inline_25$$ = ("" + $goog$userAgent$VERSION$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $v2Subs$$inline_26$$ = ("" + $version$$8$$).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), $subCount$$inline_27$$ = Math.max($v1Subs$$inline_25$$.length, $v2Subs$$inline_26$$.length), $subIdx$$inline_28$$ = 0;0 == $JSCompiler_temp$$3_order$$inline_24$$ && $subIdx$$inline_28$$ < $subCount$$inline_27$$;$subIdx$$inline_28$$++) {
      var $v1Sub$$inline_29$$ = $v1Subs$$inline_25$$[$subIdx$$inline_28$$] || "", $v2Sub$$inline_30$$ = $v2Subs$$inline_26$$[$subIdx$$inline_28$$] || "", $v1CompParser$$inline_31$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_32$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_33$$ = $v1CompParser$$inline_31$$.exec($v1Sub$$inline_29$$) || ["", "", ""], $v2Comp$$inline_34$$ = $v2CompParser$$inline_32$$.exec($v2Sub$$inline_30$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_33$$[0].length && 0 == $v2Comp$$inline_34$$[0].length) {
          break
        }
        $JSCompiler_temp$$3_order$$inline_24$$ = ((0 == $v1Comp$$inline_33$$[1].length ? 0 : parseInt($v1Comp$$inline_33$$[1], 10)) < (0 == $v2Comp$$inline_34$$[1].length ? 0 : parseInt($v2Comp$$inline_34$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_33$$[1].length ? 0 : parseInt($v1Comp$$inline_33$$[1], 10)) > (0 == $v2Comp$$inline_34$$[1].length ? 0 : parseInt($v2Comp$$inline_34$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_33$$[2].length) < (0 == $v2Comp$$inline_34$$[2].length) ? -1 : (0 == $v1Comp$$inline_33$$[2].length) > 
        (0 == $v2Comp$$inline_34$$[2].length) ? 1 : 0) || ($v1Comp$$inline_33$$[2] < $v2Comp$$inline_34$$[2] ? -1 : $v1Comp$$inline_33$$[2] > $v2Comp$$inline_34$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$3_order$$inline_24$$)
    }
    $JSCompiler_temp$$3_order$$inline_24$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$3_order$$inline_24$$
  }
  return $JSCompiler_temp$$3_order$$inline_24$$
}
var $goog$userAgent$isDocumentModeCache_$$ = {};
function $goog$userAgent$isDocumentMode$$() {
  return $goog$userAgent$isDocumentModeCache_$$[9] || ($goog$userAgent$isDocumentModeCache_$$[9] = $goog$userAgent$IE$$ && !!document.documentMode && 9 <= document.documentMode)
}
;!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
!$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$isDocumentMode$$() || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
!$goog$userAgent$IE$$ || $goog$userAgent$isDocumentMode$$();
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
!$goog$userAgent$GECKO$$ || $goog$userAgent$isVersion$$("8");
function $opt_object$$inline_79$$($iframe$$3$$, $color$$2$$) {
  var $iframeEl$$inline_68_node$$inline_77$$ = parent, $iframeEl$$inline_68_node$$inline_77$$ = (9 == $iframeEl$$inline_68_node$$inline_77$$.nodeType ? $iframeEl$$inline_68_node$$inline_77$$ : $iframeEl$$inline_68_node$$inline_77$$.ownerDocument || $iframeEl$$inline_68_node$$inline_77$$.document).getElementById($iframe$$3$$);
  ($iframeEl$$inline_68_node$$inline_77$$.contentDocument || $iframeEl$$inline_68_node$$inline_77$$.contentWindow.document).getElementById("background").style.backgroundColor = $color$$2$$
}
var $parts$$inline_80$$ = ["changeColor"], $cur$$inline_81$$ = $goog$global$$;
!($parts$$inline_80$$[0] in $cur$$inline_81$$) && $cur$$inline_81$$.execScript && $cur$$inline_81$$.execScript("var " + $parts$$inline_80$$[0]);
for(var $part$$inline_82$$;$parts$$inline_80$$.length && ($part$$inline_82$$ = $parts$$inline_80$$.shift());) {
  !$parts$$inline_80$$.length && void 0 !== $opt_object$$inline_79$$ ? $cur$$inline_81$$[$part$$inline_82$$] = $opt_object$$inline_79$$ : $cur$$inline_81$$ = $cur$$inline_81$$[$part$$inline_82$$] ? $cur$$inline_81$$[$part$$inline_82$$] : $cur$$inline_81$$[$part$$inline_82$$] = {}
}
;
