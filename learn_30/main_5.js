function containsForbiddenChars(pin) {
    const additionalForbiddenChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_-+={}[]|:;"\'/<>,.?/';

    for (const char of additionalForbiddenChars) {
        if (pin.includes(char)) {
            return false;
        }
    }
    return pin.length === 4 || pin.length === 6;
}

console.log(validatePIN('49080Q'));
