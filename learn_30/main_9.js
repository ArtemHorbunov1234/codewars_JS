function XO(str) {
    let countX = 0;
    let countO = 0;
    for (const a of str) {
        if (a === 'x' || a === 'X') {
            countX++;
        }
        if (a === 'o' || a === 'O') {
            countO++;
        }
    }
    return countX === countO;
}

console.log(XO('xo'));
console.log(XO('xoOX'));
