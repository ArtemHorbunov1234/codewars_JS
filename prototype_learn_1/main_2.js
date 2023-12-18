String.prototype.reverseWords = function () {
    let a = this.split('');
    return a.join('');
};

console.log('Hello World'.reverseWords()); // Ожидаемый результат: "World Hello"
console.log('JavaScript is fun'.reverseWords()); // Ожидаемый результат: "fun is JavaScript"
