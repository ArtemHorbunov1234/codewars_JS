function isPalindrome(x) {
    const array = x
        .split('')
        .map((a) => a.toLowerCase())
        .reverse()
        .join('');
    return array.includes(x.toLowerCase());
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('Bob'));
