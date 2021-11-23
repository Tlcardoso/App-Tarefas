import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  console.log(params);

  function handleClickReturn() {
    history.push('/');
  }
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleClickReturn}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.TaskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae
          blanditiis natus assumenda laborum, numquam temporibus, dignissimos
          porro eaque molestias fugit? Tenetur fuga aliquid praesentium eius,
          provident maxime numquam quisquam.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
