import { useForm } from "react-hook-form";
import google from "../../../public/images/google.png";
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuscess, loginFailure } from "../../Redux/UserSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../../src/firebase.js";
import { signInWithPopup, signInWithRedirect } from "firebase/auth"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

const Signin = () => {
  // const navigate = useNavigate();
 



  // google auth


  const singWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(loginStart());
        axios
          .post(`${import.meta.env.VITE_SOME_KEY}/auth/google`, {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuscess(res.data));
            navigate("/");
          })
          .catch((error) => {
          
           console.log(error.response.data,1)
          });
      })
      .catch((error) => {
       
        dispatch(loginFailure());
        console.log(error.response.data,2)
      });
  };

 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmint = async (data) => {
    dispatch(loginStart());
    axios
      .post(`${import.meta.env.VITE_SOME_KEY}/auth/signin`, {
        email: data.email,
        name: data.name,
        password: data.password,
      }).then(async (res) => {
        if (res.status == 200) {
           toast.success(`Login Successfull !`, {
            position: "top-right"
          }); 
          dispatch(loginSuscess(res.data)); 
          await navigate("/");
        }
      })
      .catch((error) => {
        toast.error(`${error && error?.response?.data} !`, {
          position: "top-right"
        });
       
        dispatch(loginFailure(error));
      });
  };
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center md:p-0 p-5">
        <div
          className=" bg-white md:h-[28rem]  md:w-[30rem] h-[29rem] w-[28rem]
          
          border-[1px] border-gray-400 justify-center rounded-md
          flex flex-col gap-5
        p-3
        "
        >
          <div className="w-full">
            <h1>
              SignIn With Your{" "}
              <span className="px-2 text-red-500 font-bold">MyTube</span>{" "}
              Account
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmint)}
            className="flex flex-col gap-5 "
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

            {/* inpout field 2 */}

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
              <ToastContainer />
            </div>
            <div className="text-center w-full">OR</div>
          </form>
          <div className="w-full flex justify-center">
            <button
              onClick={singWithGoogle}
              className="flex p-2 rounded-full hover:rounded-none gap-2 items-center justify-center border-[1px] border-gray-400 "
            >
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
            <h1>Yout don't have an account </h1>
            <Link to="/SignUp">
              <h1>
                <span className="text-blue-700">SignUp</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
