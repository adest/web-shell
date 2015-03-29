describe('homepage', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.fr');
    });

    it('should find title element', function() {

        expect( browser.getTitle()).toEqual('Google');
    });
});