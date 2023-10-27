function formatDuration(seconds) {
    let minute = 0;
    let hours = 0;
    let second = 0;

    hours = Math.floor(seconds / 3600);
    minute = Math.floor(seconds / 3600 / 60);
    second = Math.floor(seconds / 3600 / 60 / 60);
    balanceHours = hours * 3600;
    balanceMinute = (hours * 3600) / 60;
    balanceSecond = (hours * 3600) / 60 / 60;
    console.log(balanceHours);
    console.log(balanceMinute);
    console.log(balanceSecond);

    return `${hours > 0 ? `${hours} hour ${Math.ceil(minute) > 1 || Math.ceil(second) > 1 ? ',' : ''}` : ''}${
        balanceMinute >= 1 ? `${minute} minute` : ''
    }${minute > 0 && second > 0 ? 'and' : ''} ${
        Math.ceil(balanceSecond) >= 1 ? `${Math.ceil(balanceSecond)} seconds` : ''
    } `;
}

console.log(formatDuration(3602));
