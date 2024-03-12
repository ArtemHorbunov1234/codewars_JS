class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(count) {
        const i = this.x + count.x;
        const g = this.y + count.y;
        return new Vector(i, g);
    }
}

const a = new Vector(-3, 5);
const b = new Vector(-1, 2);
const c = a.add(b);
console.log(c.x);
