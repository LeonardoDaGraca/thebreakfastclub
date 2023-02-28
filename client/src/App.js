import "./Styles/Styles.css"
// import { useState, useEffect } from "react";
import { Exams } from './components/Exams/Exams';
// import { Admin } from './components/Admin/Admin';
import { Footer } from "./components/Footer/Footer";
// import { useLoaderData } from "react-router-dom";

const App = () => {
  // const data = useLoaderData();

  // const handleDelete = (id) => {
  //   const examArr = JSON.parse(localStorage.getItem('localData'));
  //   const updatedExamArr = examArr.filter((exam) => exam._id !== id);
  //   localStorage.setItem('localData', JSON.stringify(updatedExamArr));
  //   setLocalData(updatedExamArr);
  //   console.log(localData);
  //   // return data;
  // };

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen min-w-fit h-screen w-screen white-font">
        <Exams />
        <Footer/>
      </div>
    </>
  );
}

export default App;
