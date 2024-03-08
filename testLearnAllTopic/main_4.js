function scoreboard(whoAteWhat) {
    const arr = [];
    for (const a of whoAteWhat) {
        arr.push({ name: a.name, score: a.chickenwings * 5 + a.hamburgers * 3 + a.hotdogs * 2 });
    }
    const sortedScoreboard = arr.sort((a, b) => {
        if (a.score === b.score) {
            return a.name.localeCompare(b.name);
        }
        return b.score - a.score;
    });
    return sortedScoreboard;
}
console.log(
    scoreboard([
        { name: 'Billy The Beast', chickenwings: 17, hamburgers: 7, hotdogs: 8 },
        { name: 'Habanero Hillary', chickenwings: 5, hamburgers: 17, hotdogs: 11 },
        { name: 'Joey Jaws', chickenwings: 8, hamburgers: 8, hotdogs: 15 },
        { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
    ])
);

console.log(
    scoreboard([
        { name: 'Joey Jaws', chickenwings: 0, hamburgers: 1, hotdogs: 1 },
        { name: 'Big Bob', chickenwings: 1, hamburgers: 0, hotdogs: 0 },
    ])
);

console.log(
    scoreboard([
        { name: 'Sofia the night coder', chickenwings: 48, hotdogs: 80, hamburgers: 12 },
        { name: 'Daymos', chickenwings: 29, hotdogs: 23, hamburgers: 54 },
        { name: 'Laura - definitely not a beginner', chickenwings: 17, hotdogs: 50, hamburgers: 17 },
        { name: 'Marko Sustarsic', chickenwings: 18, hotdogs: 8, hamburgers: 42 },
        { name: 'Rory the kickass developer', chickenwings: 46, hotdogs: 44, hamburgers: 46 },
        { name: 'Nelson', chickenwings: 29, hotdogs: 23, hamburgers: 54 },
        { name: 'Gomes', chickenwings: 10, hotdogs: 31, hamburgers: 45 },
        { name: 'Troy Maeder', chickenwings: 42, hotdogs: 56, hamburgers: 98 },
    ])
);
