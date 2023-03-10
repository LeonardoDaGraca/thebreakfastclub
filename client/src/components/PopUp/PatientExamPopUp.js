import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const PatientExamsPopup = () => {
    const [data, setData] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    // Fetching data from API using the useEffect Hook starts
    useEffect(() => {
        fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
            .then((res) => res.json())
            .then((res) => setData(res.exams))
            .catch((error) => console.error("Error:", error));
    }, []);
    // Fetching data from API using the useEffect Hook ends

    // Function to group data by patient ID starts
    const groupByPatientId = (data) => {
        return data.reduce((acc, cur) => {
            acc[cur.patientId] = acc[cur.patientId] || [];
            acc[cur.patientId].push(cur);
            return acc;
        }, {});
    };
    const groupedData = groupByPatientId(data);
    // Function to group data by patient ID ends

    // Function to handle button click and set selected patient ID starts
    const handleButtonClick = (patientId) => {
        setSelectedPatientId(patientId);
    };

    // Function to clear selected patient ID starts
    const handleCloseModal = () => {
        setSelectedPatientId(null);
    };

    return (
        <>
            {/* Modal window */ }
            {selectedPatientId && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center lg:px-16 xl:px-16 2xl:px-20">
                    <div className=" bg-white rounded-xl shadow-md p-4 w-full h-1/2 overflow-y-auto">
                        <div className="flex items-center justify-between  md:px-4 ">
                            <button
                                className=" text-gray-500 font-medium  hover:text-gray-600 focus:outline-none text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl"
                                onClick={() => setSelectedPatientId(null)}
                            >
                                Edit
                            </button>
                            <button
                                className=" text-gray-500 font-medium  hover:text-gray-600 focus:outline-none text-base md:text-xl lg:text-xl xl:text-3xl 2xl:text-6xl"
                                onClick={() => setSelectedPatientId(null)}
                            >
                                x
                            </button>
                        </div>

                        <div className="flex justify-center items-center  px-10 my-6 2xl:h-1/5">
                            <tr className="flex flex-col items-center  2xl:gap-4">
                                <th className="text-lg font-semibold text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                    Patient ID
                                </th>
                                <td className="text-lg font-semibold text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                    {selectedPatientId}
                                </td>
                            </tr>
                        </div>

                        <div className="flex justify-center items-center 2xl:mt-4 2xl:h-1/2">
                            {groupedData[selectedPatientId].map((exams) => (
                                <div key={exams.id} className=" border-gray-200 h-full w-full">
                                    <div className="flex justify-between h-1/3 md:px-10 lg:px-4 2xl:gap-4">
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Exam ID
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.examId}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Brixia Score
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.brixiaScores}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Zip Code
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.zipCode}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Sex
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.sex}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Age
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.age}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-sm font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                BMI
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.bmi}
                                            </td>
                                        </tr>
                                    </div>
                                    <div className="flex justify-between md:justify-evenly mt-6 p-2 h-1/2">
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-base font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Key Findings
                                            </th>
                                            <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                                                {exams.keyFindings}
                                            </td>
                                        </tr>
                                        <tr className="flex flex-col items-center 2xl:gap-6">
                                            <th className="text-Base font-medium text-gray-900 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                                                Images
                                            </th>
                                            <td className="">
                                                <Link><img src={exams.imageURL} alt="images" /></Link>
                                            </td>
                                        </tr>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


