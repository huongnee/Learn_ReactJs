type HelloProps ={
    name:string;
    age:number;
}
const XinChao: React.FC<HelloProps> = ({name,age}) => {
    return <h2>Xin chào {name} - {age}</h2>;
};
export default XinChao;