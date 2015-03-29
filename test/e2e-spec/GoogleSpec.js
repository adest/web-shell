/**
 * Created by Adrien on 29/03/2015.
 */
/// <reference path="../../typings/tsd.d.ts"/>
describe('Google web site', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.fr');
    });
    it('is titled with Google', function () {
        expect(browser.getTitle()).toBe('Google');
    });
});
//# sourceMappingURL=GoogleSpec.js.map