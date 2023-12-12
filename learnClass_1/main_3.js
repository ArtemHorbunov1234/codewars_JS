class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

let john = new Person();
console.log(john.sayFullName());

let jane = new Person('Jane', 'Doe', 25, 'Female');
console.log(jane.sayFullName());

console.log(Person.greetExtraTerrestrials('Martians'));
