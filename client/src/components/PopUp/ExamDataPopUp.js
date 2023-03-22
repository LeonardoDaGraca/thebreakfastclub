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
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm ">
        <div className="bg-white rounded-xl shadow-lg overflow-y-auto w-5/6 2xl:w-3/4  h-1/2 ">
          <div className="flex items-center justify-between p-2 xl:p-2 2xl:p-3">
            <button
              onClick={() => {
                setEditPopUpModal(true);
              }}
              className=" transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2  text-xs p-1.5 md:text-sm md:p-1.5 lg:text-base lg:p-1.5  xl:font-bold xl:p-2  2xl:font-bold 2xl:p-2"
            >
              <GrEdit className="" />
              {/* <EditExam patientId={selectedPatientId} onClose={() => setSelectedPatientId(null)} /> */}
            </button>
            <button
              onClick={(e, id) => handleDeleteExam(e, currentExam.exam._id)}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2 text-xs p-1.5 md:text-sm md:p-1.5 lg:text-base lg:p-1.5  xl:font-bold xl:p-2  2xl:font-bold 2xl:p-2"
            >
              <RiDeleteBin7Line />
            </button>
            <button
              onClick={onClose}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border-2 text-xs p-1.5 md:text-sm md:p-1.5 lg:text-base lg:p-1.5  xl:font-bold xl:p-2  2xl:font-bold 2xl:p-2"
            >
              <GrClose className="" />
            </button>
          </div>
          <div className="flex justify-center items-center w-full pt-6 lg:pt-10  2xl:h-auto ">
            <table className="flex flex-col w-full justify-center items-center 2xl:gap-y-1 ">
              <thead className="w-full">
                <tr className="flex flex-col items-center ">
                  <th className="text-lg font-semibold  text-[#393939] md:text-xl lg:text-xl  2xl:text-2xl">
                    Patient ID
                  </th>
                </tr>
              </thead>
              <tbody className="flex flex-col justify-center items-center w-full ">
                <tr className="">
                  <td className="w-full text-center text-base font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-lg 2xl:text-xl">
                    {currentExam.exam.patientId}
                  </td>
                </tr>
                <hr className="border-b-2 2xl:border-b-4 border-gray-200 w-11/12 mt-2 2xl:mt-2" />
              </tbody>
            </table>
          </div>
          <div className="flex h-auto p-2 items-center ">
            <div className="w-full items-center px-1.5 md:px-8 lg:px-10">
              <table className="flex flex-col  h-auto mb-3 md:mb-3 lg:mb-2.5">
                <thead className="w-full ">
                  <tr className="grid grid-cols-3   w-full ">
                    <th className="text-sm font-semibold   text-[#393939] md:text-lg lg:text-xl  2xl:text-xl">
                      Exam ID
                    </th>
                    <th className="text-sm font-semibold  text-[#393939] md:text-lg lg:text-xl  2xl:text-xl">
                      Dx to Img Study (days)
                    </th>
                    <th className="text-sm font-semibold  text-[#393939] md:text-lg lg:text-xl  2xl:text-xl">
                      Dx to Imgaging Time (hrs)
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full  ">
                  <tr className="grid grid-cols-3 text-center w-full ">
                    <tr className="grid grid-cols-1">
                      <td className="text-sm font-medium text-blue-600 mb-2 md:text-xs lg:text-lg   2xl:mb-2  ">
                        Exam-{examNum}
                      </td>
                      {/* <td className="text-sm font-medium text-gray-500 md:text-sm lg:text-lg  2xl:text-5xl  ">{exam._id}</td>    */}
                    </tr>
                    <td className=" text-sm font-medium text-gray-500 md:text-xs lg:text-lg     ">
                      {currentExam.exam.daysImageDiagnosos}
                    </td>
                    <td className=" text-sm font-medium text-gray-500 md:text-xs lg:text-lg     ">
                      {currentExam.exam.hrsImageDiagnosis}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="flex flex-col items-center h-auto mb-4 md:mb-6 lg:mb-4">
                <thead className="w-full  ">
                  <tr className="grid grid-cols-4 w-full ">
                    <th className="font-medium text-[#393939] text-sm order-1 col-span-2 md:text-lg lg:text-xl">
                      Study Modality
                    </th>
                    <th className="font-medium text-[#393939] text-sm order-2 col-span-2 md:text-lg lg:text-xl">
                      Image Study Description
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full ">
                  <tr className="grid grid-cols-4 w-full ">
                    <td className="text-xs font-medium text-gray-500 order-1 col-span-2 md:text-xs lg:text-lg  ">
                      {currentExam.exam.modality}
                    </td>
                    <td className=" text-xs font-medium text-gray-500 order-2  col-span-2 md:text-xs lg:text-lg  ">
                      {currentExam.exam.imageDescription}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="flex flex-col items-center">
                <thead className="w-full 2xl:mb-2  ">
                  <tr className="grid grid-cols-4  w-full ">
                    <th className="font-medium text-[#393939] text-sm order-3 col-span-4 md:text-lg lg:text-xl ">
                      Radiologist Key Findings
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full mb-1 lg:px-6 lg:mb-1.5 xl:mb-2 ">
                  <tr className="grid grid-cols-4 w-full ">
                    <td className=" text-xs font-medium text-gray-500 order-3 col-span-4  md:text-base  lg:text-lg   ">
                      {currentExam.exam.findings}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <EditPopUp
            currentExam={currentExam.exam}
            patientId={currentExam.exam.patientId}
            open={editPopUpModal}
            isOpen={setEditPopUpModal}
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
