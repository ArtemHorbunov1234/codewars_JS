class Block {
    constructor(data) {
        this.with = data[0];
        this.length = data[1];
        this.height = data[2];
    }
    getWidth() {
        return this.with;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.with * this.length * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.with * this.length + this.length * this.height + this.with * this.height);
    }
}

let Box = new Block([2, 4, 6]);
console.log(Box.getSurfaceArea());
