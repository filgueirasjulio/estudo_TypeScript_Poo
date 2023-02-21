"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.User = void 0;
class User {
    constructor(name, email, address, active = false) {
        this.active = false;
        this.name = name;
        this.email = email;
        this.address = address;
        this.active = active;
    }
}
exports.User = User;
class Address {
    constructor(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
}
exports.Address = Address;
const address1 = new Address('Rua x', '64392-043', 100);
const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com', address1);
console.log(julio);
