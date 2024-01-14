import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const MainView = () => {
  const [videos, Setvideos] = useState();
  useEffect(() => {
    const fatchVideos = async () => {
      const res = axios.get(`${import.meta.env.VITE_SOME_KEY}/video/random`);
      Setvideos((await res).data);
    };
    fatchVideos();
  }, []);

  return (
    <>
      {/* w-[calc(100%-16rem)] */}
      <div
        className="md:w-[calc(100%-4rem)] w-full grid 
       py-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-8 p-4 ml-auto  h-full"
      >
        {videos?.map((index) => (
          <Card id={index._id} key={index._id} video={index} />
        ))}
      </div>
    </>
  );
};

export default MainView;
