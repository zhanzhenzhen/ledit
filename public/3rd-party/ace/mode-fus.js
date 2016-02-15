ace.define("ace/mode/fus",["require","exports","module","ace/lib/oop","ace/mode/text"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;

var editorValue = null;
var lineStyles = null;
var lineSymbolsMap = null;

var currentLineSymbolNumber = 0;
var createLineSymbol = function() {
    var r = currentLineSymbolNumber.toString();
    currentLineSymbolNumber++;
    return r;
};

var update = function() {
    var newValue = editor.getValue();
    if (newValue !== editorValue) {
        try {
            var output = fusApi.generateOutput({
                code: newValue,
                path: "/main.fus",
                generatesStyles: true,
                level: fusApi.OutputLevel.exports
            });
        }
        catch (ex) {
            lineStyles = null;
            editorValue = newValue;
            return;
        }
        var styles = output.styles;
        editorValue = newValue;
        if (styles === undefined) {
            lineStyles = null;
            return;
        }

        if (true) {
            var lineIndex = 0;
            var lines = [];
            var oldNewlineIndex = -1;
            var i, j;
            for (i = 0; i < editorValue.length; i++) {
                if (editorValue[i] === "\n") {
                    lines.push({
                        symbol: createLineSymbol(),
                        startIndex: oldNewlineIndex + 1,
                        endIndex: i - 1,
                        styles: [],
                        index: lines.length
                    });
                    oldNewlineIndex = i;
                }
            }
            if (editorValue[editorValue.length - 1] !== "\n") {
                lines.push({
                    symbol: createLineSymbol(),
                    startIndex: oldNewlineIndex + 1,
                    endIndex: editorValue.length - 1,
                    styles: [],
                    index: lines.length
                });
            }
            lineSymbolsMap = {};
            for (i = 0; i < lines.length; i++) {
                lineSymbolsMap[lines[i].symbol] = lines[i];
            }

            var startIndex, endIndex;
            i = 0;
            j = 0;
            while (i < lines.length && j < styles.length) {
                if (styles[j][0] >= lines[i].startIndex) {
                    startIndex = styles[j][0];
                }
                else {
                    startIndex = lines[i].startIndex;
                }
                if (styles[j + 1] !== undefined) {
                    if (lines[i + 1] !== undefined) {
                        if (styles[j + 1][0] < lines[i + 1].startIndex) {
                            endIndex = styles[j + 1][0] - 1;
                        }
                        else {
                            endIndex = lines[i].endIndex;
                        }
                    }
                    else {
                        endIndex = styles[j + 1][0] - 1;
                    }
                }
                else {
                    endIndex = lines[i].endIndex;
                }
                lines[i].styles.push({
                    startIndex: startIndex,
                    endIndex: endIndex,
                    style: styles[j][1]
                });
                if (
                    styles[j + 1] !== undefined &&
                    lines[i + 1] !== undefined &&
                    styles[j + 1][0] <= lines[i + 1].startIndex
                ) {
                    j++;
                }
                else if (
                    styles[j + 1] !== undefined &&
                    lines[i + 1] === undefined
                ) {
                    j++;
                }
                if (endIndex === lines[i].endIndex) i++;
            }

            lineStyles = lines;
        }
    }
}

var FusLexer = function() {
    this.tokens = [];
    this.getLineTokens = function(line, state, row) {
        update();
        var tokens;
        if (lineStyles === null) {
            return {
                tokens: [{type: "text", value: line}],
                state: "start"
            };
        }
        if (lineStyles[row] !== undefined && lineStyles[row].startIndex <= lineStyles[row].endIndex) {
            var styles = lineStyles[row].styles;
            tokens = styles.map(function(style){
                var type;
                if (style.style === 0) {
                    type = "text";
                }
                else if (style.style === 1) {
                    type = "keyword";
                }
                else if (style.style === 2) {
                    type = "string";
                }
                else if (style.style === 3) {
                    type = "comment";
                }
                else if (style.style === 4) {
                    type = "support.function";
                }
                else {
                    type = "text";
                }
                return {
                    type: type,
                    value: editorValue.substr(style.startIndex, style.endIndex - style.startIndex + 1)
                };
            });
        }
        else {
            tokens = [];
        }
        return {
            tokens: tokens,
            state: "start"
        };
    };
};

var Mode = function() {
    this.$tokenizer = new FusLexer();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/fus";
}).call(Mode.prototype);

exports.Mode = Mode;
});
