import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([""]);
  const [newTask, setNewTask] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

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

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedTasks = [...tasks];
    const draggedItem = updatedTasks.splice(draggedItemIndex, 1)[0];
    updatedTasks.splice(index, 0, draggedItem);
    setTasks(updatedTasks);
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
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragEnd}
            onDrop={() => handleDrop(index)}
          >
            <p className="text">{task}</p>
            <button
              className="delete-button"
              type="button"
              onClick={() => deleteTask(index)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
