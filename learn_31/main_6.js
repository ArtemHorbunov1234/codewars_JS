function order(words) {
    let array = words.split(' ');
    let arraySortNumber = [...array];
    for (let a = 0; a < array.length; a++) {
        for (const b of array[a]) {
            if (/[1-9]/.test(Number(b))) {
                arraySortNumber[b - 1] = array[a];
            }
        }
    }
    return arraySortNumber.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
