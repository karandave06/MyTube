import Card from "../../components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import img from "../../../public/images/no-data-found.jpeg";

const Search = () => {
  const quary = useLocation().search;

  console.log(quary);

  const [videoData, Setvideos] = useState("");

  useEffect(() => {
    const fatchVideos = async () => {
      const res = axios.get(`${import.meta.env.VITE_SOME_KEY}/video/search${quary}`);
      Setvideos((await res).data);
    };
    fatchVideos();
  }, [quary]);
  console.log(videoData.length, 22);
  return (
    <>
      <Navbar />
      <Sidebar />

      {videoData.length > 0 ? (
        <div
          className="md:w-[calc(100%-4rem)] w-full grid 
       py-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-8 p-4 ml-auto  h-full"
        >
          {videoData?.map &&
            videoData?.map((index) => (
              <Card id={index._id} key={index._id} video={index} />
            ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <img
              className="md:w-[30rem] md:h-[30rem] object-cover"
              src={img}
              alt="no-data-found"
            />
            <h1 className="text-2xl font-bold">No Search Result Found</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
