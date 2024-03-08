//1) Task
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}

var n = new NameMe('John', 'Doe');
n.firstName;
n.lastName;
// console.log(n.name);

//2) Task
class Cube {
    constructor(side) {
        this.side = Math.abs(side);
    }

    getSide() {
        return !this.side ? 0 : this.side;
    }
    setSide(n) {
        return (this.side = Math.abs(n));
    }
}
let cube = new Cube(-12);
// console.log(cube.setSide(1));
//3) Task
class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        return this.draft - this.crew * 1.5 > 20;
    }
}
const aWorthyShip = new Ship(100, 20);

// console.log(aWorthyShip.isWorthIt());

//4) Task
class Class {
    static _foo = 42;

    static get foo() {
        return Class._foo;
    }
}
console.log(Class.foo);
