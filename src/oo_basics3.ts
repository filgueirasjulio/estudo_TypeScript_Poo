export class Address {

    constructor(
        public address: string,
        public zipCode: string,
        public number?: number
    ) { }
}

export class User {
    name: string
    email: string
    address: Address[] = []
    active: boolean = false

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }

    addAddress(newAddress: Address): void {
        this.address.push(newAddress)
    }

    getAddress(): Address[] {
        return this.address;
    }
}

const address1 = new Address('Rua x', '64392-043', 100);

const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com')
console.log(julio)
julio.addAddress(address1)
console.log(julio)