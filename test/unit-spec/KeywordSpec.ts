/**
 * Created by Adrien on 28/03/2015.
 */

/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import keyword = require('www/scripts/webshell/Keyword');
import appenders = require('www/scripts/webshell/Appenders');


describe("a handleKeyword method", () =>{

    var handleKeyword: keyword.HandleKeyword;
    var handler: appenders.Handler;

    beforeEach(() => {
        handleKeyword = keyword.handleKeyword;
        handler = <appenders.Handler> {
            print(...line: appenders.Appendable[]): void {

            }
        };

        spyOn(handler, 'print');
    });

    it("can be called with an input and callback the handler with a text", () => {
        var keyboarding = "Une entree simple.";
        handleKeyword(handler, keyboarding);

        expect(handler.print).toHaveBeenCalledWith(new appenders.Text(keyboarding));
    });
});