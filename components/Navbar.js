import React from "react";
import request from "../utils/request";
import Router from "next/router";

const Navbar = () => {
  return (
    <>
      <nav className="relative">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden">
          {Object.entries(request).map(([key, { title, url }]) => (
            <h2
              onClick={() => Router.push(`/?genre=${key}`)}
              key={key}
              className="last:pr-24 cursor-pointer transition transform duration-100 hover:scale-125 hover:text-white active:text-green-400"
            >
              {title}
            </h2>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-[100px]" />
      </nav>
    </>
  );
};

export default Navbar;
