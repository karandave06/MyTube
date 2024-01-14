import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate()
  const handleChange = (e) => {setQ(e)};

  return (
    <div>
      <form>
        <div className="relative max-w-full  flex items-center justify-between">
          <input
            onChange={(e) => handleChange(e.target.value)}
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
            <CiSearch onClick={() => {navigate(`/search?q=${q}`)}}/>
          </div>
        </div>
      </form>

      <div>{}</div>
    </div>
  );
};

export default Search;
