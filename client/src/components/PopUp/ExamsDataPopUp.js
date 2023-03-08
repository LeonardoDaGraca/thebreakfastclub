import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr"
import {AiOutlineEdit} from "react-icons/ai"

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
                        <div className='bg-white p-3 rounded-lg w-full space-y-2 shadow-xl h-3/4'>
                            <div className='flex justify-between p-2 '>
                                <button className=' border-none p-2 shadow-md' onClick={onClose}>
                                    <AiOutlineEdit className='text-gray-600 text-xs md:text-lg font-bold' />
                                </button>
                                <button className='border rounded-full p-2 shadow-md' onClick={onClose}>
                                    <GrClose className='text-gray-600 text-xs md:text-lg font-bold' />
                                </button>
                            </div>
                            <div className='flex flex-col justify-around h-auto gap-2 md:h-5/6 md:gap-6 md:p-3'>
                                <div className='flex flex-wrap justify-between h-auto w-full gap-3 p-1 md:items-center '>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Patient ID</th>
                                        <td className="text-sm md:text-lg font-medium  ">{item.patientId}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Exam ID</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.examId}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Brixia Score</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.brixiaScores}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Age</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.age}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Sexe</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.sex}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">BMI</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.bmi}</td>
                                    </table>
                                    <table className="flex flex-col items-start">
                                        <th className="font-bold mb-2 text-sm md:text-xl ">Zip Code</th>
                                        <td className="text-sm md:text-lg font-medium ">{item.zipCode}</td>
                                    </table>
                                </div>
                                <div className='flex flex-col h-auto w-full p-1 md:flex md:justify-evenly md:space-y-6'>
                                    <table className="flex flex-col items-start " >
                                        <th className="text-sm md:text-xl font-bold mb-2">Key Findings</th>
                                        <td className="text-sm  md:text-lg font-medium"><textarea name="" className="h-auto border-2 border-gray-200 rounded-md " >{item.keyFindings}</textarea></td>
                                    </table>
                                    <table className="flex flex-col items-start  h-auto" >
                                        <th className="text-sm md:text-xl font-bold mb-2">Images</th>
                                        <td className=""><Link><img src={item.imageURL} alt="images" className="w-32 md:w-64 hover:shadow-xl rounded-lg" /> </Link></td>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}