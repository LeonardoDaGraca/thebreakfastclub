import React, { useState } from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Search } from "./components/Search/Search";
import { CreateExam } from "./components/Create/CreateExam";
import { SignIn } from "./components/Auth/Login/SignIn";
import { SignUp } from "./components/Auth/Login/SignUp";
import { AuthDetails } from "./components/Auth/AuthDetails";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <>
      <div className=" flex flex-col h-screen w-screen justify-between ">
        <div id="header" className="">
          <Navbar />
        </div>

        <div id="search" className="">
          {isSignedIn ? (
            <>
              <CreateExam />
              <AuthDetails onSignOut={handleSignOut} />
            </>
          ) : (
            <Search onSignIn={handleSignIn} />
          )}
        </div>

        <div id="footer" className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
