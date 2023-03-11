import React from "react";
import { useState, useEffect } from "react";
import PatientList from "../PatientList/patientsList";
import PaginatePage from "../Pagination/Pagination";
import axios from "axios";

export const TestSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/everything");
        setData(res.data);
        setFilterd(res.data);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);
  //   useEffect(() => {
  //     fetch("http://localhost:9000/api/everything")
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((error) => console.error("Error:", error));
  //   }, []);

  useEffect(() => {
   const results = filtered.filter((res) =>
      res._id.toLowerCase().includes(query)
    );
    setData(results) 
  }, [query, filtered]);

  


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="md:flex flex-col items-center w-full p-6 hidden">
        <form action="" className="w-1/2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Exams..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <PatientList data={currentPost} />
        <PaginatePage
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setcurrentPage}
        />
      </div>
    </>
  );
};
