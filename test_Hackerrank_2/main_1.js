function pangrams(s) {
    const object = {};
    const arr = s.split('').filter((a) => a !== ' ');
    for (let a = 0; a < arr.length; a++) {
        let num = arr[a].toLowerCase();
        object[num] = (object[num] || 0) + 1;
    }
    console.log(object);
    console.log(Object.keys(object).length);
    return Object.keys(object).length >= 26 ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));
console.log(pangrams('We promptly judged antique ivory buckles for the prize'));
console.log(
    pangrams(
        'CSeBBZvYvDyayyBzdfdXvaBtxxwiXcD jQADzTCXzBxzwcyxbd cdyxcBbcxsVD wzXXzazCeqYyB CZzXyxAb WX zbtAdxRVyWEAB DbdAd ViYxzCSAuCVZVXyZY gfWzczBaAZWzXwy AXyXRvyrRZHxtedwcbAWeYiA ZwBea tQZaTXCoWbE cbtZvWZAziwA BWzBaVGbz yyECVAdAcSizBWgGTBz i BEJDELZ WBbaAEOGwbBcZZAvrYDmCWhT WycaXTatCwzavAwewZAZZWb ezBywzdYBhbZeVZBEZFuiPBafxyYzAdDxBb BcidxCV c oDZxgfbycygBdx y dCY ZEEZ txzasvxZADzcDzxhZzXBbDdaobzDYIwyAcXDdthWW U cjfzVWaCecAzaZzaAAUFXgcCYAZzD zABU CcaVZCZ Z xayFyXYAYyGavzVyZyzBe AxYzaACI hxXAaB UayBY y fCz ByXW AwxZzchzAwSwVBzuCW WaeddADAZycwa vZTjd czdWyzaybBeTCXYYZcBZtGy aSZrBAcZwcY BAcAeDFaA aXBhFwAyC IeW Y CaA AbWtSFbzVZIxTACZAaBYIBxbBAzCdAaWaWaAxAcvZaZZTzBBZZsug YtaYtmdxBzFDDzWWHhacAZDuzVyDBADAYaaxAqraXUzzJAAEAZSCWAbYZZyUfAyWYBKEZca bdbQazBEBXD XAdLwWHwwxFaFXxVZZyzcykCwcwaScqyDvB wAxdbDAZXFeEcwWbvbhFHxbYWAYab bZFzBIdax XvC ZcD DZxzabAcYavbdyFRBBbZWuu vzQAvZAVWAYSYbbCZfZWBXWeAZsXBcbaZfEbgEAIZvyCBwEydWa JByZedADvCZyftcUexYbYca BvZBCcybXbz zBUXdye zy YDaYEcAzdeaqEy ZDVSd dacbS szuzZSH ADycXCUDVb'
    )
);
