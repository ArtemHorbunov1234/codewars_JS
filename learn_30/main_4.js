function DNAStrand(dna) {
    const array = [];
    for (const a of dna) {
        a === 'A'
            ? array.push('T')
            : a === 'T'
            ? array.push('A')
            : a === 'C'
            ? array.push('G')
            : a === 'G'
            ? array.push('C')
            : '';
    }
    return array.join('');
}
