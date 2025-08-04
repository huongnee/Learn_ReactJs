import React, { useState, useEffect } from 'react';
import { Student } from '../App';

interface StudentFormProps {
  student: Student | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (student: Student) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ 
  student, 
  isOpen, 
  onClose, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState<Student>({
    id: '',
    studentId: '',
    name: '',
    age: 0,
    gender: 'Nam',
    birthday: '',
    address: '',
    isActive: true
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    } else {
      setFormData({
        id: '',
        studentId: '',
        name: '',
        age: 0,
        gender: 'Nam',
        birthday: '',
        address: '',
        isActive: true
      });
    }
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'isActive') {
      setFormData(prev => ({ ...prev, [name]: value === 'active' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="col-md-5 col-12 border ms-0 mt-2 ms-sm-2 mt-sm-0">
      <form onSubmit={handleSubmit} className="py-2">
        <h3>Thông tin sinh viên</h3>

        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Mã sinh viên</span>
          <input
            type="text"
            className="form-control rounded-0"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Họ và tên</span>
          <input
            type="text"
            className="form-control rounded-0"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Tuổi</span>
          <input 
            type="number" 
            className="form-control rounded-0" 
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Giới tính</span>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              className="mx-1 ms-3"
              name="gender"
              id="male"
              value="Nam"
              checked={formData.gender === 'Nam'}
              onChange={handleRadioChange}
            />
            <label htmlFor="male">Nam</label>
            <input
              type="radio"
              className="mx-1 ms-3"
              name="gender"
              id="female"
              value="Nữ"
              checked={formData.gender === 'Nữ'}
              onChange={handleRadioChange}
            />
            <label htmlFor="female">Nữ</label>
          </div>
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Ngày sinh</span>
          <input 
            type="date" 
            className="form-control rounded-0" 
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Địa chỉ</span>
          <textarea
            name="address"
            className="form-control rounded-0"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <div className="input-group mb-2">
          <span className="input-group-text rounded-0">Trạng thái</span>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              className="mx-1 ms-3"
              name="isActive"
              id="is-active"
              value="active"
              checked={formData.isActive}
              onChange={handleRadioChange}
            />
            <label htmlFor="is-active">Active</label>
            <input
              type="radio"
              className="mx-1 ms-3"
              name="isActive"
              id="non-active"
              value="non-active"
              checked={!formData.isActive}
              onChange={handleRadioChange}
            />
            <label htmlFor="non-active">Non-Active</label>
          </div>
        </div>

        <button className="btn btn-success rounded-0 mt-2 me-2" type="submit">
          Save
        </button>
        <button 
          type="button" 
          className="btn btn-secondary rounded-0 mt-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default StudentForm;