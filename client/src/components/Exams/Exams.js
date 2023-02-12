import "./Exams.css";
// import { Navbar } from "../Navbar/Navbar";
// import { useApi } from "../../hooks/use-api";
import { useState, useEffect } from "react";
// import {Search} from "../Search/Search"

// let data = require("../../data/exam-data.json");

// API endpoint for fetching ALL exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

// API endpoint for fetching SINGLE PT exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16424082

export const Exams = () => {
  // const data = useApi('exams');
  // console.log('useApi: ', useApi('exams'));

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);


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

  return (
    <>
      <div className="container mx-auto p-6">
        {/* <Search/> */}
      <div className="flex justify-center p-6 bg-gray-200 border-black rounded-xl min-w-fit max-w-2xl">
        <table className="table-auto w-90% text-left ">
          <thead>
            <tr className="bg-gray-800 text-white text-xs md:text-sm ">
              <th className="px-1 py-2">Patient ID</th>
              <th className="px-1 py-2">Exam ID</th>
              <th className="px-1 py-2">Images</th>
              <th className="px-1 py-2">Key Findings</th>
              <th className="px-1 py-2">Brixia Scores</th>
              <th className="px-1 py-2">Age</th>
              <th className="px-1 py-2">Sex</th>
              <th className="px-1 py-2">BMI</th>
              <th className="px-1 py-2">Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map(function (item) {
              return (
                <tr key={item} className="bg-gray-200 text-sm border-b-2 border-black">
                  <td className="border px-2 py-4">{item.patientId}</td>
                  <td className="border px-2 py-4">{item.examId}</td>
                  <td className="border px-2 py-4"><img src={item.imageURL} alt="images" className="w-28"/></td>
                  <td className="border px-2 py-4">{item.keyFindings}</td>
                  <td className="border px-2 py-4">{item.brixiaScores}</td>
                  <td className="border px-2 py-4">{item.age}</td>
                  <td className="border px-2 py-4">{item.sex}</td>
                  <td className="border px-2 py-4">{item.bmi}</td>
                  <td className="border px-2 py-4">{item.zipCode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
 
      <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
        <div className="border-2 flex w-3/4 justify-center font-semibold space-x-3 text-lg">
          <button disabled={currentPage === 1} onClick={handlePrevious} className="page-btn">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => setCurrentPage(number)} className="page-btn">
                {number}
            </button>
          ))}
            <button
              disabled={currentPage === pageNumbers.length}
              onClick={handleNext} className="page-btn">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>
      </div>
      
    </>  
  );
};
