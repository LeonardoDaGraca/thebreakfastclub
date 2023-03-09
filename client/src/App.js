import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import { Search } from "./components/Search/Search";
import { Exams } from "./components/Exams/Exams";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
import { CreateExamForm } from "./components/Create/CreateExamForm";
import { NotFound } from "./components/NotFound/NotFound";
import { TestForm } from "../src/components/Create/TestForm";

// import { TestForm } from "./components/Create/TestForm";
// import { Edit } from "./components/Edit/Edit";
// import { CreateExamForm } from "./components/Create/CreateExamForm";
// import { NotFound } from "./components/Notfound/NotFound";

const App = () => {
  return (
    <>
      <div className="App">
        {/* implement routes component with individual route components nested that provide the path and the component which should be loaded when the browser visits that specific path */}
        <Routes>
          <Route path="/" element={[<Navbar />, <Search />]}>
            {/* setting up nested route to view a single exam by :id param */}
            {/* do I need to pass in the id as a prop to Exam right here in the route? */}
            {/* <Route path="/:id" element={<Exam />} /> */}
          </Route>
          <Route path="create-exam" element={<TestForm />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
