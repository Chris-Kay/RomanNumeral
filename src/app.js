define(function(require) {

    function convert(number) {

        if(number < 1){ return "";}
        if(number >= 100){ return "C" + convert(number - 100);}
        if(number >= 90){ return "XC" + convert(number - 90);}
        if(number >= 50){ return "L" + convert(number - 50);}
        if(number >= 40){ return "XL" + convert(number - 40);}
        if(number >= 10){ return "X" + convert(number - 10);}
        if(number >= 9){ return "IX" + convert(number - 9);}
        if(number >= 5){ return "V" + convert(number - 5);}
        if(number >= 4){ return "IV" + convert(number - 4);}
        if(number >= 1){ return "I" + convert(number - 1);}  
    }

    return {
        convert: convert
    };

});