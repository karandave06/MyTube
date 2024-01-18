import { Popover, Transition } from "@headlessui/react";
// import { avatarImgs } from "contains/fakeData";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/UserSlice";
import { Link } from "react-router-dom";
import nomimage from "../../public/images/no-image.jpg";

import { toast, ToastContainer } from "react-toastify";
export default function AvatarDropdown() {
  const data = useSelector((state) => state.user.current);

  const dispatch = useDispatch();
  const handleLogout = () => {
    toast.success(`Logout Successfull !`, {
      position: "top-right",
    });
    close();
    dispatch(logout());
    //  window.location.reload();
  };

  console.log(data?.img);

  return (
    <div className="AvatarDropdown ">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
            >
              <>
                <svg
                  className=" w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen md:max-w-[260px] max-w-[200px] px-4 mt-3.5 md:-right-10 -right-5 sm:right- sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className={`relative md:grid grid-cols-1 flex flex-col ${
                      data ? "gap-5" : "gap-0"
                    } items-start
                     justify-center 
                   bg-white dark:bg-neutral-800 md:py-7 md:gap-4  md:px-6 p-4  `}
                  >
                    {data ? (
                      <>
                        <div className="flex   items-center gap-3">
                          <div className="w-8 h-8">
                            {" "}
                            <img
                              className="w-full h-full object-cover"
                              src={data?.img ? data?.img : nomimage}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <h4 className="font-semibold">
                              {data?.other?.name}
                            </h4>
                          </div>
                        </div>

                        <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                      </>
                    ) : (
                      <>
                        <Link
                          to={"/signin"}
                          className="w-full flex h-full items-center justify-center"
                        >
                          <button className="p-1 w-full rounded-lg bg-gray-300 text-black">
                            SignIn
                          </button>
                        </Link>
                      </>
                    )}

                    {/* ------------------ 1 --------------------- */}
                    {data && (
                      <Link
                        to={"/account"}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        onClick={() => close()}
                      >
                        <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium ">{"My Account"}</p>
                        </div>
                      </Link>
                    )}

                    <div className="w-ful" />

                    {/* ------------------ 2 --------------------- */}
                    {data && (
                      <>
                        <Link
                          to={"/#"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          onClick={() => handleLogout()}
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 12H3.62"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium ">{"Log out"}</p>
                          </div>
                        </Link>
                        <ToastContainer />
                      </>
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
