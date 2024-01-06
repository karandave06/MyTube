import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

 
const Search = () => {
  return (
    <div>
      <form>
        <div className="relative max-w-full  flex items-center justify-between">
          <input
            placeholder="Search"
            className="p-1 px-5 w-full bg-transparent outline-none border border-gray-400
            rounded-l-full
            "
            type="text"
          />
          <div
            className="rounded-r-full cursor-pointer text-xl
 w-[10%] p-[0.40rem] flex items-center justify-center
 border-l-0 bg-white border border-gray-400 hover:bg-gray-100   text-black h-auto"
          >
            <CiSearch />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
