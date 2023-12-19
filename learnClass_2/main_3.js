class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives === 0) {
            return console.log('Error');
        }
        this.lives = this.lives - 1;
        console.log(this.lives);
        if (n === this.number) {
            return true;
        } else if (n !== this.number) {
            return false;
        } else {
            return error;
        }
    }
}

let guesser = new Guesser(10, 2);

console.log(guesser.guess(10));
console.log(guesser.guess(10));
