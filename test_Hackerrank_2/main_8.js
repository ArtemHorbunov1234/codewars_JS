// function countBoomerangs(arr) {
//     let count = 0;
//     outerLoop: for (let a = 0; a < arr.length; a++) {
//         for (let b = a + 1; b < arr.length; b++) {
//             if (arr[a] === arr[b] && b >= a + 2) {
//                 const array = arr.slice(a + 1, b);
//                 let boolean = false;

//                 for (const i of array) {
//                     if (i === arr[a]) {
//                         boolean = true;
//                         break;
//                     }
//                 }
//                 console.log(array, boolean, arr[a]);
//                 if (boolean) {
//                     break outerLoop;
//                 }

//                 if (!boolean) {
//                     count++;
//                     continue outerLoop;
//                 }
//             }
//         }
//     }
//     return count;
// }

function countBoomerangs(arr) {
    let count = 0;
    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] === arr[b] && b >= a + 2) {
                const array = arr.slice(a + 1, b === arr.length ? b + 1 : b);
                const boolean = array.includes(arr[a]);
                console.log(array, boolean);
                if (!boolean) {
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
