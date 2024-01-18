import axios from "axios";
import Card from "../../components/Card";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import noVideo from "../../../public/images/novideo.png";

const Suscription = () => {
  const [video, setVideo] = useState([]);
  const current = useSelector((state) => state.user.current);

  console.log(current?.other?._id);
  useEffect(() => {
    axios
      .post(`${import.meta.env.VITE_SOME_KEY}/video/sub`, {
        body: current?.other?._id,
      })
      .then((res) => {
        setVideo(res.data);
      });
  }, []);

  console.log(video.length,22);
  return (
    <>
      {video.length > 0 ? (
        <div className="md:w-[calc(100%-4rem)] w-full grid  py-5  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-4 ml-auto  h-full">
          {video &&
            video.map((res) => <Card key={res._id} video={res} id={res._id} />)}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="md:w-[30rem] md:h-[25rem] w-[15rem] h-[15rem]">
            <img src={noVideo} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="md:text-2xl text-md font-bold">Please Suscribe..</h1>
        </div>
      )}
    </>
  );
};

export default Suscription;
