define(function(require) {

    function convert(number) {
        var returnedString = '';

        function convertUnder3() {
            for (var i = 0; i < number; i++) {
                returnedString = returnedString + 'I';
            }
        }

        if(number < 4) {
            convertUnder3();
        } else {
            if(number % 5 === 0) {
                returnedString = 'V';
            } else if(number % 5 === 1) {
                returnedString =  'VI';
            } else {
                returnedString = 'IV';
            }
        }

        return returnedString;
    }

    return {
        convert: convert
    };

});