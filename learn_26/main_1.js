function highAndLow(numbers) {
    let array = numbers.split(' ').map(Number);
    let countMax = array[0];
    let countLow = array[0];
    for (const a of array) {
        if (countMax <= a) {
            countMax = a;
        } else if (countLow >= a) {
            console.log(a);
            countLow = a;
        }
    }
    return `${countMax} ${countLow}`;
}

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
