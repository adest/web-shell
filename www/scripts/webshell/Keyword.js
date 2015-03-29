define(["require", "exports", './Appenders'], function (require, exports, appenders) {
    var Line = appenders.Line;
    var Text = appenders.Text;
    /**
     * default handleKeyword method,
     * only output text with the provided input
     * @param handler The handler callback that will print the output
     * @param input The provided input. Should came from user console input
     */
    exports.handleKeyword = function (handler, input) {
        handler.print(new Text(input));
    };
    /**
     * For test purpose only
     * @param handler
     * @param input
     */
    exports.handleUnknownKeyword = function (handler, input) {
        handler.print(new Text(input), new UnknownAppendable(), new Line(new UnknownLineItem()));
    };
    var UnknownAppendable = (function () {
        function UnknownAppendable() {
        }
        return UnknownAppendable;
    })();
    var UnknownLineItem = (function () {
        function UnknownLineItem() {
        }
        return UnknownLineItem;
    })();
});
//# sourceMappingURL=Keyword.js.map