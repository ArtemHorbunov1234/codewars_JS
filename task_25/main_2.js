function countPositivesSumNegatives(input) {
    let numberPlus = [];
    let sumMinus = 0;
    const array = [];
    if (input === null || (input.length - 1 === 0 && input[0] === 0)) {
        return array;
    }

    if (input.length > 0) {
        for (const a of input) {
            if (a > 0) {
                numberPlus.push(a);
            } else {
                sumMinus += a;
            }
        }
    } else {
        return array;
    }

    let arrayNumbers = numberPlus.length;
    array.push(arrayNumbers);
    array.push(sumMinus);
    return array;
}

console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives([null]));
