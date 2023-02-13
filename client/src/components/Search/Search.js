import React from 'react';

export const Search = () => {
    return (
        <div className="container m-auto mt-6">
             <div className="flex flex-wrap flex-row  justify-around items-center m-auto max-w-sm">
                <input
                    className="w-64 p-2 border border-gray-400 rounded"
                    type="text"
                    placeholder="Search exams"
                />
                <button className="bg-blue-500 p-2 rounded text-white">
                    Search
                </button>
            </div>
        </div>
       
     
    );
};