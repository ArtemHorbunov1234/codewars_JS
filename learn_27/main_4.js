function points(games) {
    let count = 0;
    for (let a = 0; a < games.length; a++) {
        if (games[a][0] > games[a][2]) {
            count += 3;
        } else if (games[a][0] < games[a][2]) {
            count += 0;
        } else {
            count += 1;
        }
    }
    return count;
}

console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
