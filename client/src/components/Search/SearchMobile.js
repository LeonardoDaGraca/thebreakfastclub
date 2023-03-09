import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchMobile = () => {
    return (
        <div className="flex items-center w-3/5 justify-center relative md:hidden">
        {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div> */}
        <input type="search" id="default-search" className="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Exams" required />
        {/* <FaBeer class="text-white font-bold absolute right-0.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-2xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/> */}
        <button type="submit" className="text-white absolute right-0.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FaSearch/></button>
      </div>
    )
}