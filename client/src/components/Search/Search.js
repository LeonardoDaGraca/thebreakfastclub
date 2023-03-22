import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { CardData } from "../Cards/CardData";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [numRows, setNumRows] = useState(4);
  const [numCols, setNumCols] = useState(4);
  const [displayedData, setDisplayedData] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

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
        setNumRows(5);
        setNumCols(2);
        setPostsPerPage(10);
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

  const cardDataProps = {
    data: displayedData,
    numRows: numRows,
    numCols: numCols,
  };

  return (
    <>
      <div className="grid items-center md:mx-8 ">
        <form
          action=""
          className="flex flex-col justify-center w-3/4 md:w-1/2 mx-auto  pt-8 "
        >
          <label
            htmlFor="default-search"
            className="text-[#060957] sr-only dark:text-white font-medium 2xl:text-2xl"
          >
            Search
          </label>
          <div className="relative shadow-lg">
            <input
              type="search"
              id="default-search"
              onChange={(e) => setQuery(e.target.value)}
              className=" block w-full rounded-md text-[#060957] border border-[#060957]  bg-[#FFFFFF] focus:outline-none pl-3 py-1 text-sm md:py-1.5 md:pl-4 md:text-base 2xl:pl-6 2xl:py-2 2xl:text-xl  "
              placeholder="Search Exams..."
              required
            />
          </div>
        </form>
        <CardData
          data={displayedData}
          selectedPatientId={selectedPatientId}
          setSelectedPatientId={setSelectedPatientId}
        />
        {!selectedPatientId && (
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};
