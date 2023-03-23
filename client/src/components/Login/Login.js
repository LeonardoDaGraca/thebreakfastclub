import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

export const Login = ({patientId, open, onClose}) => {
  return (
    <>
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm ">
        <div className=" bg-white rounded-xl shadow-lg overflow-y-auto  2xl:w-1/4 ">
          <div className="flex items-center justify-end p-3">
            <button
              onClick={onClose}
              className="transform transition hover:translate-y-1 hover:scale-105 shadow-md shadow-[#060957] rounded-full text-gray-800 border p-1.5 md:p-2 text-xs font-bold lg:text-sm 2xl:text-base"
            >
              <GrClose className="" />
            </button>
          </div>
          
          <div className="flex justify-center items-center w-full h-fit px-4 py-6">
            <form
              className="w-full"
              action=""
            //   onSubmit={handleCreateExamSubmit}
            >
              <h1 className=" font-bold text-center text-[#393939] text-lg  md:text-xl lg:text-xl  2xl:text-3xl">
                Login
              </h1>
              <hr className="border-b border-gray-200 mt-3" />
              <div className="grid grid-cols-1 mt-4 gap-4">
              
                <div className="mt-3">
                    <label 
                        htmlFor="email"
                        className="block mb-2 2xl:text-2xl"
                    >
                        User Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter Email..." 
                        className="border w-full px-2 py-1  2xl:text-2xl focus:outline-none focus:ring-0 focus:border-gray-600"        
                    />
                </div>
                <div className="mt-3">
                    <label 
                        htmlFor="password"
                        className="block mb-2 2xl:text-2xl"
                    >
                        User Passowrd
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter Password..." 
                        className="border w-full px-2 py-1  2xl:text-2xl focus:outline-none focus:ring-0 focus:border-gray-600"        
                    />
                </div>
                {/* <div className="">
                    <label
                        className="2xl:text-2xl"
                        htmlFor="email"
                    
                    >
                     Email
                    </label>
                    <input
                        className="border-2"
                        type="text"
                        name="email"
                        // onChange={(e) => handleInputChanges(e)}
                     />
                </div>
                <div className="">
                  <label
                    className="xl:text-2xl"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border-2 "
                    type="text"
                    name="password"
                    // id="daysImageDiagnosos"
                    // onChange={(e) => handleInputChanges(e)}
                  />
                </div> */}
              </div>
              <div className="flex justify-end pt-6 gap-2  xl:gap-3 2xl:gap-4">
                <button
                  type="reset"
                  className="bg-red-600 shadow-md shadow-[#060957] border border-[#ffffff] rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                //   onClick={redirectHome}
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="bg-[#060957] shadow-md shadow-[#060957] border border-[#ffffff] rounded-lg font-bold text-[#ffffff] px-2 py-1 text-sm md:px-2.5 md:py-0.5 md:text-base lg:px-2 lg:py-0.5 lg:text-lg xl:px-2.5 xl:py-1 xl:text-xl 2xl:px-2.5 2xl:py-1.5 2xl:text-2xl"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
