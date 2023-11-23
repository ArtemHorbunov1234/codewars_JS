function zero(signs) {
    let numbers = 0;
    if (undefined === signs) {
        return 0;
    }
    if (signs[0] === '+') {
        numbers = 0 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 0 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 0 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 0 / Number(signs[1]);
        return Math.floor(numbers);
    }
}
function one(signs) {
    let numbers = 0;
    if (undefined === signs) {
        return 1;
    }
    if (signs[0] === '+') {
        numbers = 1 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 1 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 1 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 1 / Number(signs[1]);
        return Math.floor(numbers);
    }
}
function two(signs) {
    if (undefined === signs) {
        return 2;
    }
    if (signs[0] === '+') {
        numbers = 2 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 2 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 2 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 2 / Number(signs[1]);
        return Math.floor(numbers);
    }
}
function three(signs) {
    if (undefined === signs) {
        return 3;
    }
    if (signs[0] === '+') {
        numbers = 3 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 3 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 3 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 3 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function four(signs) {
    if (undefined === signs) {
        return 4;
    }
    if (signs[0] === '+') {
        numbers = 4 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 4 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 4 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 4 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function five(signs) {
    if (undefined === signs) {
        return 5;
    }
    if (signs[0] === '+') {
        numbers = 5 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 5 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 5 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 5 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function six(signs) {
    if (undefined === signs) {
        return 6;
    }
    if (signs[0] === '+') {
        numbers = 6 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 6 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 6 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 6 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function seven(signs) {
    if (undefined === signs) {
        return 7;
    }
    if (signs[0] === '+') {
        numbers = 7 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 7 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 7 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 7 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function eight(signs) {
    if (undefined === signs) {
        return 8;
    }
    if (signs[0] === '+') {
        numbers = 8 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 8 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 8 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 8 / Number(signs[1]);
        return Math.floor(numbers);
    }
}

function nine(signs) {
    if (undefined === signs) {
        return 9;
    }
    if (signs[0] === '+') {
        numbers = 9 + Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '-') {
        numbers = 9 - Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '*') {
        numbers = 9 * Number(signs[1]);
        return Math.floor(numbers);
    } else if (signs[0] === '/') {
        numbers = 9 / Number(signs[1]);
        return Math.floor(numbers);
    }
}
function plus(num) {
    return `+${num}`;
}
function minus(num) {
    return `-${num}`;
}
function times(num) {
    return `*${num}`;
}
function dividedBy(num) {
    return `/${num}`;
}

console.log(zero(plus(two())));
console.log(two(plus(one())));
console.log(one(minus(two())));
console.log(zero(dividedBy(one())));
