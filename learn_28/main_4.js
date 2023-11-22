function reverseWords(str) {
    const array = str.split(' ');
    let arrayRevers = [];
    let count = [];

    for (let a = 0; a < array.length; a++) {
        count = array[a].split('');
        count.reverse();
        for (const b of count) {
            arrayRevers.push(b);
        }
        arrayRevers.push(' ');
    }

    return arrayRevers.join('').trim();
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
