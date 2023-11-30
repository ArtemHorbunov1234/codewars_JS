function twiceAsOld(dadYearsOld, sonYearsOld) {
    let count = 0;
    let countDadYears = dadYearsOld;
    while (countDadYears > sonYearsOld * 2) {
        count++;
        countDadYears--;
        if (countDadYears === sonYearsOld * 2) {
            return count;
        }
    }
    while (countDadYears < sonYearsOld * 2) {
        count++;
        countDadYears++;
        if (countDadYears === sonYearsOld * 2) {
            return count;
        }
    }
    return 0;
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(42, 21));
