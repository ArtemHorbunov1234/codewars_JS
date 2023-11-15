function findShort(s) {
    const arrayText = s.split(' ');

    let count = arrayText[0].length;
    for (let a = 0; a < arrayText.length; a++) {
        if (arrayText[a].length < count) {
            count = arrayText[a].length;
        }
    }
    return count;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(findShort('turns out random test cases are easier than writing out basic ones'));
console.log(findShort("Let's travel abroad shall we"));
