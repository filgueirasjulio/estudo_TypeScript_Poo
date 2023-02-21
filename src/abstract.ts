abstract class Person {
    protected abstract score: number

    constructor(
       protected name: string,
    ) {}

    public abstract calcScore(): number;
}

class Student extends Person {
    protected score: number

    constructor(
        name: string,
        score: number
    ) {
        super(name),
        this.score = score
    }

    public setScore(score: number) : void {
        if (score < 0 || score > 900) {
            throw new Error ('Invalid score')
        }

        this.score = score
    }

    public calcScore(): number {
        return this.score + 800;
    }
}

class Teacher extends Person {
    protected score: number

    constructor(
        name: string,
        score: number
    ) {
        super(name),
        this.score = score
    }

    public calcScore(): number {
        return this.score + 900;
    }
}

const Student1 = new Student('Júlio', 700);
const Teacher1 = new Teacher('Clarissa', 600);