function areYouPlayingBanjo(name) {
    const personName = name.split('');
    if (personName[0].toLowerCase() === 'r') {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}

console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Adam'));
