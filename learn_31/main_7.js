function saleHotdogs(n) {
    let count = n < 5 ? 100 : n >= 5 && n < 10 ? 95 : 90;
    return count * n;
}

console.log(saleHotdogs(9));
