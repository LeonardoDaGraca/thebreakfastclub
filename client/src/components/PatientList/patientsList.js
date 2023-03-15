import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const PatientList = ({ data }) => {
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Function to group data by patient ID ends

  // Function to handle button click and set selected patient ID starts
  const handleButtonClick = (patientId) => {
    setSelectedPatientId(patientId);
  };

  // Function to clear selected patient ID starts
  const handleCloseModal = () => {
    setSelectedPatientId(null);
  };

  // Function to group data by patient ID starts
  const groupByPatientId = (data) => {
    return data.reduce((acc, cur) => {
      acc[cur._id] = acc[cur._id] || [];
      acc[cur._id].push(cur);
      return acc;
    }, {});
  };
  const groupedData = groupByPatientId(data);

  return (
    <>
      <div className="mt-2 grid grid-cols-1 gap-4  p-3 sm:grid-cols-1 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:w-full lg:px-6 lg:gap-6 xl:grid-cols-4 2xl:px-20 2xl:gap-8">
        {data.map((item) => (
          <button
            key={item._id}
            className=" flex items-center justify-center border-2 border-zinc-200 bg-zinc-100 rounded-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition hover:-translate-y-1 hover:scale-105 h-24  md:h-28 lg:h-36 2xl:h-60"
            onClick={() => handleButtonClick(item._id)}
          >
            <div className="flex flex-col items-center">
              <tr className="mb-2 lg:mb-1 xl:mb-2 2xl:mb-6">
                <thead className="">
                  <th className="text-base font-bold text-gray-900 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                    Patient ID
                  </th>
                </thead>
              </tr>
              <tr>
                <tbody>
                  <td className="text-sm font-medium text-gray-90 md:text-sm lg:text-base xl:text-lg 2xl:text-4xl">
                    {item._id}
                  </td>
                </tbody>
              </tr>
            </div>
          </button>
        ))}
      </div>
      {/* Modal window */}
      {selectedPatientId && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm flex justify-center items-center lg:px-16 xl:px-16 2xl:px-20">
          <div className=" bg-white rounded-xl shadow-md p-4 w-full h-1/2 overflow-y-auto">
            <div className="flex items-center justify-between  md:px-4 md:pt-4">
              <button className=" " onClick={() => setSelectedPatientId(null)}>
                <AiOutlineEdit className="text-gray-500 font-medium hover:text-gray-800 focus:outline-none text-base md:text-2xl xl:text-2xl 2xl:text-5xl" />
                {/* <EditExam patientId={selectedPatientId} onClose={() => setSelectedPatientId(null)} /> */}
              </button>
              <button className="" onClick={() => setSelectedPatientId(null)}>
                <AiOutlineClose className="text-gray-500 font-medium hover:text-gray-800 focus:outline-none text-base md:text-2xl xl:text-2xl 2xl:text-5xl" />
              </button>
            </div>

            <div className="flex justify-center items-center  px-10  2xl:h-1/5">
              <table className="flex flex-col justify-center items-center px-10  my-4 xl:gap-y-2 2xl:mb-10 2xl:gap-y-4 2xl:h-1/5">
                <tr className="flex flex-col items-center 2xl:mb-4 2xl:gap-4">
                  <thead>
                    <th className="text-lg font-semibold  text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                      Patient ID
                    </th>
                  </thead>
                </tr>
                <tbody className="">
                  <tr className="">
                    <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                      {selectedPatientId}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center items-center 2xl:mt-4 2xl:h-1/2">
              {groupedData[selectedPatientId].map((exams) => (
                <div key={exams._id} className=" border-gray-200 h-full w-full">
                  <div className="w-full  mb-6 2xl:mb-16">
                    <table className="flex flex-col items-center xl:gap-y-2 2xl:gap-y-4 2xl:mb-6">
                      <thead className="w-full">
                        <tr className="grid grid-cols-6 text-center w-full mb-2">
                          <th className="text-sm  font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Exam ID
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Brixia Score
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Zip Code
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Sex
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Age
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            BMI
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        <tr className=" grid grid-cols-6 text-center w-full whitespace-normal break-words">
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.examId}
                          </td>
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.brixiaScores}
                          </td>
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.zip}
                          </td>
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.sex}
                          </td>
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.age}
                          </td>
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl">
                            {exams.bmi}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="w-full h-3/4 ">
                    <table className="flex flex-col  items-center xl:gap-y-2 2xl:gap-y-6">
                      <thead className="w-full">
                        <tr className="grid grid-cols-2 text-center w-full mb-2">
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Key Findings
                          </th>
                          <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                            Images
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full h-auto">
                        <tr className=" grid grid-cols-2 text-center w-full ">
                          <td className="text-sm font-medium text-gray-500 whitespace-normal break-words md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl lg:mx-1.5 xl:mx-10 2xl:mx-10">
                            {exams.exams.findings}
                          </td>
                          <td className="mx-auto">
                            <Link className="flex justify-center border-2">
                              <img
                                src={exams.image}
                                alt="images"
                                className="rounded-lg shadow-xl hover:shadow-2xl w-32 md:w-36 lg:w-40 xl:w-52 2xl:w-96 "
                              />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default PatientList;
