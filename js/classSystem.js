export let PersonES5 = function(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    };
};

//es6
export class PersonES6 {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
