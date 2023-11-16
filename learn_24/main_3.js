function getCount(str) {
    let string = str.split('');
    let count = 0;
    for (const a of string) {
        console.log(a);
        if (a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u') {
            count++;
        }
    }
    return count;
}

console.log(getCount('abracadabra'));
