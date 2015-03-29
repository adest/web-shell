(function() {
    require.config({
        baseUrl: '',
        paths: {
            'jasmine': '../node_modules/jasmine-core/lib/jasmine-core/jasmine',
            'jasmine-html': '../node_modules/jasmine-core/lib/jasmine-core/jasmine-html',
            'boot': '../node_modules/jasmine-core/lib/jasmine-core/boot',
            'www/scripts/webshell/Shell': '../www/scripts/webshell/Shell',
            'www/scripts/webshell/Keyword': '../www/scripts/webshell/Keyword',
            'www/scripts/webshell/Appenders': '../www/scripts/webshell/Appenders'
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