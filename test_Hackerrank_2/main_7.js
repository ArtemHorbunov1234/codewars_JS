function sevenBoom(arr) {
    const array = arr.join('').split('');
    for (const a of array) {
        if (a === '7') {
            return 'Boom!';
        }
    }

    return 'there is no 7 in the array';
}

sevenBoom([100, 37]);
