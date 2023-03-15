import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import Pagination from "../Pagination/Pagination";
import { ExamDataPopUp } from "../PopUp/ExamDataPopUp";


export const CardData = ({data}) => {
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [showExamDataPopUp, setShowExamDataPopUp] = useState(false);
    const [currentExam, setCurrentExam] = useState({});
    const handleExamDataClose = () => setShowExamDataPopUp(false);

  // Function to group data by patient ID starts
  const groupByPatientId = (data) => {
    return data.reduce((acc, cur) => {
      acc[cur._id] = acc[cur._id] || [];
      acc[cur._id].push(cur);
      return acc;
    }, {});
  };
  const groupedData = groupByPatientId(data);
  // Function to group data by patient ID ends

  // Function to handle button click and set selected patient ID starts
  const handleButtonClick = (_id) => {
    setSelectedPatientId(_id);
  };

  // Function to clear selected patient ID starts
  const handleCloseModal = () => {
    setSelectedPatientId(null);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 px-2 py-4 gap-1.5 md:grid-cols-2 md:px-4 md:py-5 md:gap-3 lg:grid-cols-4 lg:px-6 lg:py-6 lg:gap-3 xl:px-8 xl:py-10 xl:gap-4 2xl:px-20 2xl:py-16 2xl:gap-8">
        {Object.entries(groupedData).map(([_id, exams]) => (
          <button
            key={_id}
            className=" flex items-center justify-center border-2 border-zinc-200 bg-zinc-100 rounded-lg shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition hover:-translate-y-1 hover:scale-105 h-24 md:h-24 lg:h-28 xl:h-36 2xl:h-60"
            onClick={() => handleButtonClick(_id)}
          >
            <table className="flex flex-col items-center">
              <thead className="">
                <tr className="mb-2 lg:mb-1 xl:mb-2 2xl:mb-6">
                  <th className="text-base font-bold text-gray-900 md:text-lg lg:text-lg xl:text-2xl 2xl:text-5xl">
                    Patient ID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm font-medium text-gray-90 md:text-sm lg:text-sm xl:text-lg 2xl:text-4xl">
                    {_id}
                  </td>
                </tr>
              </tbody>
            </table>
          </button>
        ))}
      </div>
      {/* Modal window */}
      {selectedPatientId && (
        <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
          <div className=" bg-white rounded-xl shadow-lg p-4 overflow-y-auto w-11/12 lg:w-full h-1/2">
            <div className="flex items-center justify-end xl:p-2 2xl:p-6">
              <button
                className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1.5 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
                onClick={() => setSelectedPatientId(null)}
              >
                <GrClose className="" />
              </button>
            </div>

            <div className="flex justify-center items-center w-full pt-6 mb-3 md:pt-2 md:mb-3 lg:mb-4 xl:mb-6 2xl:mb-10 2xl:h-auto ">
              <table className="flex flex-col w-full justify-center items-center mt-2 xl:gap-y-2  2xl:gap-y-4 ">
                <thead className="">
                  <tr className="flex flex-col items-center ">
                    <th className="text-lg font-semibold  text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                      Patient ID
                    </th>
                  </tr>
                </thead>
                <tbody className="flex flex-col justify-center items-center w-full ">
                  <tr className="">
                    <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                      {selectedPatientId}
                    </td>
                  </tr>
                  <hr className="border-b-2 2xl:border-b-4 border-gray-200 w-11/12 mt-2 2xl:mt-6" />
                </tbody>
              </table>
            </div>

                        <div className="flex justify-center items-center px-3 md:px-1 2xl:mt-4 2xl:h-1/2">
                            {groupedData[selectedPatientId].map((exams) => (
                                <div key={exams._id} className=" border-gray-200 h-full w-full ">
                                    <div className="w-full 2xl:mb-16">
                                        <table className="flex flex-col items-center ">
                                            <thead className="w-full mb-1 lg:mb-0.5 xl:mb-2 2xl:mb-6">
                                                <tr className="grid grid-cols-6 text-center w-full ">
                                                    <th className="text-sm  font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        Exams
                                                    </th>
                                                    <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        Age
                                                    </th>
                                                    <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        Sex
                                                    </th>
                                                    <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        Zip Code
                                                    </th>
                                                    <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        Weight
                                                    </th>
                                                    <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                        BMI
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="w-full">
                                                <tr className=" grid grid-cols-6 text-center w-full whitespace-normal break-words">
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.exams.sort().map(function (exam, index) {
                                                            return (
                                                                <>
                                                                    <Link onClick={() => {setShowExamDataPopUp(true);
                                                                        setCurrentExam({exam: exam, index});
                                                                        }}>
                                                                
                                                                        <p className="text-sm text-blue-600 hover:font-bold hover:underline font-medium  md:text-lg lg:text-xl xl:text-2xl 2xl:mb-5 2xl:text-5xl">Exam {index + 1}</p>

                                                                    </Link>
                                                                    <ExamDataPopUp
                                                                        key={currentExam._id}
                                                                        currentExam={currentExam}
                                                                        examNum={currentExam.index + 1}
                                                                        onClose={handleExamDataClose}
                                                                        visible={showExamDataPopUp}
                                                                    // closePatientCard={handleClosePatientCard}
                                                                    />
                                                                </>
                                                            )
                                                        })}
                                                       
                                                    </td>
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.age}
                                                    </td>
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.sex}
                                                    </td>
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.zip}
                                                    </td>
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.weight}
                                                    </td>
                                                    <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                        {exams.bmi}
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                            {/* <Link onClick={setShowCreateExam(true)}>
                                                <button className="text-sm text-blue-600 hover:font-bold hover:underline ">Create Exam</button>
                                            </Link>  
                                                

                                            <TestForm patientId={exams.patientId} visible={showCreateExam}/> */}
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* <div className="w-full h-3/4 ">
                                        <table className="flex flex-col  items-center xl:gap-y-2 2xl:gap-y-6">
                                            <thead className="w-full">
                                            <tr className="grid grid-cols-2 text-center w-full mb-2">
                                                <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                                                    Key Findings
                                                </th>
                                                <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                                                    ICU Admission
                                                </th>
                                                <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                                                    Number of ICU Admissions
                                                </th>
                                                <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-6xl">
                                                    Mortality
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="w-full h-auto">
                                            <tr className=" grid grid-cols-2 text-center w-full ">
                                                <td className="text-sm font-medium text-gray-500 whitespace-normal break-words md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl lg:mx-1.5 xl:mx-10 2xl:mx-10">
                                                    {exams.findings}
                                                </td>
                                                <td className="text-sm font-medium text-gray-500 whitespace-normal break-words md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl lg:mx-1.5 xl:mx-10 2xl:mx-10">
                                                    {exams.icuAdmit}
                                                </td>
                                                <td className="text-sm font-medium text-gray-500 whitespace-normal break-words md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl lg:mx-1.5 xl:mx-10 2xl:mx-10">
                                                    {exams.numIcuAdmit}
                                                </td>
                                                <td className="text-sm font-medium text-gray-500 whitespace-normal break-words md:text-lg lg:text-lg xl:text-xl 2xl:text-5xl lg:mx-1.5 xl:mx-10 2xl:mx-10">
                                                    {exams.mortality}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                        <Pagination />
                </div>
            )}

        </>
    );
};
