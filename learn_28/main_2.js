// function bouncingBall(h, bounce, window) {
//     if (h > 0 && bounce > 0 && bounce < 1 && h > window) {
//         let number = h * bounce;
//         if (number === window) {
//             return 1;
//         }

//         if (number > window) {
//             let count = 1;
//             while (number > window) {
//                 number += -window;
//                 count += 2;
//             }
//             return count;
//         }
//     }
//     return -1;
// }

function bouncingBall(h, bounce, window) {
    if (h > 0 && bounce > 0 && bounce < 1 && h > window) {
        let count = 1;
        let number = h * bounce;

        while (number > window) {
            count += 2;
            number *= bounce;
        }

        return count;
    }

    return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
console.log(bouncingBall(30.0, 0.75, 1.5));
