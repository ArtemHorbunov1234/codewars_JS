function makeUpperCase(str) {
    const stringUpperCase = str
        .split('')
        .map((a) => a.toUpperCase())
        .join('');
    return stringUpperCase;
}

console.log(makeUpperCase('sdfsdf'));
