import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
import { SignUp } from "./SignUp";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Auth/firebase"

export const SignIn = ({ patientId, open, onClose, isOpen, setIsOpen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handleSignUp, setHandleSignUp] = useState();
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const {signIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(email, password)
            navigate("/main")
        } catch (e) {
            setError(e.message);
            console.log(e.message)
        }
    }

    // const login = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             console.log(userCredential)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    const handleSignUpClick = (event) => {
        event.preventDefault();
        setIsOpen(false);
        setHandleSignUp(true);
      };

      const handleCloseSignUpModal = () => {
        setHandleSignUp(false);
      };

      const handleOpenSignUpModal = () => {
        setHandleSignUp(true);
      };

  return (
  
          <div 
            id="sign-in"
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
                        Sign in to your account
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 md:space-y-6" 
                        action="#"
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
                            <Link 
                                href="#" 
                                className="text-sm font-medium text-[#060957] hover:underline dark:text-primary-500"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            type="submit" 
                              className="w-full text-white bg-[#060957]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                        >
                                Sign in
                        </button>
                        <p 
                            className="text-sm font-light text-[#060957] "
                        >
                                Don’t have an account yet? 
                            <Link 
                                onClick={handleOpenSignUpModal}
                                to="/signup"
                                className="ml-1 font-medium text-[#060957] hover:underline dark:text-primary-500"
                            >
                                  Sign up
                            </Link>
                        </p>
                    </form>
              </div> 
              {handleSignUp && (
                <div className="fixed flex flex-col justify-center items-center z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm">
                    <div className="relative bg-white rounded-xl shadow-lg overflow-y-auto  ">
                        <SignUp
                        open={handleSignUp}
                        onClose={() => setHandleSignUp(false)}
                        />
                    </div>
                </div>
              )}
            </div>
        </div>
   
  )
}
