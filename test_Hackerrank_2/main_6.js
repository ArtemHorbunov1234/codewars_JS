// function pageCount(n, p) {
//     let first = 2;
//     let count = 1;
//     let last = n;
//     let countOdd = 0;
//     if (n === p) {
//         return 0;
//     } else if ((n % 2 !== 0 && n - 1 === p) || 1 === p) {
//         return 0;
//     }

//     while (true) {
//         if (first === p || first === p - 1) {
//             return count;
//         }
//         if ((last === p || last === p + 1) && n % 2 === 0) {
//             return count;
//         }
//         if ((last === p || last === p - 1) && n % 2 !== 0) {
//             return countOdd;
//         }
//         count++;
//         countOdd++;
//         first += 2;
//         last -= 2;
//     }
// }

// console.log(pageCount(7, 4));

function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);

    const fromBack = Math.floor(n / 2) - fromFront;

    return Math.min(fromFront, fromBack);
}
