import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Mobile = () => {

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
            <div className="relative flex justify-center items-center w-full h-80 md:hidden p-6 ">
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full p-4 border-2 shadow-lg rounded-2xl gap-2 justify-center">
                    <div className="shadow-md col-span-3 flex w-full h-auto rounded-xl  ">
                        <div className=" w-full  justify-between shadow-lg rounded-xl">
                            <div className="flex bg-gray-300 rounded-t-xl px-3 py-1 text-left ">
                                <h2 className=" text-sm whitespace-nowrap">Patient ID</h2>
                                <h2 className=" text-sm whitespace-nowrap">Exam ID</h2>
                                <h2 className=" text-sm whitespace-nowrap">Brixia score</h2>
                                <h2 className=" text-sm whitespace-nowrap">Age</h2>
                            </div>
                            <div className="flex px-3 py-1 text-left ">
                                <h2 className=" text-sm whitespace-nowrap">Covid-1</h2>
                                <h2 className=" text-sm whitespace-nowrap">Exam-1</h2>
                                <h2 className=" text-sm whitespace-nowrap">1, 2, 3, 4</h2>
                                <h2 className=" text-sm whitespace-nowrap">720</h2>
                            </div>
                            <div className="flex bg-gray-300 px-3 py-1 text-left ">
                                <h2 className=" text-sm whitespace-nowrap">Sex</h2>
                                <h2 className=" text-sm whitespace-nowrap">BMI</h2>
                                <h2 className=" text-sm whitespace-nowrap">Zip Code</h2>
                            </div>
                            <div className="flex  px-3 py-1 text-left  ">
                                <h2 className=" text-sm whitespace-nowrap">M</h2>
                                <h2 className=" text-sm whitespace-nowrap">62.5</h2>
                                <h2 className=" text-sm whitespace-nowrap">720</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap border-2 rounded-2xl shadow-md  p-2 overflow-hidden ">
                        
                            <h1 className="text-xs font-semibold  border-b-2 w-full pb-1">Key Findings</h1>
                            <p className="text-xs flex flex-wrap mt-1 font-thin">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, earum. Temporibus a dignissimos, recusandae minima voluptate ex sint nihil amet ipsum hic, repellat porro ad aliquam, soluta debitis iste facere.
                            </p>
                      
                    </div>
                    <div className="border-2 p-2 rounded-2xl shadow-md flex justify-center items-center">
                        <a href="#"><img src="" alt=""></img>Images</a>
                    </div>
                </div>
            </div>

        </>
        
    );     
}