class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        let count = this.crew * 1.5;
        return this.draft - count > 20;
    }
}
