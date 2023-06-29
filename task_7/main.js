function solution(number) {
    let sum = 0;
    if (number < 0) {
        return;
    }

    for (let num = 0; num < number; num++) {
        if (num % 3 === 0 || num % 5 === 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(solution(100));
