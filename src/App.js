import React, { useState, useEffect } from 'react';
import './App.css'; // <- import the CSS file

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    const newTask = { text: task, done: false };
    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleToggleDone = (index) => {
    const updated = [...taskList];
    updated[index].done = !updated[index].done;
    setTaskList(updated);
  };

  const handleDelete = (index) => {
    const updated = taskList.filter((_, i) => i !== index);
    setTaskList(updated);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <ul className="task-list">
        {taskList.map((t, index) => (
          <li key={index} className="task-item">
            <span className={t.done ? 'done' : ''}>{t.text}</span>
            <div className="actions">
              <button onClick={() => handleToggleDone(index)}>
                {t.done ? 'Undo' : 'Mark as Done'}
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
