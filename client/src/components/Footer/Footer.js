import React from "react";
import {GrTwitter, GrInstagram, GrFacebook} from "react-icons/gr"

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer
      id="footer"
      className=" bg-transparent  w-full flex items-center justify-between p-4 2xl:p-4 2xl:pt-6"
    >
      <div className="  flex w-full  justify-around">
        <div className="  flex items-center w-3/4 ">
          <span
            className="font-bold text-[#ffffff] text-center md:text-start text-xs md:text-base lg:text-base xl:text-xl 2xl:text-base"
          >
            © {year} All Rights Reserved.
          </span>
        </div>
        {/* <div className=" flex items-center w-1/2 p-2  text-[#ffffff]  md:text-start text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-base">
          <h3 className="font-bold mr-1 ">Contributors:</h3>
          <div className="flex ">
            <span className="mr-2 font-medium ">Front-End:</span>
           
            <p className="">Danielle, Brittany & Sauel</p>
          </div>
          <div className="flex ">
            <span className="mx-2 font-medium">Back-End:</span>
           
            <p className="">Juan, Pedro & Leo</p>
          </div>
        </div> */}
        <div className=" flex items-center justify-around w-1/4 md:w-56 text-lg md:text-2xl lg:text-3xl ">
            <GrInstagram className="rounded-md text-[#ffffff] bg-[#87D2E2] hover:cursor-pointer" />
            <GrTwitter className="rounded-md border text-[#87D2E2] bg-[#ffffff] hover:cursor-pointer" />
            <GrFacebook className="rounded-md border text-[#ffffff] bg-[#87D2E2] hover:cursor-pointer" />
         </div>
      </div>
      
    </footer>
  );
};
