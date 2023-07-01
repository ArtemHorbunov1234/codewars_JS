function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let vertical = 0;
    let horizontal = 0;

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            vertical++;
        } else if (walk[i] === 's') {
            vertical--;
        } else if (walk[i] === 'e') {
            horizontal++;
        } else if (walk[i] === 'w') {
            horizontal--;
        }
    }

    return vertical === 0 && horizontal === 0;
}
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
