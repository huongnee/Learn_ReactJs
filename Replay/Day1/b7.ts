abstract class Shape
{
    abstract getArea(): number;
}
class Rectangle extends Shape
{
    public width: number;
    public height: number;

    constructor(width: number, height: number)
    {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number{
        return this.width * this.height;
    }
}
const hcn = new Rectangle(10, 20);
console.log(hcn.getArea());