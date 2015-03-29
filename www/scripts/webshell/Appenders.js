/**
 * Created by Adrien on 28/03/2015.
 */
define(["require", "exports"], function (require, exports) {
    /**
     * Text implementation of an Appendable that will print a text.
     */
    var Text = (function () {
        function Text(text) {
            this.text = text;
        }
        return Text;
    })();
    exports.Text = Text;
    /**
     * Line implementation of an appendable that will print a list of child items in a line.
     */
    var Line = (function () {
        function Line() {
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i - 0] = arguments[_i];
            }
            this.items = items;
        }
        return Line;
    })();
    exports.Line = Line;
    /**
     * Word implementation of a LineItem that will print a word followed by a space.
     * Should take a color attribute
     * Should be aggregated in a Line object.
     */
    var Word = (function () {
        function Word(word, color) {
            this.word = word;
            this.color = color;
        }
        return Word;
    })();
    exports.Word = Word;
});
//# sourceMappingURL=Appenders.js.map