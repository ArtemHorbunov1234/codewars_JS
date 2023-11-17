function DNAtoRNA(dna) {
    const array = dna.split('');
    let arrayRNK = [];
    for (const a of array) {
        if (a === 'T') {
            arrayRNK.push('U');
        } else {
            arrayRNK.push(a);
        }
    }
    return arrayRNK.join('');
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));
