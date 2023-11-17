function arrayDiff(a, b) {
    let count = [...a];
    for (const num of b) {
        count = count.filter((a) => a !== num);
    }
    return count;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
