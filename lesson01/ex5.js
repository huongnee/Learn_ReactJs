function greet(name) {
    return "Hello" + name;
}
console.log(greet("Hưởng nè"));
var fun_greet = function (name0) {
    return "hehe ".concat(name0);
};
console.log(fun_greet("Hưởng nè"));
var car;
(function (car) {
    car[car["merc"] = 0] = "merc";
    car[car["vision"] = 1] = "vision";
    car[car["Bently"] = 2] = "Bently";
})(car || (car = {}));
var xe = car.Bently;
console.log(xe);
var obj = {
    name1: "Hehe",
    age: 20
};
console.log(obj);
var us = "kaka";
var mes = "Xin ch\u00E0o ".concat(us);
var no = 9;
no = "haha";
if (typeof no === "string") {
    console.log("no : ", no.toUpperCase());
}
