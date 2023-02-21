"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, active = false) {
        this.active = false;
        this.name = name;
        this.email = email;
        this.active = active;
    }
}
exports.User = User;
const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com');
const clarissa = new User('Clarissa Miranda', 'clarissa_miranda@mail.com', true);
console.log(julio, clarissa);
