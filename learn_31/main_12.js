function hero(bullets, dragons) {
    if (bullets === 0 && dragons === 0) {
        return true;
    }
    return bullets / dragons >= 2;
}
console.log(hero(0, 0));
