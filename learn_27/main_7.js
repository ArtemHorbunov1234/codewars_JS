function fakeBin(x) {
    let arraySort = x.split('');
    const array = arraySort.map(function (str) {
        return Number(str) >= 5 ? '1' : '0';
    });
    return array.join('');
}

console.log(fakeBin('45385593107843568'));
