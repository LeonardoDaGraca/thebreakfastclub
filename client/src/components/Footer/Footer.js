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
      <div className="flex w-full justify-start pl-8">
        <div className="  flex items-center w-3/4 ">
          <span
            className="font-bold text-[#060957] text-center md:text-start text-xs md:text-base lg:text-base xl:text-xl 2xl:text-base"
          >
            © {year} All Rights Reserved.
          </span>
        </div>
      </div> 
    </footer>
  );
};
