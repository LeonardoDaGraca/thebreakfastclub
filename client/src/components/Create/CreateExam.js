import React, { useState } from 'react';
import CreateForm from './CreateForm';
import CreateBtn from './CreateBtn';

const CreateExam = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="p-10">
      {showForm ? (
        <CreateForm />
      ) : (
        <CreateBtn onClick={handleClick} />
      )}
    </div>
  );
};

export default CreateExam;
