// function miniMaxSum(arr) {
//     const arrMax = Math.max(...arr);
//     const arrMin = Math.min(...arr);
//     const indexMax = arr.indexOf(arrMax);
//     const indexMin = arr.indexOf(arrMin);
//     const arrMinCount = [];
//     const arrMaxCount = [];
//     if (indexMax === indexMin) return console.log(arr[0] * 4, arr[0] * 4);
//     for (let a = 0; a < arr.length; a++) {
//         if (a === indexMax) {
//             arrMaxCount.push(arr[a]);
//         } else if (a === indexMin) {
//             arrMinCount.push(arr[a]);
//         } else {
//             arrMaxCount.push(arr[a]);
//             arrMinCount.push(arr[a]);
//         }
//     }
//     const countMax = arrMaxCount.reduce((a, b) => a + b, 0);
//     const countMin = arrMinCount.reduce((a, b) => a + b, 0);
//     return console.log(countMin, countMax);
// }
// miniMaxSum([5, 5, 5, 5, 5]);

function miniMaxSum(arr) {
    const arrMax = Math.max(...arr);
    const arrMin = Math.min(...arr);

    let sum = 0;
    if (arrMax === arrMin) return console.log(arr[0] * 4, arr[0] * 4);
    for (const num of arr) {
        sum += num;
    }
    const countMax = sum - arrMin;
    const countMin = sum - arrMax;
    return console.log(countMin, countMax);
}
miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([1, 2, 3, 4, 5]);
