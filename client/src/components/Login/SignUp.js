import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "./SignIn";
import {UserAuth} from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Auth/firebase"

export const SignUp = ({ patientId, open, onClose, setIsOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [handleSignIn, setHandleSignIn] = useState("")

    const {createUser} = UserAuth()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await createUser(email, password)
            navigate("/main")
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        // setIsOpen(false);
        // setHandleSignIn(true);
    };
    
      const handleCloseSignInModal = () => {
        setHandleSignIn(false);
      };

      const handleOpenSignInModal = () => {
        setHandleSignIn(true);
      };

  return (
  
          <div 
            id="sign-up"
            className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full mx-auto bg-[#060957] ">
              <div
                className="border bg-white  rounded-lg p-4 mb-5 md:mb-6"
              >
                <h1 
                className="text-[#060957] font-bold text-base md:text-3xl 2xl:text-5xl"
                >
                    Welcome to TBC Health
                </h1>
              </div>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-xs md:max-w-2xl xl::max-w-4xl 2xl:max-w-6xl xl:p-0 ">
                  
                <div className="border p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-[#060957] md:text-2xl ">
                        Sign Up for an account
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 md:space-y-6"
                    >
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-[#060957] ">
                                Your email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-[#060957] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="name@company.com" 
                                required=""
                                
                            />
                        </div>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-[#060957] "
                            >   Password
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-[#060957] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""
                                    
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        className="text-[#060957] "
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit" 
                              className="w-full text-white bg-[#060957]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                        >
                                Sign Up
                        </button>
                        <p 
                            className="text-sm font-light text-[#060957] "
                        >
                                Have an account yet? 
                            <Link 
                            onClick={handleOpenSignInModal}
                                to="/"
                                className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                  Sign In
                            </Link>
                        </p>
                    </form>
              </div>
              {handleSignIn && (
                <div className="fixed flex flex-col justify-center items-center z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm">
                    <div className="relative bg-white rounded-xl shadow-lg overflow-y-auto  ">
                        <SignIn
                        open={handleSignIn}
                        onClose={() => setHandleSignIn(false)}
                        />
                    </div>
                </div>
              )}
            </div>
        </div>
   
  )
}
