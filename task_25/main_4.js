function tribonacci(signature, n) {
    const array = [...signature];
    let count = 0;
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [signature[0]];
    }

    while (array.length < n) {
        count = array[array.length - 1] + array[array.length - 2] + array[array.length - 3];
        array.push(count);
    }

    return array;
}

console.log(tribonacci([1, 1, 1], 10));
