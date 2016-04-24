define(function(require) {

    function convert(number) {
        var returnedString = '';

        if(number < 4) {
            returnedString = convertUnder3(number);
        } else if(number < 9) {
            returnedString = convertOver3(number, 'V');
        } else if (number < 40) {
            returnedString = convertOver3(number, 'X');
        } else {
            returnedString = convertOver3(number, 'L');
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

    function convertOver3(number, letter) {
        var tempString = '';
        if(number === 40) {
            return tempString = 'XL'
        }
        if(number > 10) {
            tempString = letter + convert(number - 10);
        } else {
            if (number % 5 === 0 && number < 11){
                tempString = letter;
            } else if (number % 5 < 4) {
                if(number < 10) {
                    tempString = letter + convertUnder3(number - 5);
                } else {
                    tempString = letter + convertUnder3(number - 10);
                }
            } else {
                tempString = 'I' + letter;
            }
        }

        return tempString
    }

    return {
        convert: convert
    };

});