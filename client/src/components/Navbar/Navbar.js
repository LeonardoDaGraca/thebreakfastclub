import React, { useState } from "react";
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
    <header className="bg-gray-900 w-screen p-6">
        <nav className="flex items-center justify-between ">
          <div>
            <NavLink
              to="/"
              className="text-white font-bold text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl"
            >
              MedBay
            </NavLink>
          </div>

          <div className=" flex border-2 rounded-lg md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <FaTimes onClick={handleToggle} className="" />
              ) : (
                <FaBars onClick={handleToggle} />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2 ">
              <NavLink
                to="/create-exam"
                onClick={handleMenuClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl"
              >
                Create Exam
              </NavLink>
            </div>
          </div>
        </nav>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full mt-16 z-10 ">
          <div className="flex flex-col items-end p-5 bg-gray-900 bg-opacity-80 backdrop-blur-md backdrop-brightness-150">
            <NavLink
              to="/create-exam"
              onClick={handleMenuClick}
              className="block px-3 py-2 rounded-md text-zinc-50 text-base font-medium  transform transition hover:-translate-y-1 hover:scale-110 hover:font-bold"
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
