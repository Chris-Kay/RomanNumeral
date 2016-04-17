define(function(require) {

    function convert(number) {
        var returnedString = '';

        if(number < 4) {
            returnedString = convertUnder3(number);
        } else {
            if(number % 5 === 0) {
                returnedString = 'V';
            } else if(number % 5 < 4) {
                returnedString = 'V' + convertUnder3(number - 5);
            } else {
                returnedString = 'IV';
            }
        }

        return returnedString;
    }

    function convertUnder3(number) {
        var tempString = '';
        for (var i = 0; i < number; i++) {
            tempString = tempString + 'I';
        }
        return tempString;
    }

    return {
        convert: convert
    };

});