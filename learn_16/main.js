function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        while (b <= a) {
            sum += a;
            a--;
        }
        return sum;
    } else if (b > a) {
        while (b >= a) {
            sum += b;
            b--;
        }
        return sum;
    }
}

console.log(getSum(2, 2));
console.log(getSum(5, -1));
console.log(getSum(1, 2));
console.log(getSum(-1, 5));
