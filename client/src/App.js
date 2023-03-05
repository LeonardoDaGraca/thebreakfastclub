import "./Styles/Styles.css"
// import { useState, useEffect } from "react";
import { Exams } from './components/Exams/Exams';
// import { Admin } from './components/Admin/Admin';
import { Footer } from "./components/Footer/Footer";
// import { useLoaderData } from "react-router-dom";

const App = () => {
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
