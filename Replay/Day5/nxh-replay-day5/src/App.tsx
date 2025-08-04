import React from "react";
import XinChao from "./components/hello";
import Counter from "./components/counter";
import TodoItem from "./components/todoItem";
import TodoList from "./components/todoList";
function App() {
  return (
    <div>
         <XinChao name="Hưởng" age={20} />
          <Counter/>
          <TodoItem task="Học React" completed={true} />
          <TodoList/>
    </div>
   
  );
}

export default App;
