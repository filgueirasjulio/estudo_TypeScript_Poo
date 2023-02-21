export class Address {

    constructor(
        public address: string,
        public readonly zipCode: string,
        public number?: number
    ) { }

}

const address1 = new Address('Rua x', '64392-043', 100);
console.log(address1.zipCode)
//address1.zipCode = '41150-000' - o readonly não permite
//console.log(address1.zipCode)