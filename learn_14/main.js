function digPow(n, p) {
    let a = String(n);
    const c = [];
    let sum = 0;
    for (const b of a) {
        c.push(Number(b));
    }
    for (let k = 0; k < c.length; k++) {
        sum = Math.pow(c[k], p) + sum;
        p++;
    }
    if (sum % n === 0) {
        return sum / n;
    } else {
        return -1;
    }
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
