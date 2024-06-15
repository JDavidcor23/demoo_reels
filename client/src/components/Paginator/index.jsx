import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { usePaginator } from "../../hooks";

export const Paginator = ({ totalPages = 4, currentPage, onPageChange }) => {
  const { page, handlePrevious, handleNext, handlePageClick, getVisiblePages } =
    usePaginator({ totalPages, currentPage, onPageChange });

  return (
    <div className="flex justify-center mt-8">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={handlePrevious}
          className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-rinset boder-y-[#e97d05] border-x-[#e97d05] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 border text-[#e97d05] border-solid border-[#e97d05] ${
            page === 1 && "cursor-not-allowed opacity-50"
          }`}
          disabled={page === 1}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {getVisiblePages().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            aria-current={pageNumber === page ? "page" : undefined}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
              pageNumber === page
                ? "bg-[#e97d05] text-white"
                : "text-[#e97d05] border-[1px] ring-inset border-y-[#e97d05] border-x-[#e97d05] hover:bg-gray-50"
            } focus:z-20 focus:outline-offset-0`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={handleNext}
          className={`relative inline-flex items-center rounded-r-md px-2 py-2 ring-rinset boder-y-[#e97d05] border-x-[#e97d05] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 border text-[#e97d05] border-solid border-[#e97d05] ${
            page === totalPages && "cursor-not-allowed opacity-50"
          }`}
          disabled={page === totalPages}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};
