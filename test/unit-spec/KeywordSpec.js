/**
 * Created by Adrien on 28/03/2015.
 */
define(["require", "exports", 'www/scripts/webshell/Keyword', 'www/scripts/webshell/Appenders'], function (require, exports, keyword, appenders) {
    describe("a handleKeyword method", function () {
        var handleKeyword;
        var handler;
        beforeEach(function () {
            handleKeyword = keyword.handleKeyword;
            handler = {
                print: function () {
                    var line = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        line[_i - 0] = arguments[_i];
                    }
                }
            };
            spyOn(handler, 'print');
        });
        it("can be called with an input and callback the handler with a text", function () {
            var keyboarding = "Une entree simple.";
            handleKeyword(handler, keyboarding);
            expect(handler.print).toHaveBeenCalledWith(new appenders.Text(keyboarding));
        });
    });
});
//# sourceMappingURL=KeywordSpec.js.map