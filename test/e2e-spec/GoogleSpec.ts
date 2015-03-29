/**
 * Created by Adrien on 29/03/2015.
 */

/// <reference path="../../typings/tsd.d.ts"/>

describe('Google web site', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.fr');
    })

    it('is titled with Google', () => {
        expect(browser.getTitle()).toBe('Google');
    });
});