import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { CardData } from "../Cards/CardData";

export const Search2 = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/everything");
        setData(res.data);
        setFiltered(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNumRows(7);
        setNumCols(1);
        setPostsPerPage(7);
      } else if (window.innerWidth <= 768) {
        setNumRows(7);
        setNumCols(2);
        setPostsPerPage(14);
      } else {
        setNumRows(4);
        setNumCols(4);
        setPostsPerPage(16);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filteredData = filtered.filter((res) =>
      res._id.toLowerCase().includes(query)
    );
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = filteredData.slice(firstPostIndex, lastPostIndex);
    setDisplayedData(currentPost);
  }, [query, filtered, currentPage, postsPerPage]);

  return (
    <>
      <div className="flex flex-col relative w-full items-center md:py-10 lg:py-14 xl:py-16 2xl:py-24">
        <form action="" className="flex flex-col justify-center w-3/4 md:w-1/2">
          <label
            htmlFor="default-search"
            className="text-gray-900 sr-only dark:text-white font-medium 2xl:text-2xl"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full rounded-lg md:pl-4 md:text-lg lg:py-1 lg:pl-5 lg:text-xl xl:pl-6 xl:py-2 xl:text-2xl 2xl:pl-12 2xl:py-3 2xl:text-3xl text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Exams..."
              required
            />
            {/* <button
                type="submit"
                className="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
          </div>
        </form>
        <CardData data={displayedData} />
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Search2;
