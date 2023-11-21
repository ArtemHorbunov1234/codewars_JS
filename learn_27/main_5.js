function likes(names) {
    if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else {
        return names.length >= 1 ? `${names[0]} likes this` : 'no one likes this';
    }
}

console.log(likes([]));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Alex', 'Jacob', 'Mark', 'Max']));
