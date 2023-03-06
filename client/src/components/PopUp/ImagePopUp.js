import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {GrClose} from "react-icons/gr"


export default function ImagePopUp ({visible, onClose}) {

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
              <div className="flex justify-center p-2 items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm ">
                <div className='bg-white px-2 py-4 rounded-lg w-full  shadow-xl h-auto'>
                  <div className='flex justify-end'>
                    <button className='border rounded-full p-2 shadow-md' onClick={onClose}><GrClose className='text-gray-600 font-bold'/></button>
                  </div>
                  <div className=' h-auto '>
                    <div className='flex flex-col h-full '>
                      <h1 className="text-base font-bold mb-2">Images</h1>
                      <img className="rounded" src={item.imageURL} alt="images"/>
                    </div>
                  </div>
                </div>
              </div>
          )
        })};
      </>

  )

}
