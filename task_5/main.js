const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 1, milk: 200 };
let cake;

function cakes(recipe, available) {
    const result = Object.keys(recipe)
        .map((ingredient) => {
            if (available.hasOwnProperty(ingredient)) {
                cake = Math.floor(available[ingredient] / recipe[ingredient]);
                return cake;
            } else {
                return 0;
            }
        })
        .map(Number);
    let value = result[0];
    for (const a of result) {
        if (a <= value) {
            value = a;
        }
    }
    return value;
}

console.log(cakes(recipe, available));
