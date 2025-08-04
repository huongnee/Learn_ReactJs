import React from 'react';
import { Student } from '../App';

interface StudentListProps {
  students: Student[];
  onView: (student: Student) => void;
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, onView, onEdit, onDelete }) => {
  return (
    <div className="list">
      <h3>Danh sách sinh viên</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sinh viên</th>
            <th>Họ và tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="align-middle">
              <td className="text-center">{index + 1}</td>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td className="text-center">{student.age}</td>
              <td className="text-center">{student.gender}</td>
              <td className="text-center">
                <button 
                  className="btn btn-success rounded-0 me-1"
                  onClick={() => onView(student)}
                >
                  Xem
                </button>
                <button 
                  className="btn btn-warning rounded-0 me-1"
                  onClick={() => onEdit(student)}
                >
                  Sửa
                </button>
                <button 
                  className="btn btn-danger rounded-0"
                  onClick={() => onDelete(student)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;