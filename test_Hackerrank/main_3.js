function timeConversion(s) {
    const timeDayNight = s[s.length - 2] + s[s.length - 1];
    const count = s[0] + s[1];
    const timeCount =
        timeDayNight === 'PM'
            ? Number(count) === 12
                ? count
                : Number(count) + 12
            : Number(count) === 12
            ? '00'
            : count;
    const arr = [];
    arr.push(String(timeCount));

    for (let a = 2; a < s.length - 2; a++) {
        arr.push(s[a]);
    }
    return arr.join('');
}

timeConversion('07:05:45PM');
timeConversion('07:05:45AM');
timeConversion('12:05:45AM');
timeConversion('12:05:45PM');
