function matchingStrings(strings, queries) {
    const num = [];
    let countString = 0;
    for (let a = 0; a < queries.length; a++) {
        for (let b = 0; b < strings.length; b++) {
            if (queries[a] === strings[b]) {
                countString++;
            }
        }
        num.push(countString);
        countString = 0;
    }
    return num;
}

console.log(matchingStrings(['ab', 'abs', 'ab'], ['ab', 'abs', 'bc']));
