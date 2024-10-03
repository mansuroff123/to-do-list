import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Yangi vazifa qo'shish
  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask(''); // Qo'shilgandan keyin inputni tozalash
    }
  };

  // Vazifani bajarilgan deb belgilash
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Vazifani o'chirish
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>To-do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Vazifa qo'shish"
        />
        <button onClick={addTask}>Qo'shish</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Bajarilmadi' : 'Bajarildi'}
            </button>
            <button onClick={() => deleteTask(task.id)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
