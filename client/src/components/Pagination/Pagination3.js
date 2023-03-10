import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

export const Pagination3 = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPgae, setDataPerpage] = useState(4);

    useEffect(() => {
        fetch("http://localhost:9000/api/everything")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error:", error));
    }, []);

    // Get current Data
    const indexOfLastPage = currentPage * dataPerPgae;
    const indexOfFirstPage = indexOfLastPage - dataPerPgae;
    const currentData = data.slice(indexOfFirstPage, indexOfLastPage);
    // console.log(indexOfFirstPage, indexOfLastPage, currentData);

    // Pagination
    const pageNumbers = [];

    // Let numOfTotalData = data.length
    for (let i = 1; i <= Math.ceil(data.length / dataPerPgae); i++)
        pageNumbers.push(i);
    // console.log(pageNumbers)

    return (
        <>
            {data.length !== 0 ? ( //data is preset then show this
                <div className="flex justify-center mx-auto py-2 mb-20  md:px-40  ">
                    {/* show the post here */}
                    {currentData.map((item, idx) => (
                        <div key={idx}>
                            {item.id} {item.title}
                        </div>
                    ))}

                    {/* previous and next button */}
                    <div className="flex justify-between  mt-10 px-3 w-full">
                        <button
                            className=" rounded-xl px-1 py-1 bg-blue-900 text-white focus:ring hover:bg-blue-800 md:p-2 md:text-xs lg:p-2 lg:text-lg xl:p-4 xl:text-xl 2xl:p-6 2xl:text-5xl"
                            onClick={() => {
                                if (currentPage > 1) {
                                    setCurrentPage(currentPage - 1);
                                }
                            }}
                        >
                            <AiOutlineLeft/>
                        </button>
                        {/* pagination stuff */}
                        <div className="flex justify-center w-96 ">
                            {pageNumbers.map((PageNumber) => (
                                <div
                                    key={PageNumber}
                                    onClick={() => {
                                        setCurrentPage(PageNumber);
                                    }}
                                    className={
                                        PageNumber === currentPage
                                            ? " rounded-xl p-1 px-1 text-white bg-blue-800 focus:ring hover:bg-blue-800  cursor-pointer md:mx-1 md:p-2 md:text-xs lg:mx-1 lg:p-2 lg:text-lg xl:p-4  xl:text-xl xl:mx-2 2xl:p-6 2xl:text-5xl 2xl:mx-4" //this css when selcted
                                            : "rounded-xl p-1 px-1 text-white bg-blue-900 focus:ring hover:bg-blue-800  cursor-pointer md:mx-1 md:p-2 md:text-xs lg:mx-1 lg:p-2 lg:text-lg xl:p-4  xl:text-xl xl:mx-2 2xl:p-6 2xl:text-5xl 2xl:mx-4"
                                    }
                                >
                                    {PageNumber}
                                </div>
                            ))}
                        </div>
                        <button
                            className="rounded-xl px-1 py-1 bg-blue-900 text-white focus:ring hover:bg-blue-800 md:p-2 md:text-xs lg:p-2 lg:text-lg xl:p-4 xl:text-xl 2xl:p-6 2xl:text-5xl"
                            onClick={() => {
                                if (currentPage < pageNumbers.length) {
                                    setCurrentPage(currentPage + 1);
                                }
                            }}
                        >
                            <AiOutlineRight/>
                        </button>
                    </div>
                </div>
            ) : (
                <p className="p-40 text-8xl font-bold">loading ....</p> //if data hasn't come yet show this
            )}
        </>
    );
};