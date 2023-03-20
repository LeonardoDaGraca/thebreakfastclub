import React from "react";
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ExamDataPopUp } from "./ExamDataPopUp";

export default function DataPopUp({
  visible,
  onClose,
  item,
  showExamDataPopUp,
  setShowExamDataPopUp,
  handleExamDataClose,
}) {
  if (!visible) return null;
  console.table(item);

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-2">
        <div className="bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-auto">
          <div className="flex justify-end">
            <button
              className="border rounded-full p-2 shadow-md "
              onClick={onClose}
            >
              <GrClose className="text-gray-600 font-bold" />
            </button>
          </div>
          <div className=" h-auto space-y-2">
            <div className="flex items-center px-4 ">
              <h1 className="text-base font-bold   w-24">Patient ID</h1>
              <p className="text-base font-medium text-blue-600 hover:font-bold hover:underline ">
                {item._id}
              </p>
            </div>
            <div className="flex items-center px-4">
              <h1 className="text-base font-bold  w-24">Exams</h1>
              <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">
                {/* { item.exams.sort().map(function (exam, index) {
                                return (
                                <>
                                    <Link onClick={() => setShowExamDataPopUp(true)}>
                                      <p className="text-sm text-blue-600 hover:font-bold hover:underline ">Exam {index+1}</p>
                                    </Link>
                                    <ExamDataPopUp 
                                      key={exam._id} 
                                      exam={exam} 
                                      examNum={index+1} 
                                      onClose={handleExamDataClose} visible={showExamDataPopUp}
                                      handleUpdate={handleUpdate}
                                    />
                                </>
                                )
                            })}  */}
              </p>
            </div>
            <div className="flex items-center px-4">
              <h1 className="text-base font-bold  w-24">Age</h1>
              <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">
                {item.age}
              </p>
            </div>
            <div className="flex items-center px-4">
              <h1 className="text-base font-bold  w-24">Sex</h1>
              <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">
                {item.sex}
              </p>
            </div>
            <div className="flex items-center px-4">
              <h1 className="text-base font-bold  w-24">BMI</h1>
              <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">
                {item.bmi}
              </p>
            </div>
            <div className="flex items-center px-4">
              <h1 className="text-base font-bold  w-24">Zip Code</h1>
              <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">
                {item.zip}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* )     
            })};  */}
    </>
  );
}
