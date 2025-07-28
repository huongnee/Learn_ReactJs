var cat = /** @class */ (function () {
    function cat(name, age) {
        this.name = name;
        this.age = age;
    }
    cat.prototype.makeSound = function () {
        return "T\u00EAn m\u00E8o l\u00E0 ".concat(this.name, ", tu\u1ED5i ").concat(this.age);
    };
    return cat;
}());
var meo = new cat("Meo", 1);
console.log(meo.makeSound());
