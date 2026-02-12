import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null); // Task being edited
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Ensure backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    try {
      const res = await axios.post(API_URL, taskData);
      setTasks([res.data, ...tasks]);
    } catch (err) {
      setError(err.response?.data?.error || 'Error adding task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const res = await axios.put(`${API_URL}/${currentTask._id}`, taskData);
      setTasks(tasks.map(task => (task._id === currentTask._id ? res.data : task)));
      setCurrentTask(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Error updating task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Error deleting task');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Task Manager</h1>
        <p>Stay organized and get things done.</p>
      </div>

      {error && (
        <div style={{ background: '#fee2e2', color: '#ef4444', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      <TaskForm
        onSubmit={currentTask ? handleUpdateTask : handleAddTask}
        initialData={currentTask}
        onCancel={() => setCurrentTask(null)}
      />

      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading tasks...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={setCurrentTask}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default App;
