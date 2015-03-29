(function() {

    // Never change baseUrl, will break typescript modules loading
    require(['scripts/App'], function (app) {
        app.run();
    });
}());