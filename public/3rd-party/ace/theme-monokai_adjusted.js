ace.define("ace/theme/monokai_adjusted",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-monokai-adjusted";
exports.cssText = ".ace-monokai-adjusted .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-monokai-adjusted .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-monokai-adjusted {\
background-color: #272822;\
color: #F3F3EC\
}\
.ace-monokai-adjusted .ace_cursor {\
color: #F8F8F0\
}\
.ace-monokai-adjusted .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-monokai-adjusted.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-monokai-adjusted .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-monokai-adjusted .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-monokai-adjusted .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-monokai-adjusted .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-monokai-adjusted .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-monokai-adjusted .ace_invisible {\
color: #52524d\
}\
.ace-monokai-adjusted .ace_entity.ace_name.ace_tag,\
.ace-monokai-adjusted .ace_keyword,\
.ace-monokai-adjusted .ace_meta.ace_tag,\
.ace-monokai-adjusted .ace_storage {\
color: #F92672\
}\
.ace-monokai-adjusted .ace_punctuation,\
.ace-monokai-adjusted .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-monokai-adjusted .ace_constant.ace_character,\
.ace-monokai-adjusted .ace_constant.ace_language,\
.ace-monokai-adjusted .ace_constant.ace_numeric,\
.ace-monokai-adjusted .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-monokai-adjusted .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-monokai-adjusted .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-monokai-adjusted .ace_support.ace_constant,\
.ace-monokai-adjusted .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-monokai-adjusted .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-monokai-adjusted .ace_storage.ace_type,\
.ace-monokai-adjusted .ace_support.ace_class,\
.ace-monokai-adjusted .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-monokai-adjusted .ace_entity.ace_name.ace_function,\
.ace-monokai-adjusted .ace_entity.ace_other,\
.ace-monokai-adjusted .ace_entity.ace_other.ace_attribute-name,\
.ace-monokai-adjusted .ace_variable {\
color: #A6E22E\
}\
.ace-monokai-adjusted .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-monokai-adjusted .ace_string {\
color: #E7D374\
}\
.ace-monokai-adjusted .ace_comment {\
color: #807E70\
}\
.ace-monokai-adjusted .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
