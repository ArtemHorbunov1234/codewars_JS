function pigIt(str) {
    const words = str.split(' ');
    const wordString = words.map((word) => {
        if (/^[A-Za-z]+$/.test(word)) {
            const wordModifier = word.slice(1) + word[0] + 'ay';
            console.log(word.slice(1));
            return wordModifier;
        } else {
            return word;
        }
    });
    const wordModifierString = wordString.join(' ');
    return wordModifierString;
}

console.log(pigIt('Pig latin is cool')); // Вывод: "igPay atinlay siay oolcay"

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !'); // elloHay orldway !
