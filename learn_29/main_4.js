// function deleteNth(arr, n) {
//     let array = arr;
//     let number = 0;

//     for (let a = 0; a < array.length; a++) {
//         for (let b = 0; b < arr.length; b++) {
//             if (array[a] === arr[b]) {
//                 if (number < n) {
//                     number += 1;
//                     console.log(number);
//                     array.push(arr[a]);
//                 }
//             } else {
//                 array[b] = 0;
//             }
//         }
//     }
//     return array;
// }
// const inputArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const resultArray = deleteNth(inputArray, 2);
// console.log(resultArray); // [1, 2, 2, 3, 3, 4, 4]

function deleteNth(arr, n) {
    let count = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        count[current] = (count[current] || 0) + 1;

        if (count[current] <= n) {
            result.push(current);
        }
    }

    return result;
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([20, 20, 20, 3], 1));
