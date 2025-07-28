class Product
{
    public id: string;
    public name: string;
    public price: number;

    constructor(id: string, name: string, price: number)
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getInfo(): string{
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
    }
}
const pro = new Product("1", "Hehe", 1000);
console.log(pro.getInfo());