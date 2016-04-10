requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['main'], function (App) {
    var app = new App();
    app.render();
});

function testFunction() {
    return 4;
}
