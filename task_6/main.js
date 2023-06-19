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

    return console.log(arr.length);
}
countSmileys([':~(', ':o>', ';o)', ';(', ';(', ':-D', ';-(']);
countSmileys([':D', ':~)', ';~D', ':)']);
countSmileys([':)', ':(', ':D', ':O', ':;']);
countSmileys([':-)', ';~D', ':-D', ':_D']);
