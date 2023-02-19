import React from "react";
import "./Styles/Styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
// import { Search } from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
// import { Admin } from "./components/Admin/Admin";
// import { ExamForm } from "./components/Create/ExamForm";
// import { NotFound } from "./components/Notfound/NotFound";



const App = () => {
  return (
    <>
      <div className="App">
        
        <Navbar />
        <Exams />
       
      </div>
    </>
  );
}

export default App;