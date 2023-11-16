function snail(array) {
    let b = 1;
    let c = array.length - 2;
    let g = array.length - 2;
    let k = 1;
    let t = 1;
    let u = array.length - 3;
    let arrayNumbers = [];
    let e = 0;
    while (array.length >= e) {
        arrayNumbers.push(array[0][e]);
        e++;
    }
    while (b < array.length) {
        arrayNumbers.push(array[b][array.length - 1]);
        b++;
    }
    while (c >= 0) {
        arrayNumbers.push(array[array.length - 1][c]);
        c--;
    }
    while (g >= 1) {
        arrayNumbers.push(array[array.length - 2][0]);
        g--;
    }
    while (array.length - 2 >= k) {
        arrayNumbers.push(array[array.length - 2][k]);
        k++;
    }
    if (array.length > 3) {
        while (t <= array.length - 2) {
            arrayNumbers.push(array[1][array.length - 2]);
            t++;
        }
    }
    if (array.length > 3) {
        while (u <= 1) {
            arrayNumbers.push(array[array.length - 2][u]);
            u--;
        }
    }

    return arrayNumbers.filter((c) => c !== undefined);
}

console.log(
    snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);
console.log(
    snail([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
    ])
);
