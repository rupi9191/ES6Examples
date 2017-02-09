//es5 - destructuring a object
export const es5Destructuring = function(){
    var person = {name: "Rupesh",age: 25,rank: 1};
    var name = person.name;
    var age = person.age;
    console.log("es5-destructuring",name);
    return name;
};
//es6- destructuring
export const es6Destructuring = function() {
    const person = {name: "Rupesh",age: 25,rank: 1};
    const { name, age} = person;
    console.log("es6-destructuring", name);
    return name;
};
