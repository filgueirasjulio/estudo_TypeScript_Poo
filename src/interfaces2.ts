type DefaultResponse = { id: (string | number), name: string, createdAt: string }
type ID = (string|number)
type InputDto = {name: string, active: boolean}

interface Repository {
    readonly model: any;

    findAll(): DefaultResponse[],
    findById(id: (string|number)): DefaultResponse
    insert(data: InputDto): DefaultResponse
    update(id: ID, data: InputDto): DefaultResponse
    destroy(id: ID): boolean
}

class UserRepository implements Repository {
    model: any;

    constructor(model: any) {
        this.model = model
    }

    findAll(): DefaultResponse[] {
        throw new Error("Method not implemented.");
    }
    findById(id: string | number): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    insert(data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    update(id: ID, data: InputDto): DefaultResponse {
        throw new Error("Method not implemented.");
    }
    destroy(id: ID): boolean {
        throw new Error("Method not implemented.");
    }  
}

const getAllUsers = (repository: Repository): DefaultResponse[] => {
    return repository.findAll()
}

export { }