var uniqueInOrder = function (iterable) {
    const array = [];
    let b = '';
    for (let a = 0; a < iterable.length; a++) {
        if (iterable[a] !== b) {
            array.push(iterable[a]);
            b = iterable[a];
        }
    }

    return array;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
