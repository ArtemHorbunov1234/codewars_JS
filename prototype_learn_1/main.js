Array.prototype.countArray = function (n) {
    return this.map((a) => a * n);
};

console.log([1, 2, 3].countArray(2));
