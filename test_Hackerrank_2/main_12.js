function humanReadable(seconds) {
    let count = seconds;
    let check = 0;
    const array = [];
    while (count >= 3600) {
        count -= 3600;
        check++;
    }
    array.push(check > 9 ? `${check}:` : `0${check}:`);
    check = 0;
    while (count >= 60) {
        count -= 60;
        check++;
    }
    array.push(check > 9 ? `${check}:` : `0${check}:`);
    array.push(count > 9 ? `${Math.floor(count)}` : `0${Math.floor(count)}`);

    return array.join('');
}

console.log(humanReadable(3599));
