import React from "react";
import "./Styles/Styles.css";
import {Route, Routes} from "react-router-dom";
import {SignIn} from "./components/Login/SignIn";
import {SignUp} from "./components/Login/SignUp";
import {Main} from "./components/Main/Main";
import {AuthContextProvider} from "./components/context/AuthContext";
import {SignOut} from "./components/Login/SignOut";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <>
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signout" element={<SignOut/>}/>
                <Route path="/main" element={
                    <ProtectedRoute>
                        <Main/>
                    </ProtectedRoute>}/>
            </Routes>
        </AuthContextProvider>
    </>
  );
};

export default App;
