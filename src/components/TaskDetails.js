// Detailed view of a single task
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
  const { tasks, markTaskComplete, deleteTask } = useContext(TaskContext);
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));
  const navigate = useNavigate();

  if (!task) return <p>Task not found!</p>;

  const handleComplete = () => {
    markTaskComplete(task.id);
    navigate('/');
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/');
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <button onClick={handleComplete} disabled={task.completed}>
        Mark as Complete
      </button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskDetails;
