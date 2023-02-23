import React from 'react';
// import { Navbar } from "../Navbar/Navbar";
// import { useApi } from "../../hooks/use-api";
import { useState, useEffect } from "react";
// import {Search} from "../Search/Search";
import { Navbar } from '../Navbar/Navbar';
// import {Search} from "../Search/Search";
import { TestSearch } from '../Search/TestSearch';
import { Footer } from '../Footer/Footer';
// let data = require("../../data/exam-data.json");

// API endpoint for fetching ALL exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

// API endpoint for fetching SINGLE PT exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16424082

export const Admin = () => {
  // const data = useApi('exams');
  // console.log('useApi: ', useApi('exams'));

  const [data, setData] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
      .then((res) => res.json())
      .then((res) => setData(res.exams))
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(data)

   // store API data in local storage
   useEffect(() => {
    // console.log(data);
    localStorage.setItem('localData', JSON.stringify(data));
    setLocalData(data);
    // fetch(JSON.parse(localStorage.getItem('localData')))
    //     .then(res => setLocalData(res));
  }, [data]);

  // get the local data to display on the page by setting the state of the localData variable to whatever is in local storage
  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('localData')))
  }, [])

  const handleDelete = (id) => {
    const examArr = JSON.parse(localStorage.getItem('data'));
    console.log(id);  
    const updatedExamArr = examArr.filter((exam) => exam.id !== id);
    localStorage.setItem('localData', JSON.stringify(updatedExamArr));
    setLocalData(updatedExamArr);
    console.log(localData);
    return data;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const pageData = data.slice(startIndex, endIndex);
  const pageData = localData.slice(startIndex, endIndex);

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

  return (
    <>
     <Navbar />
          <TestSearch/>
      <div className="flex justify-center p-6 bg-gray-200 border-black rounded-xl min-w-fit max-w-7xl">
        <table className="table-auto w-90% text-left ">
          <thead>
          <tr className="bg-gray-800 text-white text-base ">
              <th className="px-2 py-4">Patient ID</th>
              <th className="px-2 py-4">Exam ID</th>
              <th className="px-2 py-4">Images</th>
              <th className="px-2 py-4">Key Findings</th>
              <th className="px-2 py-4">Brixia Scores</th>
              <th className="px-2 py-4">Age</th>
              <th className="px-2 py-4">Sex</th>
              <th className="px-2 py-4">BMI</th>
              <th className="px-2 py-4">Zip Code</th>
              <th className="px-2 py-4" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(function (item) {
              return (
                <tr key={item._id} className="bg-gray-200 text-sm">
                  <td className="border px-2 py-2">{item.patientId}</td>
                  <td className="border px-2 py-2">{item.examId}</td>
                  <td className="border px-2 py-2"><img src={item.imageURL} alt="images" className="w-28"/></td>
                  <td className="border px-2 py-2">{item.keyFindings}</td>
                  <td className="border px-2 py-2">{item.brixiaScores}</td>
                  <td className="border px-2 py-2">{item.age}</td>
                  <td className="border px-2 py-2">{item.sex}</td>
                  <td className="border px-2 py-2">{item.bmi}</td>
                  <td className="border px-2 py-2">{item.zipCode}</td>
                    <td className="border px-4 py-2">
                      <button>Update</button>
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={(id) => handleDelete(item._id)}>Delete</button>
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

        <div className="form flex items-center justify-center w-screen h-auto ">
            <div className=" m-auto p-6 h-screen">
                <div className="flex justify-center w-full p-6 bg-gray-200 border-black rounded-xl min-w-fit mt-4 ">
                    <table className=" table-auto max-w-7xl min-w-fit text-left ">
                        <thead className="">
                        <tr className="bg-gray-800 text-white text-xs md:text-sm lg:text-base w-max">
                            <th className="px-2 py-2 w-32">Patient ID</th>
                            <th className="px-2 py-2 w-28">Exam ID</th>
                            <th className="px-2 py-2 w-28">Images</th>
                            <th className="px-2 py-2 w-96">Key Findings</th>
                            <th className="px-2 py-2 w-24">Brixia Scores</th>
                            <th className="px-2 py-2 w-24">Age</th>
                            <th className="px-2 py-2 w-24">Sex</th>
                            <th className="px-2 py-2 w-24">BMI</th>
                            <th className="px-2 py-2 w-24">Zip Code</th>
                            <th className="px-2 py-2 ">Take Action</th>
                            <th className="px-2 py-2 w-24"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {pageData.map(function (item) {
                            return (
                                <tr key={item} className="bg-gray-200 text-sm border-b-2 border-black items-center">
                                    <td className=" px-2 py-4">{item.patientId}</td>
                                    <td className=" px-2 py-4">{item.examId}</td>
                                    <td className=" px-2 py-4"><img src={item.imageURL} alt="images"/></td>
                                    <td className=" px-2 py-4">{item.keyFindings}</td>
                                    <td className=" px-2 py-4">{item.brixiaScores}</td>
                                    <td className=" px-2 py-4">{item.age}</td>
                                    <td className=" px-2 py-4">{item.sex}</td>
                                    <td className=" px-2 py-4">{item.bmi}</td>
                                    <td className=" px-2 py-4">{item.zipCode}</td>
                                    <td className="  ">
                                        <button
                                            className=" bg-gray-500 px-2 py-2 rounded-md text-white">
                                            Update
                                        </button>
                                    </td>
                                    <td className="">
                                        <button className=" bg-red-500 px-2 py-2 rounded-md text-white">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

                <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
                    <div className="border-2 flex w-3/4 justify-center">
                        <button disabled={currentPage === 1} onClick={handlePrevious} className="page-btn">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        {pageNumbers.map((number) => (
                            <button key={number} onClick={() => setCurrentPage(number)} className="page-btn">
                                {number}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === pageNumbers.length}
                            onClick={handleNext} className="page-btn">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>

    </>
  );
};
