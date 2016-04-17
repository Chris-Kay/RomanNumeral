define(function(require) {

    function convert(number) {
        var returnedString = '';
        if(number < 4) {
            for (var i = 0; i < number; i++) {
                returnedString = returnedString + 'I';
            }
        } else {
            return 'IV';
        }

        return returnedString;
    }

    return {
        convert: convert
    };

});