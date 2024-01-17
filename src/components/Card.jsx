/* eslint-disable react/prop-types */
import { Info } from "@mui/icons-material";
import noImage from "../../public/images/no-image.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import placeholder from "../../public/images/placeholder.png";

const Card = ({ id, video }) => {
  const [channel, Setchannel] = useState();
  const [imageLoad, setimageLoad] = useState(true);

  // useEffect(() => {
  //   setimageLoad(true);
  // }, []);
  console.log(imageLoad, 17);
  useEffect(() => {
    const fetchChannel = async () => {
      const res = axios.get(
        `${import.meta.env.VITE_SOME_KEY}/user/find/${video?.userId}`
      );
      Setchannel((await res).data);
    };
    fetchChannel();
  }, [video?.userId]);

  console.log(video?.imgUrl);
  return (
    <>
      <div className="relative flex w-full  max-w-[26rem] h-[21.5rem]  flex-col rounded-xl bg-white md:my-4 bg-clip-border text-gray-700  ">
        <Link to={`/video/${id}`}>
          <div
            className="relative overflow-hidden
         text-white cursor-pointer transition-all delay-200   
         rounded-xl hover:rounded-none 
          bg-blue-gray-500 bg-clip-border w-full h-[17rem] flex-[0.8]"
          >
            <img
              src={ imageLoad ? placeholder : video?.imgUrl}
              alt="ui/ux review check"
              className=" h-full w-full"
              onLoad={() => setimageLoad(false)}
            />
            {/* {imageLoad ? (
              <img
                src={placeholder}
                alt="ui/ux review check"
                className=" h-full w-full "
              />  
            ) : (
              <img
                src={video?.imgUrl}
                alt="ui/ux review check"
                className=" h-full w-full"
                onLoad={() => setimageLoad(false)}
              />
            )} */}
            {/* <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div> */}
          </div>
        </Link>

        <div className="flex justify-between w-full   p-2 py-0 flex-[0.2]">
          <div className="w-[10%] pt-2">
            <div className="text-center flex items-center  justify-center bg-black h-8 w-8 rounded-full">
              <img
                src={channel?.img ? channel?.img : noImage}
                alt="profile image"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col   h-[4.5rem]   w-[90%]">
            <p className="line-clamp-1">{video?.desc}</p>
            <p className="line-clamp-1">{channel?.name}</p>

            <div className="flex gap-1">
              <h1>{video?.videoViews} views </h1>
              <h1>{format(video?.createdAt)}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
