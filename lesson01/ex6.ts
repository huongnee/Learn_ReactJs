//union type - kết hợp nhiều kiểu
let value: string | number
value = 15
value = "haha"
// value = true => false

//Type alias - định danh kiểu
type us = string | number
let us1: us = 15
let us2: us = "hahaa"

//Interface - giao diện đối tượng
interface Person
{
    name: string;
    age: number;
    email?: string; // cho phép null
}

const user1: Person =
{
    name: "hehe",
    age: 15,
   // email: "ok"
} 
console.log(user1)