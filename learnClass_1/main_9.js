class Cat extends Animal {
    constructor(value) {
        super(value);
    }
    speak() {
        return `${this.name} meows.`;
    }
}
let cat = new Cat('Mr Whiskers');
console.log(cat.speak());
