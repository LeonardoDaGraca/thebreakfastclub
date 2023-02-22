import { useState } from "react";

export const Pagination = () => {
    
    return (
        <div className="border-2 flex justify-center mt-2 w-1/2 m-auto p-6">
            <div className="border-2 flex w-3/4 justify-center font-semibold space-x-3 text-lg">
              <button disabled={currentPage === 1} onClick={handlePrevious} className="page-btn">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              {pageNumbers.map((number) => (
                  <button key={number} onClick={() => setCurrentPage(number)} className="page-btn">
                    {number}
                  </button>
              ))}
              <button
                  disabled={currentPage === pageNumbers.length}
                  onClick={handleNext} className="page-btn">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
    )
}