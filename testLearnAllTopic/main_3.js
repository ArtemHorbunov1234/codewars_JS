class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives < 1) {
            throw Error;
        } else if (this.number === n) {
            return true;
        } else {
            this.lives -= 1;
            return false;
        }
    }
}

let guesser = new Guesser(10, 2);
guesser.guess(9);
guesser.guess(4);
guesser.guess(2);
guesser.guess(6);
