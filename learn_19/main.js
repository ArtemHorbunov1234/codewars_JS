const binaryArrayToNumber = (arr) => {
    let count = 1;
    let sum = 0;
    const array = arr.reverse();
    for (let a = 0; a < arr.length; a++) {
        if (array[a] === 1) {
            sum += count;
        }
        count += count;
    }
    return sum;
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));

// const a =
// +`${arr[0] === 1 ? 8 : 0}` +
// +`${arr[1] === 1 ? 4 : 0}` +
// +`${arr[2] === 1 ? 2 : 0}` +
// +`${arr[3] === 1 ? 1 : 0}`;
// return a;
