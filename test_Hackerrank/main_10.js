function findMedian(arr) {
    const array = arr.sort((a, b) => {
        return a - b;
    });
    const arrayLength = Math.floor(arr.length / 2);
    return array[arrayLength];
}
console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
