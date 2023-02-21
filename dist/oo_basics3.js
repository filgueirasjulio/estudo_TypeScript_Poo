"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Address = void 0;
class Address {
    constructor(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
}
exports.Address = Address;
class User {
    constructor(name, email, active = false) {
        this.address = [];
        this.active = false;
        this.name = name;
        this.email = email;
        this.active = active;
    }
    addAddress(newAddress) {
        this.address.push(newAddress);
    }
    getAddress() {
        return this.address;
    }
}
exports.User = User;
const address1 = new Address('Rua x', '64392-043', 100);
const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com');
console.log(julio);
julio.addAddress(address1);
console.log(julio);
