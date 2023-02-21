"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.User = void 0;
class User {
    constructor(name, email, active = false) {
        this.active = false;
        this.name = name;
        this.email = email;
        this.active = active;
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
    constructor(name, email, active, code) {
        super(name, email, active);
        this.code = code;
    }
    getName() {
        return `Manager: ${this.name}`;
    }
    getNumber() {
        return super.getNumber() + 10;
    }
}
exports.Manager = Manager;
const manager1 = new Manager('Manager1', 'manager1@email.com', true, '4t53s2');
console.log(manager1);
console.log(manager1.getNumber());
