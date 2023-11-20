function accum(s) {
    let array = [s[0]];
    let letter = '';
    for (let a = 1; a < s.length; a++) {
        letter = s[a];
        letter = letter.repeat(a + 1);

        array.push(letter);
        letter = '';
    }
    const newArray = array.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });

    return newArray.join('-');
}

console.log(accum('Zpas'));
console.log(accum('ZpglnRxqenU'));
