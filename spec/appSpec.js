define(function(require) {

    var app = require('../src/app.js');

    describe('First Test', function() {

        it('1 to I', function() {
            expect(app.convert(1)).toEqual('I');
        });
    });

});