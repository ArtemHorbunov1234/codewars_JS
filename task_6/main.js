function countSmileys(arr) {
    arr = arr
        .filter((face) => {
            for (const a of face) {
                if (a === ')' || a === 'D') {
                    return a;
                }
                if (face.length === 0) {
                    return 0;
                }
            }
        })
        .filter((face) => face.length >= 2);

    return arr.length;
}
countSmileys([';(', ';>', ';-(', ':~>', ';(', ';)', ';oD']);
countSmileys([':D', ':~)', ';~D', ':)']);
countSmileys([':)', ':(', ':D', ':O', ':;']);

console.log(countSmileys([':-)', ';~D', ':-D', ':_D']));
