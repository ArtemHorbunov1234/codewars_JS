function findOdd(A) {
    let count = 0;
    let number = 0;
    for (let a = 0; a <= A.length; a++) {
        if (count % 2 !== 0 || count === 1) {
            return number;
        }
        count = 0;

        for (let b = 0; b < A.length; b++) {
            if (A[a] === A[b]) {
                number = A[a];
                count++;
            }
        }
    }
}

console.log(findOdd([1, 2, 1]));
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
