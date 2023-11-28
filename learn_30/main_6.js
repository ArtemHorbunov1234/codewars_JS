function findEvenIndex(arr) {
    let count = arr[0];
    const array3 = arr.slice(1, arr.length).reduce((a, b) => a + b, 0);

    if (array3 === 0) {
        return 0;
    }
    for (let a = 1; a < arr.length; a++) {
        const array1 = arr.slice(0, a).reduce((a, b) => a + b, 0);
        const array2 = arr.slice(a + 1, arr.length).reduce((a, b) => a + b, 0);

        if (array1 === array2) {
            return a;
        }
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
