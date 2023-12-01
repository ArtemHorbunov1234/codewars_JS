class SmallestIntegerFinder {
    findSmallestInt(args) {
        this.args = args;

        if (this.args.length === 0) {
            return undefined;
        }
        let count = this.args[0];
        for (const a of this.args) {
            if (count > a && count > 0) {
                count = a;
            }
        }
        return console.log(count);
    }
}

const smallestIntegerFinder = new SmallestIntegerFinder();
const smallestInt = smallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 18]);
