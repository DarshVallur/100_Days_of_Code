import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
export const TaskListContent = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [task, setTask] = useState(initialState);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const addTask = (title) => {
    setTask([
      ...task,
      {
        title,
        id: uuid(),
      },
    ]);
  };

  const removeTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setTask([]);
  };

  const findItem = (id) => {
    const item = task.find((item) => item.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = task.map((task) => (task.id === id ? { title, id } : task));
    setTask(newTask);
    setEditItem(null);
  };

  return (
    <TaskListContent.Provider
      value={{
        task,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TaskListContent.Provider>
  );
};

export default TaskListContextProvider;
