import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    
    <div className="flex justify-center border-2 border-black w-full">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="rounded-xl px-1 py-1 bg-blue-900 text-white focus:ring hover:bg-blue-800 md:p-2 md:text-xs lg:p-2 lg:text-lg xl:p-4 xl:text-xl 2xl:p-6 2xl:text-5xl"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
