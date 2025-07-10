function greet(name: string): string
{
    return "Hello" + name
}
console.log(greet("Hưởng nè"))

const fun_greet = (name0: string): string =>
{
    return `hehe ${name0}`
}
console.log(fun_greet("Hưởng nè"))

enum car
{
    merc,
    vision,
    Bently
}
let xe: car = car.Bently
console.log(xe);

let obj: {name1: string;age: number} = {
    name1: "Hehe",
    age: 20
}
console.log(obj)

let us:string = "kaka"
let mes:string = `Xin chào ${us}`

let no: unknown = 9
no = "haha"
if(typeof no === "string")
{
    console.log("no : ",no.toUpperCase())
}
