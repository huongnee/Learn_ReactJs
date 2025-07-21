import React from 'react';
import { Student } from '../App';

interface Props {
  students: Student[];
}

const StudentList: React.FC<Props> = ({ students }) => {
  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Address</th><th>Email</th><th>Phone</th><th>State</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>{student.add}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
