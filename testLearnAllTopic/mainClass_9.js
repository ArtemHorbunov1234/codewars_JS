class Bike {
    constructor(model, license = 'AB-123') {
        this.model = model;
        this.license = license;
    }
}

class Car {
    constructor(model, license = 'AB-123') {
        this.model = model;
        this.license = license;
    }
}

class Van {
    constructor(model, license = 'AB-123') {
        this.model = model;
        this.license = license;
    }
}

class ParkingLot {
    constructor(size) {
        this.size = size;
        this.array = [];
    }
    park(vehicle) {
        if (this.size <= 0) {
            return false;
        }
        this.array.push(vehicle.model);
        switch (vehicle.license[0]) {
            case 'A':
                this.size -= 1;
                return true;
            case 'C':
                this.size -= 2;

                return true;
            case 'E':
                this.size -= 3;

                return true;
            default:
                break;
        }
    }
    retrieve(license) {
        for (const a of this.array) {
            if (license === a) {
                return true;
            }
        }
        return false;
    }
}

const p = new ParkingLot(6);
const bikes = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];
// console.log(bikes.map((b) => p.park(new Bike(b))));
console.log(p.park(new Van('V1')));
