class StaffList {
    constructor() {
        this.arr = [];
    }
    add(name, age) {
        if (age <= 20) {
            throw Error('Staff member age must be greater than 20');
        }
        if (this.arr.some((a) => a.name === name)) {
            throw Error('Staff member with the same name already exists');
        }
        this.arr.push({ name, age });
    }
    remove(name) {
        const count = this.arr.findIndex((a) => a.name === name);
        if (count !== -1) {
            this.arr.splice(count, 1);

            return true;
        } else {
            return false;
        }
    }
    getSize() {
        return this.arr.length;
    }
}
const staffList = new StaffList();

staffList.add('Adam', 21);
staffList.add('Artem', 23);
staffList.add('Mark', 23);

console.log(staffList.remove('Arte3m'));
console.log(staffList.arr);
