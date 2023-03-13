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
                    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-2 black-font">
                        <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-auto'>
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
                            <div className=' h-auto space-y-2'>
                                <div className='flex items-center px-4 ' style={{ display: 'none'}}>
                                    <h1 className="text-base font-bold   w-24">Exam ID</h1>
                                    <p className="text-base font-medium text-blue-600 hover:font-bold hover:underline ">{exam._id}</p>
                                </div>
                                <div className='flex items-center px-4 '>
                                    <h1 className="text-base font-bold   w-24">Patient ID</h1>
                                    <p className="text-base font-medium text-blue-600 hover:font-bold hover:underline ">{exam.patientId}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Exam ID</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{examNum}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Dx to Img Study (days)</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{exam.daysImageDiagnosos}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Dx to Imgaging Time (hrs)</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{exam.hrsImageDiagnosis}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Study Modality</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{exam.modality}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Image Study Description</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{exam.imageDescription}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Radiologist Key Findings</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{exam.findings}</p>
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

