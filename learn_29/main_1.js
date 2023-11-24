function expandedForm(num) {
    let arrayNumbers = [];
    const array = String(num).split('');
    for (let a = 0; a < array.length; a++) {
        if (array[a] > 0) {
            arrayNumbers.push(array[a]);
            for (let b = a + 1; b < array.length; b++) {
                arrayNumbers.push('0');
            }

            if (a !== array.length - 1) {
                arrayNumbers.push(' + ');
            }
        }
    }
    if (arrayNumbers[arrayNumbers.length - 1] === ' + ') {
        arrayNumbers.pop(arrayNumbers - 1);
    }
    return arrayNumbers.join('');
}

console.log(expandedForm(70300));
console.log(expandedForm(9000101));
console.log(expandedForm(70304));
