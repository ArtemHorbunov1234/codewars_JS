function arrayNumbers(arr) {
    return arr
        .join('')
        .split('')
        .filter((a) => a !== ',');
}

console.log(arrayNumbers([[2, 4, 5], [[5]], [[[1]]]]));
