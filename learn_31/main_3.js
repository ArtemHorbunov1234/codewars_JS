function findUniq(arr) {
    let count = {};
    for (let a = 0; a < arr.length; a++) {
        let num = arr[a];
        count[num] = (count[num] || 0) + 1;
    }
    for (const a in count) {
        if (count[a] === 1) {
            return Number(a);
        }
    }
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 2, 0]));
