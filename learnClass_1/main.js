class Container {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(this.name);
    }
}

let Box = new Container('Артем', 26);
console.log(Box);
