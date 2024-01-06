/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, video }) => {
  // console.log(video?.title)
  return (
    <>
      <div className="relative flex w-full  max-w-[26rem] h-[20rem]  flex-col rounded-xl bg-white md:my-7 bg-clip-border text-gray-700  ">
        <Link to={`video/${id}`}>
          <div
            className="relative overflow-hidden
         text-white cursor-pointer transition-all delay-200   
         rounded-xl hover:rounded-none 
          bg-blue-gray-500 bg-clip-border w-full h-[17rem] flex-[0.8]"
          >
            <img
              src={video?.imgUrl}
              alt="ui/ux review check"
              className=" h-full w-full "
            />
            {/* <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div> */}
          </div>
        </Link>

        <div className="flex gap-2 justify-between w-full h-[3rem] p-2 flex-[0.2]">
          <div className="w-[20%]">
            <div className="text-center flex items-center justify-center bg-black h-[2rem] w-[2rem] rounded-full">
              <h1>k</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-full w-[80%]">
            <p>{video?.title}</p>
            <p>Chennal Name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
