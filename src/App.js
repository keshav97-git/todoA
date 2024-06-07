import React from "react";
import TaskInput from "./component/taskInput";
import TaskList from "./component/taskList";

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

import "./styles.css";
