var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Email: ").concat(this.email);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, email, salary) {
        var _this = _super.call(this, name, age, email) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), ", Salary: ").concat(this.salary);
    };
    return Employee;
}(Person));
var nv1 = new Employee("Nguyễn Văn A", 20, "nguyenvana@gmail.com", 1000);
console.log(nv1.getInfo());
