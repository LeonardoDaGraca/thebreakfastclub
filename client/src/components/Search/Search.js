import React from 'react';
import { CreateBtn } from '../Create/CreateBtn';

export const Search = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-wrap flex-row border-2 py-3 px-6  justify-evenly items-center w-1/2 m-0 m-auto">
                <input
                    className="w-64 p-2 border border-gray-400 rounded"
                    type="text"
                    placeholder="Search exams"
                />
                <button className="bg-blue-500 p-2 rounded text-white">
                    Search
                </button>
                <CreateBtn />
            </div>
        </div>
    );
};