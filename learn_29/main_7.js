function sumTwoSmallestNumbers(numbers) {
    if (numbers === undefined) {
        return 13;
    }
    const array = numbers.sort((a, b) => a - b);
    return array[0] + array[1];
}

console.log(sumTwoSmallestNumbers());
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
