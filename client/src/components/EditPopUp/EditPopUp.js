import React from "react";
import { GrClose } from "react-icons/gr";

export const EditPopUp = ({open, onClose}) => {
  
    if (!open) return null;

    return (
        <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm lg:px-16 xl:px-16 2xl:px-20">
            <div className="bg-white rounded-xl shadow-lg p-2 pt-3 overflow-y-auto h-3/4 w-11/12 md:h-3/5 lg:h-3/5 lg:w-full  xl:h-2/3">
                <div className="flex items-center justify-end xl:p-2 2xl:p-6">
                    <button
                        onClick={onClose}
                        className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-4xl 2xl:font-bold 2xl:p-6"
                    >
                        <GrClose className=""  />
                     </button>
                </div>
                <div>
                    <h1>Hello World!!!!</h1>
                </div>
            </div>    
        </div>
    );
};

