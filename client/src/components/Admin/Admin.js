import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { TestSearch } from '../Search/TestSearch';
import { Footer } from '../Footer/Footer';
import { useLoaderData } from "react-router-dom";
import DataPopUp from "../PopUp/DataPopUp";
import ImagePopUp from "../PopUp/ImagePopUp";
import { Mobile } from "../Mobile/Mobile";
import { ExamDataPopUp } from "../PopUp/ExamDataPopUp";
import { v4 as uuidv4 } from 'uuid';

export const Admin = () => {
  const data = useLoaderData();
  console.log(data);

  // const handleUpdateSubmit = (e) => {
  //     e.preventDefault();
  
  //     onSubmit({
  //       patientId,
  //       examId,
  //       keyFindings,
  //       brixiaScore,
  //       age,
  //       sex,
  //       bmi,
  //       zipCode,
  //       image
  //     });
  //   }

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   console.log(examArr, id);  
  //   const updatedExamArr = data.filter((exam) => exam._id !== id);
  //   console.log(`updatedExamArr: ${updatedExamArr}`)
  //   // return data;
  // }

  // planning for update functionality
  // const updateExamRecord = (updatedExam) => {
  //   fetch(` /* API URL */ `, {
  //     method: 'PATCH', 
  //     headers: {
  //         'Content-Type': 'application/JSON',
  //         Authorization: `Bearer ${/* if needed */}`
  //       },
  //     body: JSON.stringify({
  //       fields: {
          // include updated fields here
          // age: updatedExam.age (for example)
          // bmi
          // brixia
          // imageUrl
          // exam ID
          // key findings
          // sex
          // zipcode
          // patient ID
        // }}),
        //   })
      // .then(setTimeout(() => {
      //     getData()
      //   }, 100))
  //     .catch(()=>{console.log('Error')})
  // };
  // }

// planning for update functionality
  // const handleUpdateSubmit = (e, id) => {
    // when passed an ID, the matching exam will display in a separate pop up component with input fields filled with current data but editable
    // e.preventDefault();
    // updateExamRecord({ /* this is passed to the updateExamRecord function above as an object and includes fields that have been updated here */ })

  // }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = data.slice(startIndex, endIndex);

  // pagination state and handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  // manage patient/exam pop up modals
  const [showDataPopUp, setShowDataPopUp] = useState(false)
  const [showImagePopUp, setShowImagePopUp] = useState(false)
  const [showExamDataPopUp, setShowExamDataPopUp] = useState(false);
  const handleDataClose = () => setShowDataPopUp(false);
  const handleImageClose = () => setShowImagePopUp(false);
  const handleExamDataClose = () => setShowExamDataPopUp(false);

  return (
    <>
    {/* map through each object returned from the api to display the appropriate information */}
      {pageData.map(function (item, index) {
        return (
          <div key={uuidv4()}>
            <section className="md:flex relative w-full hidden px-4 white-font">
              <div className="flex w-full justify-center p-4 md:max-w-7xl mx-auto h-auto border rounded-lg shadow-lg space-x-2">
                <div className=" w-36">
                  <h1 className="font-bold text-base mb-1">Patient ID</h1>
                    <div>
                    <Link onClick={() => setShowDataPopUp(true)}><p className="text-sm text-blue-600 hover:font-bold hover:underline ">{item._id}</p></Link>
                    </div>
                </div>
                <div className=" w-28">
                  <h1 className="font-bold text-base mb-1">Exams</h1>
                    {item.exams.sort().map(function (exam, index) {
                      return (
                        <div key={uuidv4()} >
                          <Link onClick={() => setShowExamDataPopUp(true)}>
                            <p className="text-sm text-blue-600 hover:font-bold hover:underline ">Exam {index+1}</p>
                          </Link>
                          <ExamDataPopUp 
                            key={exam._id} 
                            exam={exam} 
                            examNum={index+1} 
                            onClose={handleExamDataClose} visible={showExamDataPopUp}
                          />
                        </div>
                      )
                    })
                  }  
                </div>
                {/* DO NOT CURRENTLY HAVE ACCESS TO IMAGES, THIS WILL LIKELY GO ON THE EXAM MODAL IF/WHEN AVAILABLE */}
                {/* <div className=" w-80 px-2">
                  <h1 className="font-bold text-base mb-1">Key Findings</h1>
                  <p className="flex flex-wrap text-sm ">{item.findings}</p>
                </div> */}
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
                  <p className="text-sm">{ item.bmi}</p>
                </div>
                <div className=" w-28 ">
                  <h1 className="font-bold text-base mb-1">Zip Code</h1>
                  <p className="text-sm">{ item.zip}</p>
                </div>
            </div>
            <DataPopUp item={item} onClose={handleDataClose } visible={showDataPopUp} setShowExamDataPopUp={setShowExamDataPopUp} handleExamDataClose={handleExamDataClose} showExamDataPopUp={showExamDataPopUp} />
            {/* <ImagePopUp item={item} onClose={handleImageClose } visible={showImagePopUp}/> */}

          </section>
        <Mobile item={item}/> 
        </div>
        )
      })};

      <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
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
      </div>
      <Footer />
    </>  
  );
};

//        <div className="form flex items-center justify-center w-screen h-auto ">
//             <div className=" m-auto p-6 h-screen">
//                 <div className="flex justify-center w-full p-6 bg-gray-200 border-black rounded-xl min-w-fit mt-4 ">
//                     <table className=" table-auto max-w-7xl min-w-fit text-left ">
//                         <thead className="">
//                         <tr className="bg-gray-800 text-white text-xs md:text-sm lg:text-base w-max">
//                             <th className="px-2 py-2 w-32">Patient ID</th>
//                             <th className="px-2 py-2 w-28">Exam ID</th>
//                             <th className="px-2 py-2 w-28">Images</th>
//                             <th className="px-2 py-2 w-96">Key Findings</th>
//                             <th className="px-2 py-2 w-24">Brixia Scores</th>
//                             <th className="px-2 py-2 w-24">Age</th>
//                             <th className="px-2 py-2 w-24">Sex</th>
//                             <th className="px-2 py-2 w-24">BMI</th>
//                             <th className="px-2 py-2 w-24">Zip Code</th>
//                             <th className="px-2 py-2 ">Take Action</th>
//                             <th className="px-2 py-2 w-24"></th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {pageData.map(function (item) {
//                             return (
//                                 <tr key={item._id} className="bg-gray-200 text-sm border-b-2 border-black items-center">
//                                     <td className=" px-2 py-4">{item.patientId}</td>
//                                     <td className=" px-2 py-4">{item.examId}</td>
//                                     <td className=" px-2 py-4"><img src={item.imageURL} alt="images"/></td>
//                                     <td className=" px-2 py-4">{item.keyFindings}</td>
//                                     <td className=" px-2 py-4">{item.brixiaScores}</td>
//                                     <td className=" px-2 py-4">{item.age}</td>
//                                     <td className=" px-2 py-4">{item.sex}</td>
//                                     <td className=" px-2 py-4">{item.bmi}</td>
//                                     <td className=" px-2 py-4">{item.zipCode}</td>
//                                     <td className="  ">
//                                         <button
//                                             className=" bg-gray-500 px-2 py-2 rounded-md text-white"
//                             onClick={(id) => handleUpdateSubmit(item._id)}>
//                                             Update
//                                         </button>
//                                     </td>
//                                     <td className="">
//                                         <button className=" bg-red-500 px-2 py-2 rounded-md text-white"
//                                         onClick={(id) => handleDelete(item._id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             );
//                         })}
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
//                     <div className="border-2 flex w-3/4 justify-center">
//                         <button disabled={currentPage === 1} onClick={handlePrevious} className="page-btn">
//                             <i className="fa-solid fa-arrow-left"></i>
//                         </button>
//                         {pageNumbers.map((number) => (
//                             <button key={number} onClick={() => setCurrentPage(number)} className="page-btn">
//                                 {number}
//                             </button>
//                         ))}
//                         <button
//                             disabled={currentPage === pageNumbers.length}
//                             onClick={handleNext} className="page-btn">
//                             <i className="fa-solid fa-arrow-right"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//           </div>
//       <Footer/>
//     </>
//   );
// };
