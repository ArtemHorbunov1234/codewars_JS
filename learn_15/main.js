function persistence(num) {
    let count = 0;
    while (num >= 10) {
        let sum = 1;
        for (const i of String(num)) {
            sum *= Number(i);
        }
        num = sum;
        count++;
    }
    return count;
}

function persistence(num) {
    let count = 0;
    for (let i = 0; num > 9; i++) {
        num = num
            .toString()
            .split('')
            .reduce((t, c) => c * t);
        count++;
    }
    return count;
}

console.log(persistence(39));
// console.log(persistence(4));
console.log(persistence(999));
