function diamond(n) {
    if (n % 2 === 0 || n < 0) {
        return null;
    }
    const array = [];
    let i;
    let k;
    for (let a = 1; a <= n; a += 2) {
        let count = (n - a) / 2;
        i = 0;
        k = 0;
        while (count > i) {
            i++;
            array.push(' ');
        }
        while (a > k) {
            k++;
            array.push('*');
        }
        array.push('\n');
    }
    for (let a = n - 2; a >= 1; a -= 2) {
        let count = (n - a) / 2;
        i = 0;
        k = 0;
        while (count > i) {
            i++;
            array.push(' ');
        }
        while (a > k) {
            k++;
            array.push('*');
        }
        array.push('\n');
    }
    return array.join('');
}

console.log(diamond(777));
