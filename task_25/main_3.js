function openOrSenior(data) {
    const array = [];
    for (let a = 0; a < data.length; a++) {
        if (data[a][0] >= 55 && data[a][1] > 7) {
            array.push('Senior');
        } else {
            array.push('Open');
        }
    }
    return array;
}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
);
