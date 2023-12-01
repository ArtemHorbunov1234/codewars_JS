function expressionMatter(a, b, c) {
    let count1 = Math.max(a * (b + c), (a + b) * c, a * b * c, a + b * c, a + b + c);
    return count1;
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(1, 1, 1));
