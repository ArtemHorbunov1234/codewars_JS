class Person {
    constructor(name) {
        this.name = name;
    }

    greet(string) {
        return `Hello ${string}, my name is ${this.name}`;
    }
}
