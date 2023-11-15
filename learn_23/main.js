function number(busStops) {
    let countIn = 0;
    let countOut = 0;
    for (const i of busStops) {
        countIn += i[0];
        countOut += i[1];
    }
    return countIn - countOut;
}

console.log(
    number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
    ])
);
