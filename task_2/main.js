function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map((char, index, arr) => {
            const isDuplicate = arr.some((c, i) => c === char && i !== index);
            return isDuplicate ? ')' : '(';
        })
        .join('');
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));
