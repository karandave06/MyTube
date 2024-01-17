import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import SideVideo from "./SideVideo";

const Recomandation = ({ tags }) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios
        .get(`${import.meta.env.VITE_SOME_KEY}/video/tags?tags=${tags}`)
        .then((res) => {
          setVideo(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchVideo();
  }, [tags]);

  return (
    <div className="flex gap-3 flex-col">
      {video &&
        video?.map((data) => (
          <SideVideo
            key={data?.id}
            image={data?.imgUrl}
            videoTitle={data?.title}
            ChennalName={"Chennal name is going to hear"}
            time={data?.createdAt}
          />
        ))}
    </div>
  );
};

export default Recomandation;
