import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { toggleState } from "../Redux/action.js";
import { toggleState } from "../Redux/SidebarSlice.js";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../public/images/youtube-favicon.png";

const Sidebar = () => {
  // const token = localStorage.getItem("token");
  const token = useSelector((state) => state.user.current);
  const dispatch = useDispatch();

  const handleToggles = () => {
    dispatch(toggleState());
  };

  const DrawerMenue = [
    {
      path: "/",
      icon: <IoIosHome />,
      name: "Home",
    },
    {
      path: "/explore",
      icon: <MdExplore />,
      name: "Explore",
    },
    {
      path: "/suscription",
      icon: <MdSubscriptions className="text-black" />,
      name: "Suscription",
    },
  ];

  const Menue = [
    {
      path: "/",
      icon: <IoIosHome />,
      name: "Home",
    },
    {
      path: "/explore",
      icon: <MdExplore />,
      name: "Explore",
    },
    {
      path: "/suscription",
      icon: <MdSubscriptions className="text-black" />,
      name: "Suscription",
    },
  ];

  const isToggled = useSelector((state) => state.sidebar.value);

  const SidebarTitle = () => {
    return (
      <>
        <div className="flex gap-4">
          <RxHamburgerMenu className="font-bolder text-[2.2rem] text-black hover:bg-gray-200 text-centers p-[0.5rem] rounded-full" />
        </div>
      </>
    );
  };

  return (
    <>
      <Drawer
        open={isToggled}
        closable={true}
        closeIcon={<SidebarTitle />}
        title={
          <>
            <div className="flex items-center  gap-2">
              <div className="w-7 h-7">
                <img src={logo} className="w-full h-full object-cover" alt="" />
              </div>
              <h1 className="text-xl">My Tube</h1>
            </div>
          </>
        }
        maskClosable={true}
        onClose={() => {
          handleToggles();
        }}
        placement="left"
        width={"16rem"}
      >
        {/* hover:overflow-y-scroll overflow-y-hidden overflow-x-hidden */}
        <div className="  flex flex-col gap-5 w-[12rem]  ">
          <div className=" flex flex-col gap-5 w-[12rem]   ">
            {DrawerMenue.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                onClick={() => {
                  handleToggles();
                }}
                className={" hover:bg-gray-200 rounded-md"}
              >
                <div className="flex items-center justify-start p-2 gap-10">
                  <div className="text-xl">{item.icon}</div>
                  <div className="text-xl">
                    <h1>{item.name}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Border />

          {/* sign part */}

          {!token && (
            <div className=" flex flex-col gap-5 w-[12rem]   ">
              <div>
                <h1 className="text-gray-500">
                  Sign in to like videos, comment, and subscribe.
                </h1>
              </div>
              <div className="w-[8rem]">
                <Link to="/signin">
                  <div
                    className="w-auto p-1 text-center
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
              </div>
            </div>
          )}
        </div>
      </Drawer>

      <div className="fixed md:flex flex-col w-[4rem] hidden  py-5 px-5   h-full ">
        <div className=" flex flex-col gap-5 items-center w-8 h-8 rounded-full ">
          {Menue.map((item) => (
            <Link to={item.path} key={item.name}>
              <div className="flex items-center   justify-start p-2 hover:bg-gray-200  rounded-full">
                <div className="text-2xl">{item.icon}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* border part */}
      </div>
    </>
  );
};

const Border = () => {
  return (
    <div className=" flex flex-col items-center justify-center   gap-5 w-[12rem] ">
      <div className="border-t-2   border-gray-300 h-2 w-full text-white ">
        -
      </div>
    </div>
  );
};

export default Sidebar;
