import { useState, useEffect } from "react";
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
      <div className="relative p-5 justify-center overflow-auto shadow-xl hidden md:block">
        <table className=" w-full">
          <thead className="bg-gray-200 border-b-2 border-gray-400">
          <tr className="text-gray-800">
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Patient ID</th>
            <th className="w-32 p-3  text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Exam ID</th>
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Images</th>
            <th className="w-80 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Key Findings</th>
            <th className="w-44 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Brixia Scores</th>
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Age</th>
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Sex</th>
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">BMI</th>
            <th className="w-32 p-3 text-sm md:text-base lg:text-lg text-left font-semibold tracking-wide">Zip Code</th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
          {pageData.map(function (item) {
            return (
                <tr key={item} className="even:bg-gray-200 odd:bg-slate-50 ">
                <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap ">
                  <Link className="font-bold hover:text-blue-600 hover:underline">
                    {item.patientId}
                  </Link>
                </td>
                <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">
                  <Link className="font-bold hover:text-blue-600 hover:underline">
                  {item.examId}
                  </Link>
                </td>
                <td className="p-3">
                  <Link>
                    <img src={item.imageURL} alt="images" />
                  </Link>
                </td>
                  <td className="p-3 break-normal text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.keyFindings}</td>
                  <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.brixiaScores}</td>
                  <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.age}</td>
                  <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.sex}</td>
                  <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.bmi}</td>
                  <td className="p-3 text-xs md:text-sm text-gray-800 whitespace-nowrap">{item.zipCode}</td>
                </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      <Mobile/> 
    </>  
  );
};
