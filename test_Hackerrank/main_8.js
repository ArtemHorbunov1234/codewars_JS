function fizzBuzz(n) {
    let a = 1;
    while (a <= n) {
        if (a % 3 == 0 && a % 5 === 0) {
            console.log('FizzBuzz');
        } else if (a % 3 === 0) {
            console.log('Fizz');
        } else if (a % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(a);
        }
        a++;
    }
}

fizzBuzz(15);
