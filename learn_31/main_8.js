function encrypt(text, n) {
    if (text === null) {
        return null;
    }
    let count = 0;

    let array = [...text];
    while (count < n) {
        count++;
        let arraySave = [];
        for (let a = 0; a < array.length; a++) {
            if (a % 2 !== 0) {
                arraySave.push(array[a]);
            }
        }
        for (let a = 0; a < array.length; a++) {
            if (a % 2 === 0) {
                arraySave.push(array[a]);
            }
        }
        array = [];
        array = [...arraySave];
    }

    return array.join('');
}

console.log(encrypt('awfrsegrgdrg', 1));

function decrypt(encryptedText, n) {
    if (encryptedText === null) {
        return null;
    }
    let array = [...encryptedText];

    if (n < 0) {
        return encryptedText;
    }
    let count = 0;
    let countNum = 1;
    if (n >= 0) {
        for (const a of encryptedText) {
            if (a === ' ') {
                countNum++;
            }
        }
    }

    let num = countNum - n;
    while (count < num) {
        count++;
        let arraySave = [];
        for (let a = 0; a < array.length; a++) {
            if (a % 2 !== 0) {
                arraySave.push(array[a]);
            }
        }
        for (let a = 0; a < array.length; a++) {
            if (a % 2 === 0) {
                arraySave.push(array[a]);
            }
        }
        array = [];
        array = [...arraySave];
    }
    return array.join('');
}

console.log(decrypt('This is a test!', 0));
console.log(decrypt('hsi  etTi sats!', 1));
console.log(decrypt('s eT ashi tist!', 2));
console.log(decrypt(' Tah itse sits!', 3));
console.log(decrypt('This is a test!', 4));
console.log(decrypt('This is a test!', -1));
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1));
console.log(decrypt(null, 0));
console.log(decrypt(null, 0));
console.log(decrypt('e-rMisybKsTua-haaot', 1));
