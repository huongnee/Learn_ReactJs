const user =
{
    name: "Hưởng",
    age: 20
}
const Info  = (user1) =>
{
    return `Name: ${user1.name}, Age: ${user1.age}`;
}
const element = (
    <div>
        <h2>Info</h2>
        <p>{Info(user)}</p>
    </div>
)
ReactDOM.render(element, document.getElementById("root"));