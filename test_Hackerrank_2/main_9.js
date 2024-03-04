function caesarCipher(s, k) {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    let count = k;
    while (count >= 26) {
        count -= 26;
    }
    let rotatedCaesar = s.split('').map((b) => {
        if (/^[a-z]$/.test(b)) {
            const sIndex = a.indexOf(b);
            const sumIndex = sIndex + count;
            return a[sumIndex >= 26 ? sumIndex - 26 : sumIndex];
        } else if (/^[A-Z]$/.test(b)) {
            const sIndex = a.indexOf(b.toLowerCase());
            const sumIndex = sIndex + count;
            return a[sumIndex >= 26 ? sumIndex - 26 : sumIndex].toUpperCase();
        } else {
            return b;
        }
    });
    return rotatedCaesar.filter((a) => a !== undefined).join('');
}

console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 100));
