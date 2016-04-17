define(function(require) {

    var app = require('../src/app.js');

    describe('First Test', function() {

        it('1 to I', function() {
            expect(app.convert(1)).toEqual('I');
        });

        it('2 to II', function() {
            expect(app.convert(2)).toEqual('II');
        });

        it('3 to III', function() {
            expect(app.convert(2)).toEqual('II');
        });


    });

});