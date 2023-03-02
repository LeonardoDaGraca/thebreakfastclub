import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr"
import { ExamsDataPopUp } from './ExamsDataPopUp';

export const ExamsPopUp = ({ visible, onClose }) => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
        .then((res) => res.json())
        .then((res) => setData(res.exams))
        .catch((error) => console.error("Error:", error));
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  const groupedData = data.reduce((acc, exam) => {
    if (!acc[exam.patientId]) {
      acc[exam.patientId] = { patientId: exam.patientId, exams: [] };
    }
    acc[exam.patientId].exams.push(exam);
    return acc;
  }, {});

  // PopUp Window section
  const [showMyData, setShowMyData] = useState(false)
  const closeDataPopUp = () => setShowMyData(false);


  if (!visible) return null;

  return (
      <>
        {pageData.map(function (item) {
          return (
              <div className="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-sm p-2">
                <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-auto'>
                  <div className='flex justify-end'>
                    <button className='border rounded-full p-2 shadow-md' onClick={onClose}>
                      <GrClose className='text-gray-600 font-bold' />
                    </button>
                  </div>
                  <div className='flex flex-col   h-72 space-y-2'>
                    <div className='flex flex-col items-center p-4 '>
                      <th className="text-xl font-bold mb-2">Patient ID</th>
                      <td className="text-lg font-medium text-blue-600 ">{item.patientId}</td>
                    </div>
                    <div className='flex flex-col items-center p-4'>
                      <th className="text-base font-bold mb-2">Exam ID</th>
                      <td className="text-lg font-medium text-blue-600"><Link onClick={() => setShowMyData(true)} >{item.examId}</Link></td>
                    </div>
                  </div>
                </div>
                <ExamsDataPopUp onClose={closeDataPopUp } visible={showMyData} />
              </div>
          )
        })}
      </>
  )
}
