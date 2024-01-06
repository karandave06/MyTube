import React from "react";

const SideVideo = ({ image,videoTitle,ChennalName }) => {
  return (
    <>
      <div className="w-full md:h-[7rem] h-[5rem] flex gap-4 md:rounded-xl rounded-sm ">
        <div className="md:w-[30%] w-[40%]  rounded-xl">
          <img
            src={image}
            className="w-full md:rounded-md rounded-sm h-full object-cover"
            alt="this is an image"
          />
        </div> 
        <div className="w-[70%] flex flex-col justify-between md:pb-4">
          <h1 className="md:line-clamp-2 line-clamp-1">
           {videoTitle}
          </h1>
          <h1 className="line-clamp-1">{ChennalName}</h1>
          <h1 className="line-clamp-1">time</h1>
        </div>
      </div>
    </>
  );
};

export default SideVideo;
