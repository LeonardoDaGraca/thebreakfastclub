import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr"
import { AiOutlineEdit } from "react-icons/ai"


export const ExamsDataPopUp = ({ visible, onClose }) => {
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

    if (!visible) return null;

    return (
        <>
            {pageData.map(function (item) {
                return (
                    <div className="flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-sm p-2">
                        <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-3/4 '>
                            <div className='flex justify-between p-2 '>
                                <button className=' border-none p-2 shadow-md' onClick={onClose}>
                                    <AiOutlineEdit className='text-gray-600 text-xs md:text-lg font-bold' />
                                </button>
                                <button className='border rounded-full p-2 shadow-md' onClick={onClose}>
                                    <GrClose className='text-gray-600 text-xs md:text-lg font-bold' />
                                </button>
                            </div>
                            <div className="h-5/6 p-2 2xl:px-10">
                     
                                <div className="flex justify-center items-center h-20 md:h-24 lg:h-28 xl:h-36 2xl:h-64">
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">Patient ID</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.patientId}</td>
                                    </table>
                                </div>
                                <div className="flex flex-wrap justify-around  h-20 md:h-24 lg:h-28 xl:h-36 2xl:h-64">
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">Exam ID</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.examId}</td>
                                        
                                    </table>
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl ">Brixia Score</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.brixiaScores}</td>
                                    </table>
                                    <table className="flex flex-col items-center">
                                
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">Zip Code</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.zipCode}</td>
                                    </table>
                            
                                </div>
                                <div className="flex flex-wrap justify-around h-20 md:h-24 lg:h-28 xl:h-36 2xl:h-64">
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">Sex</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.sex}</td>
                                    </table>
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">BMI</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.bmi}</td>
                                    </table>
                                    <table className="flex flex-col items-center">
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl">Age</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.age}</td>
                                    </table>
                                </div>
                                <div className='flex justify-between  w-full md:flex md:justify-evenly  lg:h-28 xl:h-36 2xl:h-96 '>
                                    <table className="flex flex-col" >
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl ">Key Findings</th>
                                        <td className="font-medium text-sm md:text-lg xl:text-xl 2xl:text-4xl">{item.keyFindings}</td>
                                    </table>
                                    <table className="flex flex-col" >
                                        <th className="font-bold mb-2 text-sm md:text-xl xl:text-2xl 2xl:text-5xl ">Images</th>
                                        <td className=""><Link><img src={item.imageURL} alt="images" className="w-32 md:w-64 2xl:w-96 hover:shadow-xl rounded-lg" /> </Link></td>
                                    </table>
                                </div>
                        
                            </div>
                        
                        </div>
                    </div>
                )
            })}
        </>
    );
};