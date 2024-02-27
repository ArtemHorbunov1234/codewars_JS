function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    const arr = B.reverse();

    for (let i = 0; i < A.length; i++) {
        if (A[i] + arr[i] < k) {
            return 'NO';
        }
    }

    return 'YES';
}
twoArrays();
