function solution(string) {
    const array = [];
    let count = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (const a of string) {
        for (const b of count) {
            if (a === b) {
                array.push(' ');
            }
        }
        array.push(a);
    }
    return array.join('');
}

console.log(solution('camelCasing'));
