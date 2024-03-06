function maskify(cc) {
    const arr = [...cc].reverse();
    const a = arr.map((a, index) => {
        console.log(index);
        return index > 3 ? '#' : a;
    });
    return a.reverse().join('');
}

console.log(maskify('4556364607935616'));
