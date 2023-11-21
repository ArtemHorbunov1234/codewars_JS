function sumArray(array) {
    if (array === null || array === undefined || array.length <= 2) {
        return 0;
    }

    let countMax = array[0];
    let countMin = array[0];

    for (const a of array) {
        if (a > countMax) {
            countMax = a;
        } else if (a < countMin) {
            countMin = a;
        }
    }
    const arrayNumbers = [];

    let indexMax = array.indexOf(countMax);

    let indexMin = array.indexOf(countMin);
    for (let b = 0; b < array.length; b++) {
        if (indexMax === b) {
            arrayNumbers.push(false);
        } else if (indexMin === b) {
            arrayNumbers.push(false);
        } else {
            arrayNumbers.push(array[b]);
        }
    }

    return arrayNumbers.filter((a) => a !== false).reduce((a, b) => a + b, 0);
}

console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray([]));
console.log(sumArray([null]));
console.log(sumArray(undefined));
