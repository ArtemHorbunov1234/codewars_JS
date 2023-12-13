class Count {
    constructor(object) {
        this.count_1 = object[0];
        this.count_2 = object[2];
        this.count_3 = object[4];
    }
    set vm(object) {
        if (this.count_1 === undefined) {
            this.version = '0.0.1';
        }
    }

    // minor() {}
}

let box = new Count('0');
console.log(box);
