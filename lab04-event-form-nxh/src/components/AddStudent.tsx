import React, { Component } from 'react';
import { Student } from '../App';

interface Props {
  onAddStudent: (student: Student) => void;
}

interface State extends Student {}

class AddStudent extends Component<Props, State> {
  state: State = {
    id: 0,
    name: '',
    age: 0,
    gender: '',
    add: '',
    email: '',
    phone: '',
    state: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onAddStudent(this.state);
    this.setState({
      id: 0, name: '', age: 0, gender: '', add: '', email: '', phone: '', state: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: 20 }}>
        {['id', 'name', 'age', 'gender', 'add', 'email', 'phone', 'state'].map((field) => (
          <div key={field}>
            <label>{field.toUpperCase()}: </label>
            <input
              name={field}
              value={(this.state as any)[field]}
              onChange={this.handleChange}
              type={field === 'age' || field === 'id' ? 'number' : 'text'}
              required
            />
          </div>
        ))}
        <button type="submit">Thêm sinh viên</button>
      </form>
    );
  }
}

export default AddStudent;
