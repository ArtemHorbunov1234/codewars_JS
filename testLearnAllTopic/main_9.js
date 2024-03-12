class ParkingLot {
    constructor(size) {
        this.size = size;
        this.array = [];
    }
    park(vehicle) {
        this.array.push(vehicle);
    }
    retrieve(license) {}
}

const p = new ParkingLot(6);
console.log(p.park(new Bike('B7')));
