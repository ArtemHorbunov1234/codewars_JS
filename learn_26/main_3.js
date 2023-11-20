function descendingOrder(n) {
    let array = String(n).split('').map(Number);
    array = array.sort().reverse().join('');
    return Number(array);
}

console.log(descendingOrder(1021));
console.log(descendingOrder(0));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(123456789));
