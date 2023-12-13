function capitalize(name) {
    let b = name.charAt(0).toUpperCase();
    let a = name.slice(1, name.length);
    let sum = b + a;
    return sum;
}

console.log(capitalize('dsfsdf'));
