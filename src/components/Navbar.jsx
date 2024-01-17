import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/images/youtube-favicon.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import { CgProfile } from "react-icons/cg";
import { MdVideoCall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../Redux/SidebarSlice.js";
import { popState } from "../Redux/VideoPopup.js";
import { CiSearch } from "react-icons/ci";
import AvatarDropdown from "./AvatarDropdown.jsx";
import Upload from "./Upload.jsx";
import axios from "axios";

export const BeforeSign = () => {
  return (
    <>
      <Link to="/signin">
        <div
          className="w-auto px-2 p-1 text-center
           cursor-pointer hover:bg-gray-100
           flex items-center justify-center gap-3 rounded-full bg-transparent border border-gray-300 outline-none
           text-black
           "
        >
          <div className="text-blue-500 text-2xl">
            <CgProfile />
          </div>
          <h1 className="text-xl text-blue-500"> Sign in </h1>
        </div>
      </Link>
    </>
  );
};

const AftereSign = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(popState());
  };
  return (
    <>
      <div className="flex items-center gap-5 justify-center text-center">
        <div
          onClick={handleToggle}
          className="rounded-full p-2 w-10 h-10 flex items-center justify-center  bg-transparent hover:bg-gray-200 text-3xl cursor-pointer"
        >
          <MdVideoCall />
        </div>

        <AvatarDropdown />
      </div>
    </>
  );
};

const Navbar = () => {
  const token = useSelector((state) => state.user.current);
  const VideoPopup = useSelector((state) => state.popupVideo.Popupvalue);

  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleState());
  };

  return (
    <>
      <div
        className="w-full h-[2rem] py-8 sticky top-0 left-0
      hidden md:flex p-5 items-center justify-between z-[98] bg-white "
      >
        <div className="flex items-center gap-5 justify-start md:flex-[0.2] flex-[0.1]  py-1">
          <div
            onClick={handleToggle}
            className="transition-all delay-10 cursor-pointer text-2xl hover:bg-gray-200 p-2 rounded-full text-center  "
          >
            <RxHamburgerMenu />
          </div>
          <Link to={"/"}>
            <div className="  flex items-center justify-center gap-2">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full object-cover"
                  src={logo}
                  alt="Youtube_Logo"
                />
              </div>
              <h1 className="lg:text-[1.5rem] md:text-[1rem] text-[0.8rem] font-bold">
                My Tube
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center w-full flex-[0.5] justify-between px-2 py-1">
          <div className="w-full">
            <Search />
          </div>
        </div>
        <div className="  flex items-center gap-2 justify-center md:flex-[0.2] flex-[0.1]  px-2 py-1">
          {token != null ? <AftereSign /> : <BeforeSign />}
        </div>

        {VideoPopup && <Upload />}
      </div>

      <div
        className="w-full h-[2rem] py-8 sticky top-0 left-0
      flex md:hidden md:p-5 p-2 items-center justify-between z-[99] bg-white "
      >
        <div className="flex items-center gap-5  w-[33%]  md:py-1">
          <div
            onClick={handleToggle}
            className="transition-all delay-10 cursor-pointer md:text-2xl text-xl hover:bg-gray-200 p-2 rounded-full text-center  "
          >
            <RxHamburgerMenu />
          </div>
        </div>

        <div className="md:w-[33%] w-full    ">
          <Link to={"/"}>
            <div className=" flex items-center justify-center w-full  gap-1  ">
              <div className="md:w-8 md:h-8 sm:w-4 sm:h-5 w-5 h-5 ">
                <img
                  className="w-full h-full object-cover"
                  src={logo}
                  alt="Youtube_Logo"
                />
              </div>
              <h1 className="lg:text-[1.5rem] md:text-[1rem] text-[1.4rem]    font-bold">
                My Tube
              </h1>
            </div>
          </Link>
        </div>

        <div className="w-[33%] flex items-center gap-3 px-2 justify-end text-end  py-1">
          {/* <CiSearch className="text-xl cursor-pointer" onClick={toggleSearch} /> */}
          <AvatarDropdown />
        </div>
      </div>
    </>
  );
};

export default Navbar;
