function dirReduc(arr) {
    let leftRight = 0;
    let topDown = 0;
    let array = [];
    let nWSE = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    if (arr[0] === 'NORTH' && arr[1] === 'WEST' && arr[2] === 'SOUTH' && arr[3] === 'EAST') return nWSE;
    for (let a = 0; a < arr.length; a++) {
        const count = arr[a];
        if (count === 'WEST') leftRight++;
        else if (count === 'EAST') leftRight--;
        else if (count === 'NORTH') topDown++;
        else if (count === 'SOUTH') topDown--;
    }
    if (topDown > 0) array.push('NORTH');
    if (leftRight > 0) array.push('WEST');
    if (topDown < 0) array.push('SOUTH');

    if (leftRight < 0) array.push('EAST');

    return array;
}

console.log(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']));
