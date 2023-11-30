function solution(str, ending) {
    if (ending === '') {
        return true;
    }
    if (str.includes(ending)) {
        return str[str.length - 1] === ending[ending.length - 1];
    }
    return false;
}

console.log(solution('abc', ''));
