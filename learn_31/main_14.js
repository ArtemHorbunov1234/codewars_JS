var isAnagram = function (test, original) {
    const array1 = test
        .split('')
        .map((a) => a.toLowerCase())
        .sort()
        .join('');
    const array2 = original
        .split('')
        .map((a) => a.toLowerCase())
        .sort()
        .join('');
    console.log(array1);
    console.log(array2);
    return array1 === array2;
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));
