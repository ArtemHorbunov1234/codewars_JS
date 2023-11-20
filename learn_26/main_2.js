function printerError(s) {
    let array = s.split('');
    let arrayNoMath = [];
    for (const a of array) {
        if (!/[A-M]/i.test(a)) {
            arrayNoMath.push(a);
        }
    }
    return `${arrayNoMath.length}/${array.length}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
console.log(printerError('aaammm345mmmmmjuyk'));
