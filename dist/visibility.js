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
    changeName(newName) {
        if (newName.length < 3) {
            throw new Error('invalid name');
        }
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com');
console.log(julio);
julio.changeName('Júlio Sérgio Filgueiras');
console.log(julio);
//julio.changeName('Jú');
