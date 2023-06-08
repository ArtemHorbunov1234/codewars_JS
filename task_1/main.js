function countBits(number) {
    let sum = 0;
    const result = number
        .toString(2)
        .split(/(1)/)
        .map(Number)
        .filter((num) => num === 1);
    for (const a of result) {
        sum += a;
    }
    return console.log(sum);
}
countBits(1234);
