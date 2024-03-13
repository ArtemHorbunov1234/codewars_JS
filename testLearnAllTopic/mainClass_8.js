class Block {
    constructor(data) {
        this.width = data[0];
        this.length = data[1];
        this.height = data[2];
    }

    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
    getHeight() {
        return this.height;
    }
    getVolume() {
        return this.width * this.length * this.height;
    }
    getSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const a = new Block([2, 4, 6]);
console.log(a.getSurfaceArea());
