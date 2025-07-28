import React from 'react';

type Props = {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
};

const StudentItem: React.FC<Props> = ({ name, onEdit, onDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: '1px solid #ccc' }}>
      <span>{name}</span>
      <div>
        <button onClick={onEdit}>Sửa</button>
        <button onClick={onDelete} style={{ marginLeft: 8 }}>Xóa</button>
      </div>
    </div>
  );
};

export default StudentItem;
