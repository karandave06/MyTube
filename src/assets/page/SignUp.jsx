import React from "react";
import { useForm } from "react-hook-form";
import google from "../../../public/images/google.png";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // data.preventDefault();

    axios
      .post(`${import.meta.env.VITE_SOME_KEY}/auth/signup`, {
        email: data.email,
        name: data.name,
        password: data.password,
      })
      .then((res) => {
        if (res.status == 200) {
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center md:p-0 p-5">
        <div
          className=" bg-white md:h-[31rem]  md:w-[30rem]  h-[32rem] w-[28rem]
          border-[1px] border-gray-400 justify-center rounded-md
          flex flex-col gap-5
        md:p-3 p-5
        "
        >
          <div className="w-full">
            <h1>
              SignUp With Your{" "}
              <span className="px-2 text-red-500 font-bold">MyTube</span>{" "}
              Account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* input field 1 */}
            <div className="relative flex items-center justify-center">
              <input
                type="text"
                id="Name"
                {...register("name")}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm
                 text-gray-900 bg-transparent border-[1px] border-gray-600
                  rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600
                   dark:focus:border-blue-500 focus:outline-none focus:ring-0
                    focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="Name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
         peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto"
              >
                Name
              </label>
            </div>

            {/* input field 3 */}

            <div className="relative flex items-center justify-center">
              <input
                type="text"
                {...register("email")}
                id="Email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm
                 text-gray-900 bg-transparent border-[1px] border-gray-600
                  rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600
                   dark:focus:border-blue-500 focus:outline-none focus:ring-0
                    focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="Email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
         peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>

            {/* inpout field 3 */}

            <div className="relative flex items-center justify-center">
              <input
                type="text"
                {...register("password")}
                id="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm
                 text-gray-900 bg-transparent border-[1px] border-gray-600
                  rounded-lg border-1  appearance-none dark:text-white dark:border-gray-600
                   dark:focus:border-blue-500 focus:outline-none focus:ring-0
                    focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
         peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 
         rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="p-2 mt-5 bg-blue-500 w-[5rem]
text-white rounded-sm cursor-pointer hover:bg-transparent hover:text-black
border-[1px] border-transparent hover:border-black
"
              >
                Next
              </button>
            </div>
            <div className="text-center w-full">OR</div>
          </form>
          <div className="w-full flex justify-center">
            <button className="flex p-2 rounded-full hover:rounded-none gap-2 items-center justify-center border-[1px] border-gray-400 ">
              <div className="w-6 h-6">
                <img
                  src={google}
                  className="w-full h-full object-cover "
                  alt="google"
                />
              </div>
              <h1>Login With Google</h1>
            </button>
          </div>

          <div className="w-full flex justify-center gap-1">
            <h1>Yout already have an account </h1>
            <Link to="/SignIn">
              <h1>
                <span className="text-blue-700">SignIn</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
