function filter_list(l) {
    const array = l.filter((a) => a !== String(a));
    return array;
}

console.log(filter_list([1, 2, 'a', 'b']));
