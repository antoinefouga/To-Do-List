import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Entrer une tâche..."
          value={newTask}
          onChange={handleChange}
        />
        <button className="add-button" type="button" onClick={addTask}>
          Ajouter
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p className="text">{task}</p>
            <button
              className="delete-button"
              type="button"
              onClick={() => deleteTask(index)}
            >
              Supprimer
            </button>
            <button
              className="move-button"
              type="button"
              onClick={() => moveTaskUp(index)}
            >
              Haut
            </button>
            <button
              className="move-button"
              type="button"
              onClick={() => moveTaskDown(index)}
            >
              Bas
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
