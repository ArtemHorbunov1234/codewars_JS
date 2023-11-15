function duplicateCount(text) {
    const b = text.split('');
    let array = [];
    for (let a = 0; a < b.length; a++) {
        for (let c = a + 1; c < b.length; c++) {
            if (b[a].toLowerCase() === b[c].toLowerCase()) {
                array.push(b[c].toLowerCase());
            }
        }
    }
    const uniqueArray = [...new Set(array)];

    return uniqueArray.length;
}
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));
