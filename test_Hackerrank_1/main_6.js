// function flippingBits(n) {
//     let num;
//     let b = 0;
//     let binaryRepresentation;
//     let arr = '';
//     for (let a = 0; a < n.length; a++) {
//         num = n[a] < 0 ? n[a] * -1 : n[a];

//         binaryRepresentation = num.toString(2).padStart(32, '0');
//         while (b < binaryRepresentation.length) {
//             arr += binaryRepresentation[b] === '0' ? '1' : '0';

//             b++;
//         }
//         console.log(parseInt(arr, 2));
//         arr = '';
//         b = 0;
//     }
// }

// function flippingBits(n) {
//     let arr = [];
//     for (let a = 0; a < n.length; a++) {
//         let num = Math.abs(n[a]);
//         let binaryRepresentation = num.toString(2).padStart(32, '0');
//         let flippedBinary = '';
//         for (let b = 0; b < binaryRepresentation.length; b++) {
//             flippedBinary += binaryRepresentation[b] === '0' ? '1' : '0';
//         }
//         arr.push(String(parseInt(flippedBinary, 2)));
//     }
//     return arr;
// }

// function flippingBits(n) {
//     let arr = [];
//     for (let a = 0; a < n.length; a++) {
//         let num = Math.abs(n[a]);
//         let binaryRepresentation = num.toString(2).padStart(32, '0');
//         let flippedBinary = '';
//         for (let b = 0; b < binaryRepresentation.length; b++) {
//             flippedBinary += binaryRepresentation[b] === '0' ? '1' : '0';
//         }
//         arr.push(parseInt(flippedBinary, 2));
//     }
//     return arr;
// }

// console.log(flippingBits([2147483647, 1, 0]));
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    let arr = [];
    for (let a = 0; a < n.length; a++) {
        let num = Math.abs(n[a]);
        let binaryRepresentation = num.toString(2).padStart(32, '0');
        let flippedBinary = '';
        for (let b = 0; b < binaryRepresentation.length; b++) {
            flippedBinary += binaryRepresentation[b] === '0' ? '1' : '0';
        }
        arr.push(parseInt(flippedBinary, 2));
    }
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
