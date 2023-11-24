function queueTime(customers, n) {
    let array = [];
    let count = 0;
    let numLength = customers.length;

    if (numLength === 0) {
        return 0;
    } else if (n === 1) {
        return customers.reduce((a, b) => a + b, 0);
    }
    for (let a = 0; a < customers.length; a++) {
        array.push(customers[a]);
        while (array.length === n) {
            array = array.map((a) => a - 1).filter((a) => a !== 0);
            count++;
        }
        while (a === customers.length - 1 && array.length > 0) {
            array = array.map((a) => a - 1).filter((a) => a !== 0);
            count++;
        }
    }
    return count;
}

console.log(queueTime([2, 2], 2));
console.log(queueTime([2], 5));
