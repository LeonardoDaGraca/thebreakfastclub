import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CreateExam } from "../Create/CreateExam";

export const Navbar = ({ patientId, open }) => {
  const [openCreateExam, setOpenCreateExam] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <header
      className=" py-2 md:py-4 xl:py-6 2xl:py-4 shadow-lg  bg-[#060957]"
      id="header"
    >
      <nav className=" flex items-center justify-between  py-2 px-3 md:py-3 md:px-6 xl:py-3 xl:px-8 2xl:py-4 2xl:px-12">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="text-[#060957] bg-[#ffffff] font-extrabold font-ubuntu  rounded-md shadow-lg  transition transform ease-in-outease-in-out hover:scale-105 delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 text-base md:text-lg py-1 px-2 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:py-2 2xl:px-3"
          >
            MedBay
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

        <div className="hidden md:block">
          <div className="flex items-center">
            <button
              onClick={handleOpenCreateExamModal}
              className="text-[#ffffff] font-bold font-ubuntu transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Create Exam
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full mt-16 z-10">
          <div className="flex flex-col items-end p-5 shadow-lg shadow-[#060957] bg-[#060957]  backdrop-blur-lg  ">
            <NavLink
              onClick={handleOpenCreateExamModal}
              className="block px-2.5 py-1 rounded-md shadow-md shadow-[#060957] bg-[#ffffff] text-[#060957] text-sm font-bold  transition transform ease-in-out hover:scale-105 md:ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 hover:font-bold"
            >
              Create Exam
            </NavLink>
          </div>
        </div>
      )}
      {openCreateExam && (
        <div className="fixed flex flex-col justify-center items-center z-50 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-lg overflow-y-auto  ">
            <CreateExam
              open={openCreateExam}
              onClose={() => setOpenCreateExam(false)}
              patientId={patientId}
            />
          </div>
        </div>
      )}
      <Outlet />
    </header>
  );
};
