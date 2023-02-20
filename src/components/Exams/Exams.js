import {React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mobile } from "../Mobile/Mobile";

// API endpoint for fetching ALL exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

// API endpoint for fetching SINGLE PT exam data:
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16424082

export const Exams = () => {
  // const data = useApi('exams');
  // console.log('useApi: ', useApi('exams'));

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);


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
      {pageData.map(function (item) {
        return (
          <section className="md:flex relative w-full hidden px-4">
            <div className="flex w-full justify-center p-4 md:max-w-7xl mx-auto h-auto border rounded-lg shadow-lg space-x-2">
              <div className=" w-36">
                <h1 className="font-bold text-base mb-1">Patient ID</h1>
                <div>
                  <Link><p className="text-sm text-blue-600 hover:font-bold hover:underline ">{item.patientId}</p></Link>
                </div>
              </div>
              <div className=" w-28">
                <h1 className="font-bold text-base mb-1">Exam ID</h1>
                <Link><p className="text-sm text-blue-600 hover:font-bold hover:underline  ">{item.examId}</p></Link>
              </div>
              <div className=" w-36">
              <h1 className="font-bold text-base mb-1">Images</h1>
                <Link><img className="w-32" src={item.imageURL} alt="images"/></Link>
              </div>
              <div className=" w-80 px-2">
                <h1 className="font-bold text-base mb-1">Key Findings</h1>
                <p className="flex flex-wrap text-sm ">{item.keyFindings}</p>
              </div>
              <div className=" w-36">
                <h1 className="font-bold text-base mb-1">Brixi Score</h1>
                <p className="text-sm">{item.brixiaScores}</p>
              </div>
              <div className=" w-28 ">
                <h1 className="font-bold text-base mb-1">Age</h1>
                <p1 className="text-sm">{item.age}</p1>
              </div>
              <div className=" w-28 ">
                <h1 className="font-bold text-base mb-1">Sex</h1>
                <p className="text-sm">{item.sex}</p>
              </div>
              <div className=" w-28 ">
                <h1 className="font-bold text-base mb-1">BMI</h1>
                <p className="text-sm">{ item.bmi}</p>
              </div>
              <div className=" w-28 ">
                <h1 className="font-bold text-base mb-1">Zip Code</h1>
                <p className="text-sm">{ item.zipCode}</p>
              </div>
            </div>
          </section>
        );
      })}
      {/* <div className="relative  hidden md:block border-2 border-black ">
        <div className="flex justify-center items center">
          <div className=" grid  border-2 border-black p-2 rounded-lg w-10/12">
            <ul className="grid grid-cols-9 p-2">
              <li>Patient ID</li>
              <li>Exam ID</li>
              <li>Images</li>
              <li className="">Key Findings</li>
              <li>Brixia Score</li>
              <li>Age</li>
              <li>Sex</li>
              <li>BMI</li>
              <li>Zip Code</li>
            </ul>
            <div className="border-2 border-red-600 p-2 h-auto">
              {pageData.map(function (item) {
                return (
                  <div className="grid grid-cols-9">
                    <p className=" text-sm py-2 border-2 border-green-400">{item.patientId}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.examId}</p>
                    <p className=" text-sm py-2 border-2 border-green-400"><img src={item.imageURL} alt="images"/></p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.keyFindings}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.brixiaScores}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.age}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.sex}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.bmi}</p>
                    <p className=" text-sm py-2 border-2 border-green-400">{item.zipCode}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>   */}
      <Mobile/> 
    </>  
  );
};
