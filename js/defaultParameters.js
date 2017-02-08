import $ from 'jquery';
//es5
export function defaultParametersES5(x,y) {
    var a = x || 1;
    var b = y || 1;
    console.log("es5",a+b);
    $('#1-es5>span').text(a+b);
}

//es6
export function defaultParametersES6(x=1,y=1) {
    console.log("es6",x+y);
    $('#1-es6>span').text(x+y);
}
