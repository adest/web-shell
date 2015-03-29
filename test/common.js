(function() {
    require.config({
        baseUrl: '../www',
        paths: {
            'jasmine': '../test/vendor/jasmine-2.1.1/jasmine',
            'jasmine-html': '../test/vendor/jasmine-2.1.1/jasmine-html',
            'boot': '../test/vendor/jasmine-2.1.1/boot'
        },
        shim: {
            'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
            }
        }
    });


    require(['boot'], function(){
        // Load the specs
        require([
            '../test/unit-spec/ShellSpec',
            '../test/unit-spec/KeywordSpec'

        ], function () {

            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
}());