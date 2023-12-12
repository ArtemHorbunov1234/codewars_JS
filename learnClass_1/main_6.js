class Journey {
    constructor(object, crew, balloons) {
        this.object = object;
        this.crew = crew;
        this.balloons = balloons;
    }

    isPossible() {
        const weightObject = this.object['weight'] + this.crew * 80;
        const balloonsObject = (4.8 * this.balloons) / 1000;

        return balloonsObject > weightObject;
    }
}
