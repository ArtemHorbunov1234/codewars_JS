function removeExclamationMarks(s) {
    let array = s.split('');
    return array.filter((a) => a !== '!').join('');
}

console.log(removeExclamationMarks('Hello World!'));
