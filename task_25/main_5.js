const reverseSeq = (n) => {
    let count = n;
    const array = [];
    while (count > 0) {
        array.push(count);
        count--;
    }

    return array;
};

console.log(reverseSeq(5));
