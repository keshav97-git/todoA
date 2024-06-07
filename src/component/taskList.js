import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTaskCompletion } from "../redux/action";
import "../styles.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState("");

  const handleEdit = (index, task) => {
    setIsEditing(index);
    setCurrentTask(task.text);
  };

  const handleSave = (index) => {
    dispatch(editTask(index, currentTask));
    setIsEditing(null);
    setCurrentTask("");
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            listStyle: "none",
          }}
        >
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              <span onClick={() => dispatch(toggleTaskCompletion(index))}>
                {task.text}
              </span>
              <button onClick={() => handleEdit(index, task)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(index))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
