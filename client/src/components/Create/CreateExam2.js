import React, { useState } from "react";

import { CreateBtn } from "./CreateBtn";

export const CreateExam2 = ({ isOpen, onClose, handleCloseModal }) => {
  const [examName, setExamName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the exam name, such as submit it to a server
    // ...
    onClose();
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Create Exam
                  </h3>
                  <div className="mt-2">
                    <label
                      htmlFor="exam-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Exam Name
                    </label>
                    <input
                      type="text"
                      name="exam-name"
                      id="exam-name"
                      className="mt-1 mb-4 p-2 border border-gray-300 rounded-md w-full"
                      value={examName}
                      onChange={(event) => setExamName(event.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border bg-[#060957] font-extrabold font-ubuntu shadow-lg shadow-cyan-600 text-white hover:bg-[#087CA8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#060957] sm:ml-3 sm:w-auto sm:text-sm">
                Create
              </button>
              <button
                onClick={handleCloseModal}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


// export const CreateExam = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log("create form btn clicked");
//     setShowForm(true);
//   };

//   const handleShowForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="p-10">
//       {showForm ? (
//         <CreateForm handleShowForm={handleShowForm} />
//       ) : (
//         <CreateBtn handleClick={handleClick} />
//       )}
//     </div>
//   );
// };

// // export default CreateExam;
