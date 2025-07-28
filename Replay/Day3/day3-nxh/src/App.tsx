import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App: React.FC = () => {
  const [students, setStudents] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddOrUpdate = (name: string) => {
    if (editingIndex !== null) {
      // update
      const updated = [...students];
      updated[editingIndex] = name;
      setStudents(updated);
      setEditingIndex(null);
    } else {
      // new create ne
      setStudents([...students, name]);
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Quản lý sinh viên</h1>
      <StudentForm
        onSubmit={handleAddOrUpdate}
        editingName={editingIndex !== null ? students[editingIndex] : undefined}
      />
      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
