import React from 'react';
import { TaskListContent } from '../context/TaskListContext';

const TaskFormm = () => {
  const { addTask, clearList, editItem, editTask } = React.useContext(
    TaskListContent
  );

  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        className='task-input'
        placeholder='Add Task...'
        value={title}
        onChange={handleChange}
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className='btn clear-btn' onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskFormm;
