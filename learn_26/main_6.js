function sortArray(array) {
    const arrayEven = [];
    const arrayNonEven = [];
    const arrayNumbersSort = [];
    let indexEven = 0;
    let indexNonEven = 0;

    const arrayNumbersBool = array.map((num) => num % 2 === 0);
    for (const b of array) {
        if (b % 2 !== 0) {
            arrayNonEven.push(b);
        } else {
            arrayEven.push(b);
        }
    }
    arrayNonEven.sort((a, b) => a - b);
    for (let a = 0; a < arrayNumbersBool.length; a++) {
        if (arrayNumbersBool[a] === false) {
            arrayNumbersSort.push(arrayNonEven[indexNonEven]);
            indexNonEven++;
        } else {
            arrayNumbersSort.push(arrayEven[indexEven]);
            indexEven++;
        }
    }

    return arrayNumbersSort;
}

console.log(sortArray([1, 3, 2, 8, 5, 4, 11]));
