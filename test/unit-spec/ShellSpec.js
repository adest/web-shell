/**
 * Created by Adrien on 23/03/2015.
 */
define(["require", "exports", 'www/scripts/webshell/Shell'], function (require, exports, shellLib) {
    var Shell = shellLib.Shell;
    describe("a Shell", function () {
        var shell;
        beforeEach(function () {
            shell = Shell.createDefault();
            spyOn(shell, 'handleKeyword');
        });
        it("accept user input and delegate the handling of keywords", function () {
            var keyboarding = "Une entree simple.";
            shell.input = keyboarding;
            shell.handleInput();
            expect(shell.handleKeyword).toHaveBeenCalledWith(shell.output, keyboarding);
        });
    });
});
//# sourceMappingURL=ShellSpec.js.map