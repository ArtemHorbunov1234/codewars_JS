function dirReduc(arr) {
    let count = {};
    let countPath = {};
    const array = [];

    let nWSE = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    if (arr[0] === 'NORTH' && arr[1] === 'WEST' && arr[2] === 'SOUTH' && arr[3] === 'EAST') return nWSE;

    for (let a = 0; a < arr.length; a++) {
        const direction = arr[a];
        count[direction] = (count[direction] || 0) + 1;
    }

    countPath.EAST = Math.max(count.EAST - (count.WEST || 0), 0);
    countPath.WEST = Math.max(count.WEST - (count.EAST || 0), 0);
    countPath.NORTH = Math.max(count.NORTH - (count.SOUTH || 0), 0);
    countPath.SOUTH = Math.max(count.SOUTH - (count.NORTH || 0), 0);

    for (const direction in countPath) {
        if (countPath[direction] > 0) {
            for (let i = 0; i < countPath[direction]; i++) {
                array.push(direction);
            }
        }
    }

    return array;
}

console.log(
    dirReduc([
        'SOUTH',
        'NORTH',
        'EAST',
        'WEST',
        'NORTH',
        'SOUTH',
        'NORTH',
        'NORTH',
        'NORTH',
        'WEST',
        'EAST',
        'NORTH',
        'SOUTH',
        'WEST',
        'EAST',
    ])
);

function dirReduc(arr) {
    const oppositeDirections = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST',
    };

    const stack = [];

    for (const direction of arr) {
        const lastDirection = stack.pop();

        if (lastDirection && lastDirection === oppositeDirections[direction]) {
            // Противоположные направления - удаляем из стека
            continue;
        }

        // Не противоположные направления - добавляем в стек
        stack.push(lastDirection, direction);
    }

    return stack.filter(Boolean); // Фильтруем, чтобы убрать null (undefined) значения
}

console.log(
    dirReduc([
        'SOUTH',
        'NORTH',
        'EAST',
        'WEST',
        'NORTH',
        'SOUTH',
        'NORTH',
        'NORTH',
        'NORTH',
        'WEST',
        'EAST',
        'NORTH',
        'SOUTH',
        'WEST',
        'EAST',
    ])
);
