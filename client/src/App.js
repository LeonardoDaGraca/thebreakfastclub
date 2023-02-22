import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { Search } from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
import { TestSearch } from "./components/Search/TestSearch";
import { Footer } from "./components/Footer/Footer";
// import { TestForm } from "./components/Create/TestForm";
// import { Admin } from "./components/Admin/Admin";
// import { ExamForm } from "./components/Create/ExamForm";
// import { NotFound } from "./components/Notfound/NotFound";



const App = () => {
  return (
      <>
        <div className="App">
          <Navbar/>
          <TestSearch/>
          <Exams />
          <Footer/>
        </div>
      </>
  );
}

export default App;