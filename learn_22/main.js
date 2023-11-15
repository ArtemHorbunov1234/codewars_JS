function betterThanAverage(classPoints, yourPoints) {
    let meanScore = 0;
    for (const i of classPoints) {
        meanScore += i;
    }
    console.log(meanScore / 2);
    if (meanScore / classPoints.length > yourPoints) {
        return false;
    } else {
        return true;
    }
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
