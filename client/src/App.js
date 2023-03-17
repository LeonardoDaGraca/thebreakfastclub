import React from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Search2 } from "./components/Search/Search2";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Search2 />

        <Footer />
      </div>
    </>
  );
};

export default App;
