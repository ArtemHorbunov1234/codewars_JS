function century(year) {
    let numbers = 1;

    if (year > 1000) {
        numbers = year / 100;
        if (numbers % 1 === 0) {
            return numbers;
        } else {
            return Math.floor(numbers + 1);
        }
    } else {
        return numbers;
    }
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
console.log(century(189));
