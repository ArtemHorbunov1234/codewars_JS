function moveZeros(arr) {
    const a = arr.filter((a) => a === 0);
    const c = arr.filter((a) => a !== 0);

    const b = [...c, ...a];
    return b;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
