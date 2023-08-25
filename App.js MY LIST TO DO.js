import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tareas, setTareas] = useState([
    "Mercar",
    "Preparar informe",
    "Echarle gasolina al carro",
    "Asistir reunión virtual",
  ]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div className="container">
      <h1>My To Do List</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={task}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="task-list">
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}
              <button
                className="delete-btn"
                onClick={() => eliminarTarea(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
