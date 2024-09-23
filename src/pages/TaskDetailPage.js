import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetailPage = () => {
  const { tasks, markTaskComplete, deleteTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <p>Task not found!</p>;
  }

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
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <button onClick={handleComplete} disabled={task.completed}>
        Mark as Complete
      </button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskDetailPage;
