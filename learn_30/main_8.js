function count(string) {
    let countString = {};

    for (let a = 0; a < string.length; a++) {
        let current = string[a];
        countString[current] = (countString[current] || 0) + 1;
    }
    return countString;
}

console.log(count('aba'));
