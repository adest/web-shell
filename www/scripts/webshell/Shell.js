/**
 * Created by Adrien on 23/03/2015.
 */
define(["require", "exports", './Keyword', './Appenders'], function (require, exports, keyword, appenders) {
    var Text = appenders.Text;
    var Line = appenders.Line;
    var Word = appenders.Word;
    /**
     * The Shell class
     * can handle user inputs and delegate the output to the provided Keyword module.
     */
    var Shell = (function () {
        function Shell(handleKeyword) {
            this.handleKeyword = handleKeyword;
            this.output = new ConsoleHandler();
        }
        Shell.createDefault = function () {
            return new Shell(keyword.handleKeyword);
        };
        Shell.prototype.handleInput = function () {
            this.handleKeyword(this.output, this.input);
        };
        return Shell;
    })();
    exports.Shell = Shell;
    /**
     * private class that print console output on the browser console.log().
     * emulate the console.log() method if not present in the dom.
     */
    var ConsoleHandler = (function () {
        function ConsoleHandler() {
            // emulate console.log for older browser or node.js I guess ?
            if (!window.console) {
                window.console = {
                    log: function () {
                    }
                };
            }
        }
        ConsoleHandler.prototype.print = function () {
            var _this = this;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i - 0] = arguments[_i];
            }
            var reduced = items.reduce(function (text, item) {
                if (item instanceof Line)
                    _this.append(item, text);
                else if (item instanceof Text)
                    text = text + item.text;
                else
                    console.log('Unknown type of Appendable');
                return text;
            }, "");
            console.log(reduced);
        };
        ConsoleHandler.prototype.append = function (line, text) {
            text = text + line.items.reduce(function (text, item) {
                if (item instanceof Word)
                    text = text + ' ' + item.word;
                else
                    console.log('Unknown type of LineItem');
                return text;
            }, "");
        };
        return ConsoleHandler;
    })();
});
//# sourceMappingURL=Shell.js.map