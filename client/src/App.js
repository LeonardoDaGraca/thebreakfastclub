import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";





const App = () => {
  return (
      <>
        <div className="App">
          <Navbar/>
          <Search/>
         
          <Footer/>
        </div>
      </>
  );
};

export default App;
