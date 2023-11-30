var humanYearsCatYearsDogYears = function (humanYears) {
    let countEach = humanYears - 2;
    const array = [];
    let countCat = 0;
    let countDog = 0;
    countCat = humanYears > 1 ? countCat + 24 : countCat + 15;
    countDog = countCat;
    if (humanYears > 2) {
        countCat += 4 * countEach;
        countDog += 5 * countEach;
    }
    array.push(humanYears);
    array.push(countCat);
    array.push(countDog);
    return array;
};

console.log(humanYearsCatYearsDogYears(1));
