function getMiddle(s) {
    const a = [];
    let c = 0;
    for (const b of s) {
        a.push(b);
    }
    if (a.length % 2 === 0) {
        c = a.length / 2;
        return `${a[c - 1]}${a[c]}`;
    } else if (a.length % 2 !== 0) {
        c = a.length / 2;
        x = Math.round(c - 1);
        return a[x];
    } else {
        return a[0];
    }
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
console.log(getMiddle('Aa'));
