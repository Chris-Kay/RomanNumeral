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
            expect(app.convert(3)).toEqual('III');
        });

        it('4 into IV', function() {
            expect(app.convert(4)).toEqual('IV');
        });

        it('5 into V', function() {
            expect(app.convert(5)).toEqual('V');
        });

        it('6 into VI', function() {
            expect(app.convert(6)).toEqual('VI');
        });

        it('7 into VII', function() {
            expect(app.convert(7)).toEqual('VII');
        });

        it('8 into VIII', function() {
            expect(app.convert(8)).toEqual('VIII');
        });

        it('9 into IX', function() {
            expect(app.convert(9)).toEqual('IX');
        });

        it('10 into X', function() {
            expect(app.convert(10)).toEqual('X');
        });

    });

});