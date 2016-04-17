define(function(require) {

    function convert(number) {
        var returnedString = '';
        for(var i = 0; i < number; i++) {
            returnedString = returnedString + 'I';
        }
        
        return returnedString;
    }

    return {
        convert: convert
    };

});