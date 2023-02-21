"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor() {
        this._address = '';
        this._zipCode = '';
    }
    set address(address) {
        if (address.length < 3) {
            throw new Error('invalid address');
        }
        this._address = address;
    }
    get address() {
        return this._address;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    get zipCode() {
        return this._zipCode.replace(/\D/g, '');
    }
    set numberA(numberA) {
        this._numberA = numberA;
    }
    get numberA() {
        var _a;
        return (_a = this._numberA) !== null && _a !== void 0 ? _a : 123;
    }
    static isCepValid(zipCode) {
        return parseInt(zipCode.replace(/\D/g, '')) > Address.defaultCepValidation;
    }
}
exports.Address = Address;
Address.defaultCepValidation = 75000000;
const address1 = new Address();
console.log(Address.isCepValid('91150-000'));
console.log(Address.isCepValid('10000-000'));
