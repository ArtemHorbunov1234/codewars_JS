const number = function (array) {
    let count = 1;
    const arrayNumbering = [];
    for (const str of array) {
        arrayNumbering.push(`${count}: ${str}`);
        count++;
    }
    return arrayNumbering;
};

console.log(number(['a', 'b', 'c']));
