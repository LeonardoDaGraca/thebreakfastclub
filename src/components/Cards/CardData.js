import React, { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';
import ExamsPopUp from '../PopUp/ExamsPopUp';

export const CardData = () => {

  {/*Using useState hook to initialize data state to an empty array.*/}
  const [data, setData] = useState([]);

  {/*Using useEffect hook to fetch data from an API and set the data state with the response data.*/}
  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
    .then((res) => res.json())
    .then((res) => setData(res.exams))
    .catch((error) => console.error("Error:", error));
  }, []);

  {/*Using useState hook to initialize currentPage and itemsPerPage state to 1 and 16 respectively.*/}
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  {/*Defining a function called handlePageChange to update currentPage state.*/}
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  {/*Creating an empty array called pageNumbers. Looping through the data and calculating the total number of pages. Pushing each page number into the pageNumbers array.*/}  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  {/*Uses the reduce function to group the data array by patient ID. Initializes the accumulator object acc to an empty object. If the current patient ID is not in the accumulator object, initializes it with an object containing the patientId and an empty exams array. Pushes the current exam object to the corresponding patient object's exams array. Returns the accumulator object.*/}
  const groupedData = data.reduce((acc, exam) => {
    if (!acc[exam.patientId]) {
      acc[exam.patientId] = { patientId: exam.patientId, exams: [] };
    }
    acc[exam.patientId].exams.push(exam);
    return acc;
  }, {});

  {/*PopUp Window section.*/}
  const [showMyData, setShowMyData] = useState(false)
  const closeDataPopUp = () => setShowMyData(false);

  {/*Defining a function called renderCard to render each patient card. Extracting patientId and exams from the patient object. Returning a button element with patient ID and styles.*/} 
  function renderCard(patient) {
    const { patientId } = patient;
    return (
      <button key={patientId} onClick={() => setShowMyData(true)} className="card flex flex-col justify-center items-center border rounded-md shadow-md hover:shadow-lg hover:cursor-pointer space-y-1 h-16 md:h-20 lg:h-28 xl:h-32 2xl:space-y-6 2xl:h-72 ">
        <th className="text-base font-bold lg:text-lg xl:text-2xl 2xl:text-5xl">Patient ID</th>
        <td className="text-sm font-semibold lg:text-base xl:text-xl 2xl:text-4xl ">{patient.patientId}</td>
      </button>
    );
  }

  {/*Calculating the index of the last item on the current page.*/}
  const indexOfLastItem = currentPage * itemsPerPage;
  {/*Calculating the index of the first item on the current page.*/}
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  {/*Slicing the grouped data based on the current page.*/}    
  const currentData = Object.values(groupedData).slice(indexOfFirstItem, indexOfLastItem);

  {/*Defining a function called reduceRows to reduce the number of rows of patient cards. It takes two parameters, rowData and numColumns, which are used to calculate the number of rows and columns needed to display the data.*/}
  const reduceRows = (rowData, numColumns) => {
    const numRows = Math.ceil(rowData.length / numColumns);
    const result = Array.from({ length: numRows }, (_, i) =>
      rowData.slice(i * numColumns, i * numColumns + numColumns)
    );
    return result;
  };

  {/*Checking the device width to determine the number of columns and rows to display the data.*/}
  const deviceWidth = window.innerWidth;
let numColumns, numRows;
if (deviceWidth >= 1024) {
  // Desktop layout
  numColumns = 4;
  numRows = 8;
} else if (deviceWidth >= 768 && deviceWidth < 1024) {
  // Tablet layout
  numColumns = 2;
  numRows = 6;
} else {
  // Mobile layout
  numColumns = 1;
  numRows = 8;
}

  {/*Reduce the data rows of data based on the number of columns specified. This function takes two arguments, an array of data and the number of columns to display, and returns a new array of data with a reduced number of rows.*/}
  const reducedData = reduceRows(currentData, numColumns).slice(0, numRows);

  return (
    <div>
      <div className={`grid grid-cols-${numColumns} grid-rows-${numRows}  2xl:w-full mx-auto rounded-md p-4 h-auto gap-2`}>
        {reducedData.map((row, index) => (
          <div key={index} className="grid grid-cols-1 gap-y-1">
            {row.map(renderCard)}
            <ExamsPopUp onClose={closeDataPopUp } visible={showMyData} />
          </div>
        ))}
      </div>
          {/* The Pagination component is used to display page numbers and allow the user to navigate through the data. It takes three props: currentPage which is the current page number, totalPages which is the total number of pages, and onPageChange which is a function that is called when the user clicks on a page number. This function is used to update the currentPage state variable in the parent component. */}
        <Pagination pageNumbers={pageNumbers} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};
