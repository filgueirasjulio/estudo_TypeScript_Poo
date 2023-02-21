export class Address {

    constructor(
        private address: string,
        private zipCode: string,
        private number?: number
    ) { }

}

export class User {
   private name: string
   private email: string
   private address: Address[] = []
   private active: boolean = false

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }

    public addAddress(newAddress: Address): void {
        this.address.push(newAddress)
    }

    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name')
        }
        this.name = newName
    }

    public getName(): string {
        return this.name
    }
}

const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com')
console.log(julio)
julio.changeName('Júlio Sérgio Filgueiras');
console.log(julio)
//julio.changeName('Jú');
