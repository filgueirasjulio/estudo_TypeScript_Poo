"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.User = exports.Address = void 0;
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
    getNumber() {
        return 10;
    }
}
exports.User = User;
class Manager extends User {
    getName() {
        return `Manager: ${this.name}`;
    }
    getNumber() {
        return 15;
    }
}
exports.Manager = Manager;
const manager1 = new Manager('Manager1', 'manager1@email.com', true);
console.log(manager1);
console.log(manager1.getName());
