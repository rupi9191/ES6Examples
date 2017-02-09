//es5 - spread operator
const explicitCall = function(a, b, c) {
    console.log("Outpur:", "a:"+a + "b:" +b + "c:" +c);
};
export const es5SpreadOperator = function () {
    var arr1 = [1,2], arr2 = [3,4];
    arr1 = arr1.concat(arr2);
    console.log("es5-spread", arr1);
    return arr1;
};

//es6
export const es6SpreadOperator = function () {
    let  arr2 = [3,4];
    let arr1 = [1, 2, ...arr2];
    console.log("es6-spread", arr1);
    return arr1;
};
