const quarterOf = (month) => {
    let count = month / 3;
    return Math.ceil(count);
};

console.log(quarterOf(11));
