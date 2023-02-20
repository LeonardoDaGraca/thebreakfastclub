import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch} from 'react-icons/fa';
import { SearchMobile } from '../Search/SearchMobile';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900">
      <div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 text-base md:text-2xl font-bold">
          <div>
            <NavLink
              to="/"
              className="text-white font-bold"
            >
              MedBay
            </NavLink>
          </div>
          <SearchMobile/>
          <div className=" flex border-2 rounded-lg md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <FaTimes onClick={handleToggle} />
              ) : (
                <FaBars onClick={handleToggle} />
              )}
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 ">
              <NavLink
                to="/exam"
                onClick={handleMenuClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
              >
                Exam
              </NavLink>
              <NavLink
                to="/admin"
                onClick={handleMenuClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
              >
                Admin
              </NavLink>
              <NavLink
                to="/create-exam"
                onClick={handleMenuClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
              >
                Create Exam
              </NavLink>
              <NavLink
                to="/TestForm"
                onClick={handleMenuClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
              >
                Test Form
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 w-full h-full z-10">
          <div className="flex flex-col items-end mt-16 mr-4">
            <NavLink
              to="/exam"
              onClick={handleMenuClick}
              className="text-gray-500 hover:text-gray-700  block px-3 py-2 rounded-md text-base font-medium mt-2"
            >
              Exam
            </NavLink>
            <NavLink
              to="/admin"
              onClick={handleMenuClick}
              className="text-gray-500 hover:text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
            >
              Admin
            </NavLink>
            <NavLink
              to="/create-exam"
              onClick={handleMenuClick}
              className="text-gray-500 hover:text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
            >
              Create Exam
            </NavLink>
          </div>
        </div>
      )}
      <Outlet/>
    </nav>
  );
};
