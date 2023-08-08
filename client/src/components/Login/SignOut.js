import React, {useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {Link} from "react-router-dom";

export const SignOut = () => {
    const {user, logout} = UserAuth();
    const [handleSignIn, setHandleSignIn] = useState("")
    const handleOpenSignInModal = () => {
        setHandleSignIn(true);
    };

      return (
        <div
            id="signout"
            className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full mx-auto bg-[#060957] ">
              <div
                className="border bg-white  rounded-lg p-4 mb-5 md:mb-6"
              >
                <h1
                className="text-[#060957] font-bold text-base md:text-3xl 2xl:text-5xl"
                >
                    Thank you for using TBC Health
                </h1>
              </div>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-xs md:max-w-xl xl::max-w-2xl 2xl:max-w-3xl xl:p-0 ">
                <div className="border p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center font-extrabold leading-tight tracking-tight text-[#060957] text-xl md:text-3xl ">
                        <p className="text-[#060957] font-bold text-base md:text-3xl 2xl:text-5xl">
                            User Email: {user && user.email}
                        </p>
                    </h1>
                    <h2 className="text-center font-bold leading-tight tracking-tight text-[#060957] text-lg md:text-2xl ">
                        Has Signed Out
                    </h2>
                    <div className="flex justify-center pt-3">
                        <Link
                            onClick={handleOpenSignInModal}
                            to="/"
                            className="ml-1 font-semibold text-[#060957] hover:underline hover:font-black"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
              </div>
        </div>
  )
}
