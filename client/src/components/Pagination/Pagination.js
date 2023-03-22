// original

import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const showCondensedPagination = () => {
    if (totalPages > 7 && window.innerWidth >= 640) {
      const start = currentPage - 2 > 1 ? currentPage - 2 : 1;
      const end = currentPage + 2 < totalPages ? currentPage + 2 : totalPages;

      const condensedPages = [1];
      if (start > 2) condensedPages.push(null);
      for (let i = start; i <= end; i++) {
        condensedPages.push(i);
      }
      if (end < totalPages - 1) condensedPages.push(null);
      condensedPages.push(totalPages);

      return condensedPages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`font-bold text-[#ffffff] ${
            page === currentPage
              ? "bg-[#060957] hover:bg-[#9CD7ED] "
              : "bg-[#060957] hover:bg-[#9CD7ED]"
          } border border-[#9bbeed] shadow-md shadow-[#060957] transform transition ease-in-out hover:translate-y-1 hover:scale-100 focus:outline-none rounded mx-0.5 md:mx-1 md:px-2 md:py-1 md:text-lg lg:mx-1.5 lg:px-3 lg:py-1 lg:text-lg xl:mx-2 xl:px-2.5 xl:py-1.5 xl:text-xl 2xl:mx-2 2xl:rounded-lg 2xl:px-4 2xl:py-2 2xl:text-2xl`}
        >
          {page === null ? "..." : page}
        </button>
      ));
    } else {
      return pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`font-bold text-[#ffffff] ${
            page === currentPage
              ? "bg-[#060957] hover:bg-[#9CD7ED]"
              : "bg-[#060957] hover:bg-[#9CD7ED]"
          } border border-[#9bbeed] shadow-md shadow-[#060957] transform transition ease-in-out hover:translate-y-1 hover:scale-100 focus:outline-none rounded mx-0.5 md:mx-1 md:px-2 md:py-1 md:text-lg lg:mx-1.5 lg:px-3 lg:py-1 lg:text-lg xl:mx-2 xl:px-2.5 xl:py-1.5 xl:text-xl 2xl:mx-2 2xl:rounded-lg 2xl:px-4 2xl:py-2 2xl:text-2xl`}
        >
          {page}
        </button>
      ));
    }
  };

  return (
    <>
      <div className="flex justify-center w-full mt-4 md:mt-8 py-6 ">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`font-bold text-[#ffffff] ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#060957] hover:bg-[#9CD7ED]"
          } border border-[#9bbeed] shadow-md shadow-[#060957] transform transition ease-in-out hover:translate-y-1 hover:scale-100 focus:outline-none rounded-l mx-0.5 md:mx-1 md:px-2 md:py-1 md:text-lg lg:mx-1.5 lg:px-3 lg:py-1 lg:text-lg xl:mx-2 xl:px-2.5 xl:py-1.5 xl:text-xl 2xl:mx-2 2xl:rounded-lg 2xl:px-4 2xl:py-2 2xl:text-2xl`}
          disabled={currentPage === 1}
        >
          <AiOutlineLeft className="inline-block align-middle" />
        </button>
        {showCondensedPagination()}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`font-bold text-[#ffffff] ${
            currentPage === totalPages
              ? "bg-[#060957] cursor-not-allowed"
              : "bg-[#060957] hover:bg-[#9CD7ED]"
          } border border-[#9bbeed] shadow-md shadow-[#060957] transform transition ease-in-out hover:translate-y-1 hover:scale-100 focus:outline-none rounded-r mx-0.5 md:mx-1 md:px-2 md:py-1 md:text-lg lg:mx-1.5 lg:px-3 lg:py-1 lg:text-lg xl:mx-2 xl:px-2.5 xl:py-1.5 xl:text-xl 2xl:mx-2 2xl:rounded-lg 2xl:px-4 2xl:py-2 2xl:text-2xl`}
          disabled={currentPage === totalPages}
        >
          <AiOutlineRight className="inline-block align-middle" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
