function longest(s1, s2) {
    let array = [s1, s2];
    array = array.join('');
    array = array.split('').sort();
    array = new Set(array);
    const arrayX = [...array];
    return arrayX.join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'));
