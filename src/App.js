import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, { text: task, done: false }]);
    setTask('');
  };

  const handleToggleDone = (index) => {
    const newList = [...taskList];
    newList[index].done = !newList[index].done;
    setTaskList(newList);
  };

  const handleDelete = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
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
            <span style={{ textDecoration: t.done ? 'line-through' : 'none', marginRight: '10px' }}>
              {t.text}
            </span>
            <button onClick={() => handleToggleDone(index)}>
              {t.done ? 'Undo' : 'Mark as Done'}
            </button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
