function profitCheck(points, price) {
    const s =
        (1 / 2) *
        Math.abs(
            points[0][0] * (points[1][1] - points[2][1]) +
                points[1][0] * (points[2][1] - points[0][1]) +
                points[2][0] * (points[0][1] - points[1][1])
        );
    const num = 10000 * s;
    return (num / 100) * 30 > price ? "It's a deal!" : 'No thanks!';
}

console.log(
    profitCheck(
        [
            [4, 7],
            [5, 3],
            [7, 9],
        ],
        1000
    )
);
