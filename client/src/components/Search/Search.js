import React from 'react';
import { CreateButton } from '../CreateButton/CreateButton';

export const Search = () => {
    return (
        <div className="flex flex-wrap flex-row border-2 py-3 px-6 flex justify-evenly items-center w-1/2 m-0 m-auto">
            <input
                className="w-64 p-2 border border-gray-400 rounded"
                type="text"
                placeholder="Search exams"
            />
            <button className="bg-blue-500 p-2 rounded text-white">
                Search
            </button>
            <CreateButton />
        </div>
    );
};