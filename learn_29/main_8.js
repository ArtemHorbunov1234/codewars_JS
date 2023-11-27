function removeSmallest(numbers) {
    let array = Math.min(...numbers);
    let indexMin = numbers.indexOf(array);
    let count = [...numbers];
    count[indexMin] = '';

    return count.filter((a) => a !== '');
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
