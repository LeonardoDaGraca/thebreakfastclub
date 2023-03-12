import React, { useState } from "react";

export const Search = () => {
    const [query, setQuery] = useState("");
    const exams = ["Exam 1", "Exam 2", "Exam 3", "Final Exam"];

    const filteredExams = exams.filter((exam) =>
        exam.toLowerCase().includes(query.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the search query, e.g. fetch data from API
    };

    return (
        <>
            <div className="md:flex justify-center w-full md:p-3 md:mt-3 xl:p-3 xl:mt-6 2xl:p-12 2xl:mt-6 hidden border-2 border-black">
                <form onSubmit={handleSubmit} className="w-1/2">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 2xl:text-6xl sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-3 pl-10 md:pl-5 text-sm md:text-base xl:text-xl 2xl:text-5xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Exams..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-1.5 bottom-1 md:bottom-1.5 xl:bottom-1.5 2xl:bottom-3 2xl:right-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:text-base md:px-2 md:py-1.5 xl:text-lg 2xl:px-4 2xl:py-2 2xl:text-4xl  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
