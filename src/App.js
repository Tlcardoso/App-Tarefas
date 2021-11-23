import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
//teste2
import TaskDetails from './components/TaskDetails';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  // let message = 'hello';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10',
      );
      setTasks(data);
    }
    fetchTasks();
  }, []);

  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  }

  function handleTaskAddition(taskTitle) {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  }

  function handleTaskRemove(taskId) {
    const deleteTasks = tasks.filter((task) => task.id != taskId);
    console.log(taskId);
    setTasks(deleteTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        />
        <Route path="/:TaskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
