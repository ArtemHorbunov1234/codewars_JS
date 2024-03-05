// function sumXor(n) {
//     let count = 1;
//     let a = 0;
//     let checkCount = 1;
//     let sum = 0;
//     const binaryNumber = n
//         .toString(2)
//         .split('')
//         .map((a) => {
//             return a === '1' ? '0' : '1';
//         });
//     while (binaryNumber.length - 1 > a) {
//         count *= 2;
//         a++;
//     }

//     for (let i = 0; i < binaryNumber.length; i++) {
//         if (binaryNumber[i] === '1' && n >= count) {
//             sum += count;
//             checkCount++;
//         }
//         if (i === binaryNumber.length - 1 && n >= sum && checkCount > 2) {
//             checkCount++;
//         }

//         count /= 2;
//     }

//     return checkCount;
// }

console.log(sumXor(64));

function sumXor(n) {
    let count = 0;
    while (n > 0) {
        if (n % 2 === 0) {
            count++;
        }
        n = Math.floor(n / 2);
    }
    return Math.pow(2, count);
}
