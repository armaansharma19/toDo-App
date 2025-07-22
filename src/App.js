import React, { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(() => {
    // Load tasks from localStorage on first render
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever taskList changes
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
    <div style={{ marginLeft: "100px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {taskList.map((t, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <span
              style={{
                textDecoration: t.done ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {t.text}
            </span>
            <button onClick={() => handleToggleDone(index)}>
              {t.done ? 'Undo' : 'Mark as Done'}
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '5px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
