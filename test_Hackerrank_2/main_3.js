function birthday(s, d, m) {
    let num = 0;
    const length = s.slice(0, d);

    for (let a = 0; a < length.length; a++) {
        if (length[a] >= d) {
            num++;
        } else if (length[a] + length[a + 1] === d) {
            num++;
        }
    }

    return console.log(num);
}

birthday([1, 2, 1, 3, 2], 3, 2);
birthday([1, 1, 1, 1, 1, 1], 3, 2);
