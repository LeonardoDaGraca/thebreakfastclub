import React from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="flex justify-center w-full mt-4 md:mt-8 py-6">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className="font-bold text-[#FFFFFF] bg-[#87D2E2] border-2 border-[#87D2E2] shadow-md shadow-cyan-600 transform transition ease-in-out hover:translate-y-1 hover:scale-100 focus:outline-none hover:bg-[#9CD7ED] rounded mx-0.5  md:mx-1 md:px-2 md:py-1 md:text-lg lg:mx-1.5 lg:px-3 lg:py-1 lg:text-lg xl:mx-2 xl:px-2.5 xl:py-1.5 xl:text-xl 2xl:mx-2 2xl:rounded-lg 2xl:px-4 2xl:py-2 2xl:text-2xl"
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Pagination;
