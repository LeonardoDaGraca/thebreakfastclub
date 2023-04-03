import React from "react";
import "./Styles/Styles.css";
import { SignIn } from "./components/Login/SignIn";
import { SignUp } from "./components/Login/SignUp";
import { AuthDetails } from "./components/Auth/AuthDetails";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { SignOut } from "./components/Login/SignOut";

const App = () => {
    return (
        <>
            <div className="flex flex-col h-screen w-screen justify-between">
                <Routes>
                        {/* <Route path="/" element={<SignIn />} /> */}
                        {/* <Route path="/signup" element={<SignUp />} /> */}
                        {/* <Route path="/signout" element={<SignOut />} /> */}
                        <Route path="/main" element={<Main />} />
                </Routes>
            </div>
        </>
   )
};

export default App;
