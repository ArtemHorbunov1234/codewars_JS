function longestConsec(strarr, k) {
    n = strarr.length;
    if (n === 0 || strarr.length < k || k <= 0) {
        return '';
    }
    let numbers = '';
    let num = '';
    for (let a = 0; a < strarr.length; a++) {
        numbers = strarr.slice(a, a + k).join('');
        if (numbers.length > num.length) {
            num = numbers;
        }
    }

    return num;
}

console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));
console.log(longestConsec([], 0));
console.log(longestConsec([], 0));
