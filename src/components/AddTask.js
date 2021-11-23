import React from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = React.useState('');

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  function handleAddTaskClick() {
    handleTaskAddition(inputData);
    setInputData('');
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        className="add-task-input "
        value={inputData}
        type="text"
      />
      <div className=".add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
