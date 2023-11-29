function stray(numbers) {
    let count = {};
    for (let a = 0; a < numbers.length; a++) {
        let num = numbers[a];
        count[num] = (count[num] || 0) + 1;
    }
    for (const b in count) {
        if (count[b] === 1) {
            return Number(b);
        }
    }
}

console.log(stray([2, 4, 4, 4]));
