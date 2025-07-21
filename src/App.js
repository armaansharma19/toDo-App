import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  };

  return (
    <div style={{ padding: '100px' }}>
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
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
