const isSquare = function (n) {
    const count = Math.sqrt(n);

    return Number.isInteger(count);
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
