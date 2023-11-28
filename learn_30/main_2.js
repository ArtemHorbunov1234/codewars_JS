function howMuchILoveYou(nbPetals) {
    let count = nbPetals;
    const string = {
        1: 'I love you',
        2: 'a little',
        3: 'a lot',
        4: 'passionately',
        5: 'madly',
        6: 'not at all',
    };
    while (count > 6) {
        count = count - 6;
    }
    return string[nbPetals] ? string[nbPetals] : string[count];
}

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(300));
