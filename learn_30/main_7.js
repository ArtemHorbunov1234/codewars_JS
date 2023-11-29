function firstNonConsecutive(arr) {
    let a = 0;
    while (arr.length > a) {
        let count = arr[a] + 1;
        if (count !== arr[a + 1]) {
            return arr[a + 1];
        }
        if (a + 1 === arr.length - 1) {
            return null;
        }
        a++;
    }
}

console.log(firstNonConsecutive([1, 2, 3, 4]));
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
