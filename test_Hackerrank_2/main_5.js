function sockMerchant(n, ar) {
    let sum = 0;
    const object = {};
    for (let a = 0; a < n; a++) {
        const socks = ar[a];
        object[socks] = (object[socks] || 0) + 1;
    }
    for (const i in object) {
        let count = object[i];
        while (count > 1) {
            sum++;
            count -= 2;
        }
    }
    return sum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
