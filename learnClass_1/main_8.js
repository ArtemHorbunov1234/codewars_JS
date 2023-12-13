class Class {
    static number = 1;

    static getNumber() {
        let currentVal = Class.number;
        Class.number += 1;

        return currentVal;
    }
}

console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());

// function createCounter() {
//     let sum = 0;

//     function addNumber() {
//         sum += 1;
//         return sum;
//     }

//     return addNumber;
// }

// let addToSum = createCounter();
// console.log(addToSum());
// console.log(addToSum());
// console.log(addToSum());
// console.log(addToSum());
// console.log(addToSum());
