function problem(x) {
    if (x === String(x)) {
        return 'Error';
    }
    return x * 50 + 6;
}

console.log(problem(1));
