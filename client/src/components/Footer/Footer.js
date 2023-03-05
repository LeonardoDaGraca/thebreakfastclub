import React from "react";

export const Footer = () => {
let date = new Date();
let year = date.getFullYear();

    return (
       
        <footer className="p-3 w-full  md:flex md:items-center md:justify-center md:p-4 bg-gray-900 fixed bottom-0">
            <span className=" text-zinc-50 text-center text-xs md:text-sm"> © {year} All Rights Reserved.
            </span>  
        </footer>

    )
}