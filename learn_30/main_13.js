function twoSum(numbers, target) {
    const array = [];
    let b = 0;
    let count = 0;
    while (numbers.length > b) {
        for (let a = 0; a < numbers.length; a++) {
            if (a !== b) {
                count = numbers[a] + numbers[b];
                if (count === target) {
                    array.push(a);
                    array.push(b);
                    return array;
                }
            }
        }
        b++;
    }
    return array;
}

console.log(twoSum([1, 2, 3], 4));
