export class User {
    name: string
    email: string
    active: boolean = false

    constructor(name: string, email:string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }
}

const julio = new User('Júlio Filgueiras', 'julio_filgueiras@mail.com')
const clarissa = new User('Clarissa Miranda', 'clarissa_miranda@mail.com', true)

console.log(julio, clarissa)

