import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskDetailPage from './pages/TaskDetailPage';
import { TaskProvider } from './context/TaskContext';
import './App.css'; // Import your CSS here
function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetailPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
