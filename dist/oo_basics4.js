"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(address, zipCode, number) {
        this.address = address;
        this.zipCode = zipCode;
        this.number = number;
    }
}
exports.Address = Address;
const address1 = new Address('Rua x', '64392-043', 100);
console.log(address1.zipCode);
//address1.zipCode = '41150-000' - o readonly não permite
//console.log(address1.zipCode)
