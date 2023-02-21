export class User {
    name: string
    email: string
    address: Address
    active: boolean = false

    constructor(name: string, email: string, address: Address, active: boolean = false) {
        this.name = name
        this.email = email
        this.address = address
        this.active = active
    }
}

export class Address {

    constructor(
        public address: string,
        public zipCode: string,
        public number?: number
    ) { }
}

const address1 = new Address('Rua x', '64392-043', 100);

const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com', address1)
console.log(julio)