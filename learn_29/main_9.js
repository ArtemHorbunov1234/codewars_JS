function feast(beast, dish) {
    let arrayBeast = beast.split('');
    let arrayDish = dish.split('');
    return arrayBeast[0] === arrayDish[0] && arrayBeast[arrayBeast.length - 1] === arrayDish[arrayDish.length - 1];
}

console.log(feast('great blue heron', 'garlic naan'));
