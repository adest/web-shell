/**
 * Created by Adrien on 23/03/2015.
 */
/// <reference path="../../test/vendor/jasmine-2.1.1/jasmine.d.ts" />

import shellLib = require('www/scripts/webshell/Shell');
import appenders = require('www/scripts/webshell/Appenders');

import Shell = shellLib.Shell;

describe("a Shell", () =>{
    var shell: Shell;

    beforeEach(() => {
        shell = Shell.createDefault();
        spyOn(shell, 'handleKeyword');
    });

    it("accept user input and delegate the handling of keywords", () => {
        var keyboarding = "Une entree simple.";
        shell.input = keyboarding;
        shell.handleInput();

        expect(shell.handleKeyword).toHaveBeenCalledWith(shell.output, keyboarding);
    });
});