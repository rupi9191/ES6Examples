// es5 - for constants

export var URL = 'http://google.com';

//es6 - constants

export const BASE_URL = 'http://rakuten.com';

//introduction to let keyword
//es5
export const es5Scoping = function () {
    if(true) {
        var name = "Rupesh";
    }
    console.log("es5-scoping",name);
    return name;
};
//es6
export const es6Scoping = function() {
    if(true) {
        let name = "Rupesh";
    }
    console.log("es6-scoping",name);
    return name;
};
