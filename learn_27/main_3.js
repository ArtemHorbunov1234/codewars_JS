function high(x) {
    let number = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrayX = x.split(' ');
    let num = 0;

    for (let a = 0; a < arrayX.length; a++) {
        let count = 0;
        for (let b = 0; b < arrayX[a].length; b++) {
            for (let c = 0; c < alphabet.length; c++) {
                if (arrayX[a][b].toLowerCase() === alphabet[c].toLowerCase()) {
                    count += c + 1;
                }
            }
        }
        number.push(count);
    }
    const arraySort = [...number];
    arraySort.sort((a, b) => a - b);
    for (const g of number) {
        if (g === arraySort[arraySort.length - 1]) {
            return arrayX[num];
        } else {
            num++;
        }
    }
}

console.log(high('man i need a taxi up to ubud')); //taxi
