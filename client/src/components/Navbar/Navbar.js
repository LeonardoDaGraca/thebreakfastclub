import React, { useState } from 'react';
// import link element from dependency react-router-dom for use with browser router
import { NavLink, Outlet } from "react-router-dom";

// implement functional React component for the Navbar
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-white shadow w-screen relative">
          <div className="flex items-center justify-between w-screen mx-auto border-2 border-black p-6 fixed md:static">
              <h1 className="text-2xl font-medium text-gray-900 drop-shadow-2xl">The Breakfast Club</h1>
              <div className="block lg:hidden ">
                  <button
                      className="flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsOpen(!isOpen)}
                  >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          {isOpen ? (
                              <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"/>
                          ) : (
                              <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                          )}
                      </svg>
                  </button>
              </div>
              <div
                  className={`${
                      isOpen ? 'block' : 'hidden'
                  } lg:block lg:flex lg:items-center w-full lg:w-auto`}
              >
                  <div className="text-sm lg:flex-grow">
                    
                    <NavLink to="/"
                      className="block mt-4 lg:inline-block lg:mt-0
                      text-gray-600 hover:text-gray-900 mr-4"
                    >
                      Exams
                    </NavLink> 
                    <NavLink to="/admin"
                      className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-900"
                    >
                      Admin
                    </NavLink>
                      <NavLink to="/examform"
                               className="block mt-4 lg:inline-block lg:mt-0
                                text-slate-100 hover:text-white hover:shadow-md ml-4 border-2 border-gray-200 p-2 bg-blue-500 hover:bg-blue-600 rounded-md"
                      >
                          Create Exam
                      </NavLink>
                  </div>
              </div>
           </div>
          <Outlet/>
      </nav>
  );
};
