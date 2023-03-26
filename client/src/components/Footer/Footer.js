import React from "react";
import { GrTwitter, GrInstagram, GrFacebook } from "react-icons/gr";

export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer
      id="footer"
      className="  bg-[#060957] w-full flex items-center justify-between py-2 md:py-3"
    >
      <div className="flex w-full justify-start pl-8">
        <div className="  flex items-center w-3/4 ">
          <span className="font-bold text-[#ffffff] text-center md:text-start text-xs md:text-sm">
            © {year} All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
