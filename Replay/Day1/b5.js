var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: ").concat(this.price);
    };
    return Product;
}());
var pro = new Product("1", "Hehe", 1000);
console.log(pro.getInfo());
