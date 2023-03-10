// import "./Exams.css";
// import { Navbar } from "../Navbar/Navbar";
// import { useApi } from "../../hooks/use-api";
import { useState, useEffect } from "react";




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
  const [itemsPerPage, setItemsPerPage] = useState(8);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("http://localhost:9000/api/everything")
      .then((res) => res.json())
      .then((res) => setData(res.exams))
      .catch((error) => console.error("Error:", error));
  }, []);


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
       


        {/* pagination */}
      <div className="page-select">
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
    </>
  );
};