import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { GrClose, GrEdit } from "react-icons/gr";
import { RiDeleteBin7Line } from "react-icons/ri";
// import { Update } from "../Update/Update";
import { EditPopUp } from "../EditPopUp/EditPopUp";

export const ExamDataPopUp = ({ currentExam, visible, onClose, examNum }) => {
  const [editPopUpModal, setEditPopUpModal] = useState(false);
  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  const handleUpdateClose = () => setShowUpdatePopUp(false);
  // const [visible, setVisible] = useState(false);

  const handleDeleteExam = (e, id) => {
    console.log(id);
    fetch(`http://localhost:9000/api/exams/${id}`, {
      method: "DELETE",
      body: id,
    })
      .then((res) => {
        if (res.status === 200) {
          onClose();
        }
      })
      .catch((err) => console.error(err));
  };

  if (!visible) return null;

  return (
    <>
      {/* <EditPopUp  visible={visible} onClose={() => setVisible(false)}/> */}
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
        <div className="bg-white rounded-xl shadow-lg p-2 pt-3 overflow-y-auto h-3/4 w-11/12 md:h-3/5 lg:h-3/5 lg:w-full  xl:h-2/3">
          <div className="flex items-center justify-between  xl:p-2 2xl:p-6">
            <button
              onClick={() => {
                setEditPopUpModal(true);
              }}
              className=" transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
            >
              <GrEdit className="" />
              {/* <EditExam patientId={selectedPatientId} onClose={() => setSelectedPatientId(null)} /> */}
            </button>
            <button
              onClick={(e, id) => handleDeleteExam(e, currentExam.exam._id)}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
            >
              <RiDeleteBin7Line />
            </button>
            <button
              onClick={onClose}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
            >
              <GrClose className="" />
            </button>
          </div>
          <div className="flex justify-center items-center w-full pt-6 mb-6 md:pt-2 md:mb-1 xl:mb-3 2xl:h-auto ">
            <table className="flex flex-col w-full justify-center items-center mt-2 xl:gap-y-2 2xl:mb-10 2xl:gap-y-4 ">
              <thead className="">
                <tr className="flex flex-col items-center ">
                  <th className="text-lg font-semibold  text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                    Patient ID
                  </th>
                </tr>
              </thead>
              <tbody className="flex flex-col justify-center items-center w-full ">
                <tr className="">
                  <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                    {currentExam.exam.patientId}
                  </td>
                </tr>
                <hr className="border-b-2 2xl:border-b-4 border-gray-200 w-11/12 mt-2 2xl:mt-6" />
              </tbody>
            </table>
          </div>
          <div className="flex h-auto p-2 items-center md:px-6 lg:px-4 2xl:px-14">
            <div className="w-full items-center   ">
              <table className="flex flex-col items-center mb-10 md:mb-4 xl:mb-6 2xl:mb-10 2xl:h-auto">
                <thead className="w-full mb-2  2xl:mb-7  ">
                  <tr className="grid grid-cols-3  text-center w-full ">
                    <th className=" font-medium text-gray-900 text-xs md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Exam ID
                    </th>
                    <th className="font-medium text-gray-900 text-xs md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Dx to Img Study (days)
                    </th>
                    <th className="font-medium text-gray-900 text-xs md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Dx to Imgaging Time (hrs)
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full md:mb-0 lg:mb-4 xl:mb-2 2xl:mb-16 ">
                  <tr className="grid grid-cols-3 text-center w-full ">
                    <tr className="grid grid-cols-1">
                      <td className="text-sm font-medium text-blue-600 mb-2 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl 2xl:mb-4  ">
                        Exam-{examNum}
                      </td>
                      {/* <td className="text-sm font-medium text-gray-500 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl  ">{exam._id}</td>    */}
                    </tr>
                    <td className=" text-sm font-medium text-gray-500 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl   ">
                      {currentExam.exam.daysImageDiagnosos}
                    </td>
                    <td className=" text-sm font-medium text-gray-500 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl   ">
                      {currentExam.exam.hrsImageDiagnosis}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="flex flex-col items-center mb-10 md:mb-2 xl:mb-6 2xl:mb-10 2xl:h-auto">
                <thead className="w-full mb-2  2xl:mb-7  ">
                  <tr className="grid grid-cols-4    w-full ">
                    <th className="font-medium text-gray-900 text-xs order-1 col-span-2 md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Study Modality
                    </th>
                    <th className="font-medium text-gray-900 text-xs order-2 col-span-2 md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Image Study Description
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full mb-10 md:mb-6 lg:mb-6 xl:mb-10 2xl:mb-16">
                  <tr className="grid grid-cols-4 w-full ">
                    <td className="text-sm font-medium text-gray-500 order-1 col-span-2 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl 2xl:mb-2 ">
                      {currentExam.exam.modality}
                    </td>
                    <td className=" text-sm font-medium text-gray-500 order-2  col-span-2 md:text-sm lg:text-base xl:text-2xl 2xl:text-5xl 2xl:mb-2  ">
                      {currentExam.exam.imageDescription}
                    </td>
                  </tr>
                </tbody>
                <thead className="w-full mb-2 2xl:mb-7  ">
                  <tr className="grid grid-cols-4  w-full ">
                    <th className="font-medium text-gray-900 text-xs order-3 col-span-4 md:text-base lg:text-base xl:text-2xl 2xl:text-5xl">
                      Radiologist Key Findings
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full mb-1 lg:px-6 lg:mb-1.5 xl:mb-2 2xl:mb-6">
                  <tr className="grid grid-cols-4 w-full ">
                    <td className=" text-sm font-medium text-gray-500 order-3 col-span-4  md:text-sm  lg:text-base  xl:text-2xl 2xl:text-5xl  ">
                      {currentExam.exam.findings}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <EditPopUp
            open={editPopUpModal}
            onClose={() => setEditPopUpModal(false)}
            patientId={currentExam.exam.patientId}
          />
          {/* <Link onClick={() => {setShowUpdatePopUp(true)}}>
                            <p className="text-sm text-blue-600 hover:font-bold hover:underline ">Update</p>
                        </Link> */}
        </div>
        {/* <Update key={exam._id} exam={exam} onClose={handleUpdateClose} visible={showUpdatePopUp} isVisible={setShowUpdatePopUp}/> */}
      </div>
    </>
  );
};
