import React from 'react';

export const CreateBtn = ({ handleClick }) => {
  // const handleClick = () => {
  //   console.log('Button was clicked');
  //   onClick();
  // };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
    >
      Create Exam
    </button>
  );
};