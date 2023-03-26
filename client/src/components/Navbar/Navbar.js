import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CreateExam } from "../Create/CreateExam";
import { CreateExam2 } from "../Create/CreateExam2";
import { SignIn } from "../Auth/Login/SignIn";
import { SignUp } from "../Auth/Login/SignUp";
import { PatientPopUp } from "../PopUp/PatientPopUp";

export const Navbar = ({ patientId, open }) => {
  const [openCreateExam, setOpenCreateExam] = useState(false);
  const [handleSignIn, setHandleSignIn] = useState();
  const [handleSignUp, setHandleSignUp] = useState();
  const [handlePatientPopUp, setHandlePatientPopUp] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Create Exam Starts
  const handleMenuClick = (event) => {
    event.preventDefault();
    setIsOpen(false);
    setOpenCreateExam(true);
  };

  const handleCloseCreateExamModal = () => {
    setOpenCreateExam(false);
  };

  const handleOpenCreateExamModal = () => {
    setOpenCreateExam(true);
  };
  // Create Exam Ends

  // SignIn Starts
  const handleSignInClick = (event) => {
    event.preventDefault();
    setIsOpen(false);
    setHandleSignIn(true);
  };

  const handleCloseSignInModal = () => {
    setHandleSignIn(false);
  };

  const handleOpenSignInModal = () => {
    setHandleSignIn(true);
  };
  // SignIn Ends

  // SignUp Starts
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
  // SignUp Ends

  // // Patient PopUp Starts
  // const handlePatientPopUpClick = (event) => {
  //   event.preventDefault();
  //   setIsOpen(false);
  //   setHandlePatientPopUp(true);
  // };

  // const handleClosePatientPopUp = () => {
  //   setHandlePatientPopUp(false);
  // };

  // const handleOpenPatientPopUp = () => {
  //   setHandlePatientPopUp(true);
  // };
  // // Patient PopUp Ends

  return (
    <header
      className=" py-3 md:py-2 lg:py-2.5 2xl:py-3.5 shadow-lg  bg-[#060957]"
      id="header"
    >
      <nav className=" flex items-center justify-between  py-2 px-3 md:py-3 md:px-6 xl:py-3 xl:px-8 2xl:py-4 2xl:px-12">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-[#060957] bg-[#ffffff] font-black font-ubuntu rounded md:rounded-md shadow-lg  transition transform ease-in-outease-in-out hover:scale-105 delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 text-sm py-1 px-2 md:text-base md:py-1 md:px-2 lg:text-lg lg:py-1 lg:px-2 2xl:text-xl 2xl:py-1.5 2xl:px-3"
          >
            TBCHealth
          </NavLink>
        </div>

        <div className=" flex border-2 rounded-lg md:hidden">
          <button
            onClick={handleToggle}
            className="inline-flex items-center justify-center p-1 rounded-md text-[#ffffff] hover:text-white hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-1  focus:ring-white"
          >
            {isOpen ? (
              <FaTimes onClick={handleToggle} className="" />
            ) : (
              <FaBars onClick={handleToggle} />
            )}
          </button>
        </div>

        <div className="md:flex hidden w-auto p-2">
          <div className="flex items-center mr-4">
            <button
              onClick={handleOpenCreateExamModal}
              className="text-[#060957] bg-[#ffffff] font-bold font-ubuntu rounded-md shadow-lg  transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base md:py-1 md:px-2 lg:text-lg lg:py-1 lg:px-2 2xl:text-xl 2xl:py-1.5 2xl:px-3"
            >
              Create Exam
            </button>
          </div>
          <div className="flex items-center mr-4">
            <button
              onClick={handleOpenSignInModal}
              className="text-[#ffffff] font-bold font-ubuntu transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base lg:text-lg 2xl:text-xl"
            >
              Sign In
            </button>
          </div>
          {/* <div className="flex items-center mr-4">
            <button
              onClick={handleOpenPatientPopUp}
              className="text-[#ffffff] font-bold font-ubuntu transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base lg:text-lg 2xl:text-xl"
            >
              Patient
            </button>
          </div> */}

          <div className="relative w-10 h-10 overflow-hidden  bg-gray-200 rounded-full ">
              <svg className="absolute w-12 h-12 text-gray-600 -left-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>

          {/* <div className="flex items-center">
            <button
              onClick={handleOpenSignUpModal}
              className="text-[#ffffff] font-bold font-ubuntu transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full mt-14 z-10">
          <div className="flex flex-col items-end py-4 pr-4 justify-between  bg-[#060957] ">
            <NavLink
              onClick={handleOpenCreateExamModal}
              className="block mb-3 px-2.5 py-1 rounded-md shadow-md shadow-[#060957] bg-[#ffffff] text-[#060957] text-xs font-black font-ubuntu  transition transform ease-in-out hover:scale-105 md:ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 hover:font-bold"
            >
              Create Exam
            </NavLink>
            <NavLink
              onClick={handleOpenSignInModal}
              className="block px-2.5 py-1 rounded-md shadow-md shadow-[#060957] bg-[#ffffff] text-[#060957] text-xs font-black font-ubuntu transition transform ease-in-out hover:scale-105 md:ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 hover:font-bold"
            >
              Sign In
            </NavLink>
            {/* <NavLink
              onClick={handleOpenSignUpModal}
              className="block px-2.5 py-1 rounded-md shadow-md shadow-[#060957] bg-[#ffffff] text-[#060957] text-sm font-bold  transition transform ease-in-out hover:scale-105 md:ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 hover:font-bold"
            >
              Sign Uo
            </NavLink> */}
          </div>
        </div>
      )}
      {openCreateExam && (
        <div className="fixed flex flex-col justify-center items-center z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-lg overflow-y-auto w-5/6 md:w-3/4 ">
            <CreateExam2
              open={openCreateExam}
              onClose={() => setOpenCreateExam(false)}
              patientId={patientId}
            />
          </div>
        </div>
      )}
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
      {handlePatientPopUp && (
        <div className="fixed flex flex-col justify-center items-center z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-lg overflow-y-auto  ">
            <PatientPopUp
              open={handlePatientPopUp}
              onClose={() => setHandlePatientPopUp(false)}
            />
          </div>
        </div>
      )}
      <Outlet />
    </header>
  );
};
