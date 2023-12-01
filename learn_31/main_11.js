function twoSort(s) {
    const array = s.sort();
    const stringStars = [];

    for (let a = 0; a < array[0].length; a++) {
        stringStars.push(array[0][a]);
        if (a !== array[0].length - 1) {
            stringStars.push('***');
        }
    }
    return stringStars.join('');
}

console.log(
    twoSort(['turns', 'out', 'random', 'test', 'cases', 'are', 'easier', 'than', 'writing', 'out', 'basic', 'ones'])
);
