interface Animal
{
    name: string;
    age: number;
    makeSound(): string;
}
class cat implements Animal
{
    public name: string;
    public age: number;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    makeSound(): string{
        return `Tên mèo là ${this.name}, tuổi ${this.age}`;
    }
}
const meo = new cat("Meo", 1);
console.log(meo.makeSound());