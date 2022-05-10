import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <>
      <div className="flex flex-col cursor-pointer items-center w-12 sm:w-20 hover:text-white group">
        <Icon className="h-7 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 transition duration-200 ease-in transform tracking-widest">
          {title}
        </p>
      </div>
    </>
  );
};

export default HeaderItem;
