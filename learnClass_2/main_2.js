class Count {
    #num;
    constructor(num) {
        this.#num = num;
    }

    get getCount() {
        this.#num = 1;
        return this.#num;
    }
}

let Box = new Count();

console.log(Box.getCount);
const isInstanceOfClass = myObject instanceof MyClass;
