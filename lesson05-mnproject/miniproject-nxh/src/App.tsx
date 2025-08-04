import React, { useState } from 'react';
import Header from './components/Header';
import Control from './components/Control';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

export interface Student {
  id: string;
  studentId: string;
  name: string;
  age: number;
  gender: 'Nam' | 'Nữ';
  birthday: string;
  address: string;
  isActive: boolean;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      studentId: 'SV01',
      name: 'Nguyễn Văn A',
      age: 20,
      gender: 'Nam',
      birthday: '2003-01-01',
      address: 'Hà Nội',
      isActive: true
    },
    {
      id: '2',
      studentId: 'SV02',
      name: 'Trần Thị Bình',
      age: 22,
      gender: 'Nữ',
      birthday: '2001-05-15',
      address: 'Hồ Chí Minh',
      isActive: false
    }
  ]);
  
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handleSort = (option: string) => {
    const sortedStudents = [...students];
    
    switch(option) {
      case 'name_asc':
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        sortedStudents.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    
    setStudents(sortedStudents);
  };

  const handleAddNew = () => {
    setSelectedStudent(null);
    setIsFormOpen(true);
  };

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  };

  const handleDelete = (student: Student) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này?')) {
      setStudents(students.filter(s => s.id !== student.id));
    }
  };

  const handleSubmit = (student: Student) => {
    if (student.id) {
      // Update existing student
      setStudents(students.map(s => 
        s.id === student.id ? student : s
      ));
    } else {
      // Add new student
      const newStudent = {
        ...student,
        id: Date.now().toString()
      };
      setStudents([...students, newStudent]);
    }
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          <div className="col-12 col-md border">
            <Control 
              onSearch={handleSearch} 
              onSort={handleSort} 
              onAddNew={handleAddNew} 
            />
            <hr />
            <StudentList 
              students={filteredStudents} 
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
          <StudentForm 
            student={selectedStudent}
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default App;