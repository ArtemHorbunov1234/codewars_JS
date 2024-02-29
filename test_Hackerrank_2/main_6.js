function pageCount(n, p) {
    let a = 0;
    let first = 1;
    let count = 0;
    let last = n;
    while (a < n) {
        if (first === p) {
            return count;
        } else if (first !== 1 && first === p + 1) {
            return count;
        }
        if (n % 2 === 0) {
            if (last === p) {
                return count;
            } else if (last !== n && last === p - 1) {
                return count;
            }
        } else {
            if (last === n && last === p + 1) {
                return count;
            }
        }

        a++;
        count++;
        first += 2;
        last -= 2;
    }
}

console.log(pageCount(5, 4));
