import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {GrClose} from "react-icons/gr"
import { Update } from "../Update/Update";


export const ExamDataPopUp = ({exam, visible, onClose, examNum}) => {


  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  const handleUpdateClose = () => setShowUpdatePopUp(false);

  const handleDeleteExam = (e, id) => {
    fetch(`http://localhost:9000/api/exams/${id}`, {
        method: 'DELETE', 
        body:  id,
    })
    .catch(err => console.error(err))
  }

  if (!visible) return null;

    return (
        <>
                    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-2 black-font">
                        <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-auto'>
                            <div className='flex justify-end'>
                                <button className='border rounded-full p-2 shadow-md' onClick={onClose}><GrClose className='text-gray-600 font-bold'/></button>
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

