import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('http://localhost:3000/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching tasks:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <ul>
          {tasks.map(task => (
            <li key={task._id}>{task.name}</li> // Adjust according to your task model
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
