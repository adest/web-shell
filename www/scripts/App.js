/**
 * Created by Adrien on 29/03/2015.
 */
define(["require", "exports", './webshell/Shell', './webshell/Keyword'], function (require, exports, Shell, keyword) {
    function run() {
        var shell = new Shell.Shell(keyword.handleUnknownKeyword);
        shell.input = 'toto';
        shell.handleInput();
    }
    exports.run = run;
});
//# sourceMappingURL=App.js.map