function noBoringZeros(n) {
    let count = n > 0 ? n : n * -1;
    const str = String(count).split('').reverse().join('');
    let numbers = Number(str);
    numbers = String(numbers).split('').reverse().join('');

    return n > 0 ? Number(numbers) : Number(numbers) * -1;
}

console.log(noBoringZeros(-1450));
