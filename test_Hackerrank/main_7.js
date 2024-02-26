function diagonalDifference(arr) {
    const countDiagonalX = [];
    const countDiagonalY = [];
    let numX = 0;
    let numY = arr.length - 1;
    for (const a of arr) {
        countDiagonalX.push(a[numX]);
        countDiagonalY.push(a[numY]);
        numX++;
        numY--;
    }
    const sum = countDiagonalX.reduce((a, b) => a + b, (a = 0)) - countDiagonalY.reduce((a, b) => a + b, (a = 0));
    return Math.abs(sum);
}

console.log(
    diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ])
);

console.log(
    diagonalDifference([
        [-1, 1, -7, -8],
        [-10, -8, -5, -2],
        [0, 9, 7, -1],
        [4, 4, -2, 1],
    ])
);
