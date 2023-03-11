import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { TestSearch } from "./components/Search/TestSearch";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <TestSearch />

        <Footer />
      </div>
    </>
  );
};

export default App;
