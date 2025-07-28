import React, { useState, useEffect } from 'react';

type Props = {
  onSubmit: (name: string) => void;
  editingName?: string; // tên đang sửa
};

const StudentForm: React.FC<Props> = ({ onSubmit, editingName }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingName) setName(editingName);
  }, [editingName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onSubmit(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={name}
        placeholder="Nhập tên sinh viên"
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, width: '60%' }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>
        {editingName ? 'Cập nhật' : 'Thêm'}
      </button>
    </form>
  );
};

export default StudentForm;
