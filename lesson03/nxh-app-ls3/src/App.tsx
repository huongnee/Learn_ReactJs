import React from 'react';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import FuncComp2 from './components/FuncComp2';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FuncComp3 from './components/FuncComp3';
import FuncListMember from './components/FunCListMember';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';
import IStudent from './components/IStudent';

function App() {
  // Biến đối tượng
  const objStudent = {
    name:"Hưởng nè",
    age:20,
    email:'Huong@gmail.com'
  }
  // Lớp giao diện đối tượng sinh viên
  // Mock data
  const students: IStudent [] = [
    { id: 1, name: 'Nguyễn Văn A', age: 20 },
    { id: 2, name: 'Trần Thị B', age: 22 },
    { id: 3, name: 'Lê Văn C', age: 19 },
    { id: 4, name: 'Phạm Thị D', age: 21 },
    { id: 5, name: 'Hoàng Văn E', age: 23 },
  ];

  return (
    <div className="container h-100">
      <div>
        <img src='https://devmaster.edu.vn/images/logo.png' alt='Devmaster Academy'/>
       
      </div>
      <div className='text-center alert alert-info'>
         <h1>Ngô Xuân Hưởng</h1>
      </div>
      <StudentList students={students} />
    </div>
  );
}

export default App;