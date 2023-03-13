import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {GrClose, GrEdit} from "react-icons/gr"
import { Update } from "../Update/Update";


export const ExamDataPopUp = ({exam, visible, onClose, examNum}) => {

  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  const handleUpdateClose = () => setShowUpdatePopUp(false);


  const handleDeleteExam = (e, id) => {
    console.log(id)
    fetch(`http://localhost:9000/api/exams/${id}`, {
        method: 'DELETE', 
        body:  id,
    })
    .then(res => { if(res.status === 200) {onClose()}})
    .catch(err => console.error(err))
  }

  if (!visible) return null;

    return (
        <>
            <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
                <div className="bg-white rounded-xl shadow-lg p-4 overflow-y-auto w-11/12 lg:w-full h-1/2">
                    <div className="flex items-center justify-between xl:p-2 2xl:p-6">
                        <button
                            onClick={() => {setShowUpdatePopUp(true)}}
                            className=" transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-base md:p-1.5 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6" onClick={() => (null)} >
                            <GrEdit className="" />
                                    {/* <EditExam patientId={selectedPatientId} onClose={() => setSelectedPatientId(null)} /> */}
                        </button>
                        <button className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-base md:p-1.5 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6" onClick={onClose}>
                            <GrClose className=""  />
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-full 2xl:h-1/5">
                        <table className="flex flex-col justify-center items-center px-10  my-4 xl:gap-y-2 2xl:mb-10 2xl:gap-y-4 2xl:h-1/5">
                            <thead>
                                <tr className="flex flex-col items-center 2xl:mb-4 2xl:gap-4">
                                    <th className="text-lg font-semibold  text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                        Patient ID
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                <tr className="w-full">
                                    <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                        {exam.patientId}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex h-full border-2">
                        <div className="" style={{ display: 'none'}}>
                            <h1 className="">Exam ID</h1>
                            <p className="">{exam._id}</p>
                        </div>
                        <div className="">
                            <h1 className="">Exam ID</h1>
                            <p className="  ">{examNum}</p>
                        </div>
                        <div className="">
                            <h1 className="">Dx to Img Study (days)</h1>
                            <p className="  ">{exam.daysImageDiagnosos}</p>
                        </div>
                        <div className="">
                            <h1 className="">Dx to Imgaging Time (hrs)</h1>
                            <p className="  ">{exam.hrsImageDiagnosis}</p>
                        </div>
                        <div className="">
                            <h1 className="">Study Modality</h1>
                            <p className="  ">{exam.modality}</p>
                        </div>
                        <div className="">
                            <h1 className="">Image Study Description</h1>
                            <p className="  ">{exam.imageDescription}</p>
                        </div>
                        <div className="">
                            <h1 className="">Radiologist Key Findings</h1>
                            <p className=" ">{exam.findings}</p>
                        </div>
                    </div>  
                    <Link onClick={() => {setShowUpdatePopUp(true)}}>
                        <p className="text-sm text-blue-600 hover:font-bold hover:underline ">Update</p>
                    </Link>           
                    <button onClick={(e, id) => handleDeleteExam(e, exam._id)}>Delete</button>                 
                </div>
                <Update key={exam._id} exam={exam} onClose={handleUpdateClose} visible={showUpdatePopUp} isVisible={setShowUpdatePopUp}/>
            </div>
        </>
        
    )     
            
}

