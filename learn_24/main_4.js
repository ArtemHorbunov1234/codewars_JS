var summation = function (num) {
    sum = 0;
    for (let a = 0; a <= num; a++) {
        sum += a;
    }
    return sum;
};

console.log(summation(8));
