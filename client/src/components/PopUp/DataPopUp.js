import React from 'react'
import { useState, useEffect } from 'react';
import {GrClose} from "react-icons/gr"


export default function DataPopUp ({visible, onClose}) {
    
  // const data = useApi('exams');
  // console.log('useApi: ', useApi('exams'));

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
      .then((res) => res.json())
      .then((res) => setData(res.exams))
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(data)

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  const pageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (!visible) return null;

    return (
        <>
            {pageData.map(function (item) {
                return (
                    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-2">
                        <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-auto'>
                            <div className='flex justify-end'>
                                <button className='border rounded-full p-2 shadow-md' onClick={onClose}><GrClose className='text-gray-600 font-bold'/></button>
                            </div>
                            <div className=' h-auto space-y-2'>
                                <div className='flex items-center px-4 '>
                                    <h1 className="text-base font-bold   w-24">Patient ID</h1>
                                    <p className="text-base font-medium text-blue-600 hover:font-bold hover:underline ">{item.patientId}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Exam ID</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.examId}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Brixi Score</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.brixiaScores}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Age</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.age}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Sex</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.sex}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">BMI</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.bmi}</p>
                                </div>
                                <div className='flex items-center px-4'>
                                    <h1 className="text-base font-bold  w-24">Zip Code</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.zipCode}</p>
                                </div>
                                <div className='flex items-center px-4 pb-6'>
                                    <h1 className="text-base font-bold  w-24">Key Findings</h1>
                                    <p className="text-base font-semibold text-blue-600 hover:font-bold hover:underline  ">{item.keyFindings}</p>
                                </div>
                            </div>                             
                        </div>
        
                    </div>
                )     
            })}; 
        </>
        
    )     
            
}
