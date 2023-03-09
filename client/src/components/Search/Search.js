import React from "react";
import { useState, useEffect } from "react";
import PatientList from "../PatientList/patientsList";
import PaginatePage from "../Pagination/Pagination";
import axios from "axios";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFilterd] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams"
        );
        console.log(res.data.exams);
        setData(res.data.exams);
        setFilterd(res.data.exams);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = filtered.filter((res) =>
      res.patientId.toLowerCase().includes(query)
    );
    setData(results);
  }, [query, filtered]);
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="md:flex flex-col items-center w-full p-6 hidden">
        <form action="" className="w-1/2">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              onChange={(e) => setQuery(e.target.value)}
              class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Exams..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
