class Person
{
    public name: string;
    public age: number;
    public email: string;

    constructor(name: string, age: number, email: string)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getInfo(): string{
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}
class Employee extends Person
{
    public salary: number;
    constructor(name: string, age: number, email: string, salary: number)
    {
        super(name, age, email);
        this.salary = salary;
    }

    getInfo(): string{
        return `${super.getInfo()}, Salary: ${this.salary}`;
    }
}

const nv1 = new Employee("Nguyễn Văn A", 20, "nguyenvana@gmail.com", 1000);
console.log(nv1.getInfo());