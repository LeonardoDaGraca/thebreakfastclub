import React from "react";

export const Footer = () => {
let date = new Date();
let year = date.getFullYear();

    return (
       
        <footer className="bg-gray-900 fixed bottom-0 w-full flex items-center justify-center p-3  xl:p-4 2xl:p-10">
            <span className=" text-zinc-50 text-center text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-4xl"> © {year} All Rights Reserved.
            </span>  
        </footer>

    )
}