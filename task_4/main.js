function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const pangram = string.toLowerCase().split('');
    for (const a of alphabet) {
        if (!pangram.includes(a)) {
            return false;
        }
    }

    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog '));
