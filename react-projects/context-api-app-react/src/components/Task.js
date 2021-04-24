import React, { useContext } from 'react';
import { TaskListContent } from '../context/TaskListContext';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContent);
  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <button
        className='btn-delete task-btn'
        onClick={() => removeTask(task.id)}
      >
        <i className='fas fa-trash-alt'></i>
      </button>
      <button className='btn-edit task-btn' onClick={() => findItem(task.id)}>
        <i className='fas fa-pen'></i>
      </button>
    </li>
  );
};

export default Task;
