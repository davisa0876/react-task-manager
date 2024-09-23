import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <Link to={`/task/${task.id}`} className="link-button">
                View Details
              </Link>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
      <Link to="/add-task" className="link-button">Add New Task</Link>
    </div>
  );
};

export default Home;
