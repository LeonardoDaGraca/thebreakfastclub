import React from "react";
import "./Styles/Styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
// import { Search } from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
import { TestSearch } from "./components/Search/TestSearch";
import { TestForm } from "./components/Create/TestForm";
// import { Admin } from "./components/Admin/Admin";
// import { ExamForm } from "./components/Create/ExamForm";
// import { NotFound } from "./components/Notfound/NotFound";



const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Navbar />}>
          <Route path="testform" element={<TestForm/> } />
          </Route>  
        </Routes>
        <TestSearch/>
        <Exams />
      </div>
    </>
  );
}

export default App;