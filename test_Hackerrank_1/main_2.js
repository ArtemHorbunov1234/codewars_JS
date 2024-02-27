function plusMinus(arr) {
    let numPlus = 0;
    let numMinus = 0;
    let numNull = 0;
    for (const num of arr) {
        if (num > 0) numPlus++;
        else if (num < 0) numMinus++;
        else numNull++;
    }
    console.log((numPlus / arr.length).toFixed(6));
    console.log((numMinus / arr.length).toFixed(6));
    console.log((numNull / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
