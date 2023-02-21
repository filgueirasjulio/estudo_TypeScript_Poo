export class Address {

    constructor(
        private address: string,
        private zipCode: string,
        private number?: number
    ) { }

}

export class User {
   protected name: string
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

    public getNumber(): number {
        return 10;
    }
}

export class Manager extends User {
    public getName(): string {
        return `Manager: ${this.name}`
    }

    
    public getNumber(): number {
        return 15;
    }
}

const manager1 = new Manager('Manager1', 'manager1@email.com', true)
console.log(manager1)
console.log(manager1.getName())