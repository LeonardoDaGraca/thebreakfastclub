import React, { useState } from "react";
import { CreateForm } from "./CreateForm2";
import { CreateBtn } from "./CreateBtn";

export const CreateExam = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("create form btn clicked");
    setShowForm(true);
  };

  const handleShowForm = () => {
    setShowForm(false);
  };

  return (
    <div className="p-10">
      {showForm ? (
        <CreateForm handleShowForm={handleShowForm} />
      ) : (
        <CreateBtn handleClick={handleClick} />
      )}
    </div>
  );
};

// export default CreateExam;
