import React, { Component } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

export interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
  add: string;
  email: string;
  phone: string;
  state: string;
}

interface AppState {
  students: Student[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    students: [],
  };

  addStudent = (student: Student) => {
    this.setState((prevState) => ({
      students: [...prevState.students, student],
    }));
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>Danh sách sinh viên</h1>
        <AddStudent onAddStudent={this.addStudent} />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
