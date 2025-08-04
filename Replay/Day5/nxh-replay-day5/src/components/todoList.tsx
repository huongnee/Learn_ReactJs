import React, { useState, } from "react";
type Todo = {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoList(){
    // state chứa danh sách công việc
    const [todos , setTodos] = useState<Todo[]>([]);
    // state chứa công việc mới
    const [newTodo, setNewTodo] = useState("");
    // hàm thêm công việc
    const addTodo = () => {
      // tạo công việc
      const newTodoItem: Todo = {
        id: crypto.randomUUID(),
        text: newTodo,
        completed: false,
      };
      // thêm công việc vào danh sách công việc
      setTodos([...todos, newTodoItem]);
      // reset lại input sau khi thêm 
      setNewTodo("");
    }
    //đánh dấu hoàn thành, hoàn tác công việc
    const toggleTodo = (id: string) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
    }
    // xóa công việc
    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Todo List</h2>

      {/* Input thêm todo */}
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") addTodo();
        }}
        style={{ width: "70%", padding: "6px" }}
      />
      <button onClick={addTodo} style={{ padding: "6px 12px", marginLeft: 8 }}>
        Thêm
      </button>

      {/* Danh sách công việc */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 8,
              backgroundColor: "#f9f9f9",
              padding: 8,
              borderRadius: 4,
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: 12 }}
            />
            <span
              style={{
                flexGrow: 1,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#999" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: 12,
                background: "red",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}