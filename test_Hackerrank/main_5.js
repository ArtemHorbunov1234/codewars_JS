function lonelyinteger(a) {
    const object = {};
    let count = 0;
    for (let b = 0; b < a.length; b++) {
        const str = a[b];
        object[str] = (object[str] || 0) + 1;
    }
    for (const num in object) {
        if (object[num] === 1) {
            count = num;
        }
    }
    return console.log(count);
}

lonelyinteger([1, 2, 3, 4, 1, 2, 3]);
