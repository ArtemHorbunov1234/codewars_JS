function nbYear(p0, percent, aug, p) {
    let yearCount = p0;
    let countYear = 0;
    while (p >= yearCount) {
        yearCount = Math.floor(yearCount + yearCount * (percent / 100) + aug);
        countYear++;
    }
    return countYear;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(150, 5, 100, 100));
console.log(nbYear(150, 100, 100, 1000));
