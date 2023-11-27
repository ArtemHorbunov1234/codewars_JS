// var maxSequence = function (arr) {
//     let count = 0;
//     let countNumber;
//     let countNum = 0;
//     let c = 0;
//     let array = [];
//     for (const a of arr) {
//         if (a >= 0) {
//             array.push(a);
//             if (array.length === arr.length) {
//                 return array.reduce((a, b) => a + b, 0);
//             }
//         }
//     }

//     while (arr.length >= c) {
//         c++;
//         for (let a = 0; a < arr.length; a++) {
//             count = arr.slice(c - 1, a).join(' ');
//             console.log(count);
//             countNumber = count
//                 .split(' ')
//                 .map(Number)
//                 .reduce((a, b) => a + b, 0);
//             if (arr[a] > countNum) {
//                 countNum = a;
//             }

//             if (countNumber > countNum) {
//                 countNum = countNumber;
//             }
//         }
//     }

//     let sum = arr.reduce((a, b) => a + b, 0);
//     return countNum > sum ? countNum : sum;
// };

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

var maxSequence = function (arr) {
    let countNum = 0;
    let countNumber = 0;

    for (let a = 0; a < arr.length; a++) {
        countNumber = Math.max(arr[a], countNumber + arr[a]);
        console.log(countNumber);
        countNum = Math.max(countNum, countNumber);
        console.log(countNum);
    }

    return countNum;
};

// Пример использования
const result = maxSequence([3, -4, -1, -2, 4]);
console.log(result); // Ожидаемый результат: 139
