// Displays a list of tasks
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            {task.completed ? " (Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
