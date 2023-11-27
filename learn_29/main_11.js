function rot13(message) {
    let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const specialSymbols = `1234567890~!@#$%^&*()_-+={}[]|\:;"'<>,.?/ `;
    const array = [];

    for (let a = 0; a < message.length; a++) {
        for (let b = 0; b < specialSymbols.length; b++) {
            let num = 26 - b;
            if (message[a] === alphabetUpper[b]) {
                array.push(alphabetUpper[13 - num >= 0 ? 13 - num : b + 13]);
            } else if (message[a] === alphabetLower[b]) {
                array.push(alphabetLower[13 - num >= 0 ? 13 - num : b + 13]);
            } else if (message[a] === specialSymbols[b]) {
                array.push(message[a]);
            }
        }
    }
    return array.join();
}

function rot13(message) {
    let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const array = [];

    for (let a = 0; a < message.length; a++) {
        let char = message[a];

        if (/[A-Z]/.test(char)) {
            array.push(alphabetUpper[(alphabetUpper.indexOf(char) + 13) % 26]);
        } else if (/[a-z]/.test(char)) {
            array.push(alphabetLower[(alphabetLower.indexOf(char) + 13) % 26]);
        } else {
            array.push(char);
        }
    }

    return array.join('');
}

console.log(rot13('n.&Pqd'));
console.log(rot13('[-et1W&}>*)HDpk1'));
