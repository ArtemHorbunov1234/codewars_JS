function duplicateEncode(word) {
    const stringWord = word
        .split(/()/)
        .map((value, index, array) => {
            for (const a of value) {
                if (array.indexOf(a) === index) {
                    return '(';
                } else {
                    return ')';
                }
            }
        })
        .join('');

    return console.log(stringWord);
}

duplicateEncode('din');
duplicateEncode('recede');
duplicateEncode('Success');
duplicateEncode('(( @');
