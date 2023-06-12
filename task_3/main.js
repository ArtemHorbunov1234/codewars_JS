// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function calculate(str) {
    const calculateValue = str.match(/.{1,2}/g).map((string) => {
        if (string.length === 1) {
            return (string += '_');
        }
        return string;
    });
    return calculateValue;
}
console.log(calculate('a'));
console.log(calculate('abc'));
console.log(calculate('abcdef'));

function solution(str) {
    if (str) {
        const calculateValue = str.match(/.{1,2}/g).map((string) => {
            if (string.length === 1) {
                return (string += '_');
            }
            return string;
        });
        return calculateValue;
    } else {
        return [];
    }
}
