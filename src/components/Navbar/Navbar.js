import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

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
          <NavLink
            to="/"
            className="text-white font-bold uppercase"
          >
            MedBay
          </NavLink>
          <div class="flex items-center w-1/2 justify-center relative md:hidden">
            {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div> */}
            <input type="search" id="default-search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Exams" required />
            {/* <FaBeer class="text-white font-bold absolute right-0.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-2xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/> */}
            <button type="submit" class="text-white absolute right-0.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaSearch/></button>
          </div>
         
            {/* <div className="flex justify-between items-center border-2 h-7 w-56 border-green-500 md:hidden">
                    <input className="border-2 w-56 rounded-lg focus:outline-none text-xs md:p-2 relative"
                        type="text" placeholder="Search" />

                    <FaBeer className="flex text-red-500 absolute items-end" />
              
              
                {/* <button className="absolute bg-gray-700 px-2 rounded-full text-zinc-50 font-bold h-auto">Search</button> */}
            {/* </div> */}
          
          <div className="-mr-2 flex md:hidden">
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
