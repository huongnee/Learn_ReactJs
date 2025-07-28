import React from 'react';
import StudentItem from './StudentItem';

type Props = {
  students: string[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

const StudentList: React.FC<Props> = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      {students.map((student, index) => (
        <StudentItem
          key={index}
          name={student}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default StudentList;
