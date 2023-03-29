import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Search } from "../Search/Search";

export const Main = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-between">
        <div id="header" className="">
          <Navbar />
        </div>
        <div id="header" className="">
          <Search />
        </div>
        <div id="header" className="">
          <Footer />
        </div>
      </div>
    </>
      
  )
}
