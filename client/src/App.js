import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
// import { Search } from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
// import { TestForm } from "./components/Create/TestForm";
// import { Edit } from "./components/Edit/Edit";
// import { CreateExamForm } from "./components/Create/CreateExamForm";
// import { NotFound } from "./components/Notfound/NotFound";



const App = () => {
  return (
      <>
        <div className="App">
          <Navbar/>
          <Search/>
          <Exams />
          <Footer/>
        </div>
      </>
  );
}

export default App;