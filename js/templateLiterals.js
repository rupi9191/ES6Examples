//es5
export function defaultParametersES5(x,y) {
    var a = x || 1;
    var b = y || 1;
    console.log("es5",a+b);
    return a+b;
}

export function templateLiteralsES5() {
    let first = "Rupesh", last = "B";
    console.log("es5","My name is"+ " " + first+ " "+ last);
    return "My name is"+ " " + first+ " "+ last;
};

export function templateLiteralsES6() {
    let first = "Rupesh", last = "B";
    console.log("es6",`My name is ${first} ${last}`);
    return `My name is ${first} ${last}`;
};
