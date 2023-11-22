function disemvowel(str) {
    const array = str.split('');
    const arraySort = [];
    for (const a of array) {
        if (
            a.toLowerCase() !== 'a' &&
            a.toLowerCase() !== 'i' &&
            a.toLowerCase() !== 'e' &&
            a.toLowerCase() !== 'o' &&
            a.toLowerCase() !== 'u' &&
            a.toLowerCase() !== 'y'
        ) {
            arraySort.push(a);
        }
    }
    return arraySort.join('');
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
