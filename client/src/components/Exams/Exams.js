import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DataPopUp from "../PopUp/DataPopUp";
import { ExamDataPopUp } from "../PopUp/ExamDataPopUp";

import { Navbar } from "../Navbar/Navbar";

export const Exams = () => {
  // const data = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/everything")
      .then((res) => res.json())
      .then((res) => setData(res))
      // .then(res => console.log(res))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  // // pagination state and handlers
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const pageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const handlePrevious = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNext = () => {
  //   setCurrentPage(currentPage + 1);
  // };

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  // manage patient/exam pop up modals
  const [showDataPopUp, setShowDataPopUp] = useState(false);
  // const [showImagePopUp, setShowImagePopUp] = useState(false)
  const [showExamDataPopUp, setShowExamDataPopUp] = useState(false);
  const handleDataClose = () => setShowDataPopUp(false);
  // const handleImageClose = () => setShowImagePopUp(false);
  const handleExamDataClose = () => setShowExamDataPopUp(false);

  return (
    <>
      <Navbar />
      {/* map through each object returned from the api to display the appropriate information */}
      {pageData.map(function (item) {
        return (
          <>
            <section
              key={item._id}
              className="md:flex relative w-full hidden px-4 white-font"
            >
              <div className="flex w-full justify-center p-4 md:max-w-7xl mx-auto h-auto border rounded-lg shadow-lg space-x-2">
                <div className=" w-36">
                  <h1 className="font-bold text-base mb-1">Patient ID</h1>
                  <div>
                    <Link onClick={() => setShowDataPopUp(true)}>
                      <p className="text-sm text-blue-600 hover:font-bold hover:underline ">
                        {item._id}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className=" w-28">
                  <h1 className="font-bold text-base mb-1">Exams</h1>
                  {item.exams.sort().map(function (exam, index) {
                    return (
                      <>
                        <Link onClick={() => setShowExamDataPopUp(true)}>
                          <p className="text-sm text-blue-600 hover:font-bold hover:underline ">
                            Exam {index + 1}
                          </p>
                        </Link>
                        <ExamDataPopUp
                          key={exam._id}
                          exam={exam}
                          examNum={index + 1}
                          onClose={handleExamDataClose}
                          visible={showExamDataPopUp}
                        />
                      </>
                    );
                  })}
                </div>
                <div className=" w-28 ">
                  <h1 className="font-bold text-base mb-1">Age</h1>
                  <p className="text-sm">{item.age}</p>
                </div>
                <div className=" w-28 ">
                  <h1 className="font-bold text-base mb-1">Sex</h1>
                  <p className="text-sm">{item.sex}</p>
                </div>
                <div className=" w-28 ">
                  <h1 className="font-bold text-base mb-1">BMI</h1>
                  <p className="text-sm">{item.bmi}</p>
                </div>
                <div className=" w-28 ">
                  <h1 className="font-bold text-base mb-1">Zip Code</h1>
                  <p className="text-sm">{item.zip}</p>
                </div>
              </div>
              <DataPopUp
                key={item._id}
                item={item}
                onClose={handleDataClose}
                visible={showDataPopUp}
                setShowExamDataPopUp={setShowExamDataPopUp}
                handleExamDataClose={handleExamDataClose}
                showExamDataPopUp={showExamDataPopUp}
              />
            </section>
          </>
        );
      })}
      ;
      {/* <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
        <div className="border-2 flex w-3/4 justify-center font-semibold space-x-3 text-lg">
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
                  onClick={handleNext} 
                  className="page-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
        </div>
      </div> */}
    </>
  );
};
