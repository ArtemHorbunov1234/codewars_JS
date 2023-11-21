function SeriesSum(n) {
    let count = 1;
    let sum = 0;
    if (n === 0) {
        return '0.00';
    }

    for (let a = 1; a < n; a++) {
        count += 3;
        sum += 1 / count;
    }
    sum += 1;

    return sum.toFixed(2);
}

console.log(SeriesSum(0));
