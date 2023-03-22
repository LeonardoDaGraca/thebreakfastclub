import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className=" py-2 md:py-4 xl:py-6 2xl:py-4 shadow-lg shadow-stone-600 rounded-b-lg" id="header">
        <nav className=" flex items-center justify-between  py-2 px-3 md:py-3 md:px-6 xl:py-3 xl:px-8 2xl:py-4 2xl:px-12">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-[#060957] bg-[#ffffff] font-extrabold font-ubuntu  rounded-md shadow-lg shadow-stone-600 transition transform ease-in-outease-in-out hover:scale-105 delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 text-base md:text-lg py-1 px-2 lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:py-2 2xl:px-3"
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
                <FaTimes onClick={handleToggle} className="text-[#060957]" />
              ) : (
                <FaBars onClick={handleToggle} className="text-[#060957]" />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center">
              <NavLink
                to="/create-exam"
                onClick={handleMenuClick}
                className="text-[#060957] font-bold font-ubuntu transition transform ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                Create Exam
              </NavLink>
            </div>
          </div>
        </nav>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full mt-16 z-10">
          <div className="flex flex-col items-end p-5 shadow-lg shadow-stone-600 bg-[#bed8fa] bg-opacity-30 backdrop-blur-lg  ">
            <NavLink
              to="/create-exam"
              onClick={handleMenuClick}
              className="block px-2.5 py-1 rounded-md shadow-lg shadow-stone-600 bg-[#ffffff] text-[#060957] text-sm font-bold  transition transform ease-in-out hover:scale-105 md:ease-in-out delay-150 hover:-translate-y-1 md:hover:scale-105 2xl:hover:scale-110 duration-300 hover:font-bold"
            >
              Create Exam
            </NavLink>
          </div>
        </div>
      )}
      <Outlet />
    </header>
  );
};
