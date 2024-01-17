import React from "react";
import { Player } from "video-react";
import video from "../../public/vido/demo_video.mp4";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import image from "../../public/images/youtubeImage.avif";
import SideVideo from "./SideVideo";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchSuscess, like, dislike } from "../Redux/VideoSlice";
import { suscribPtion } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxAvatar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import ReactPlayer from "react-player";
import { Media, Video } from "@vidstack/player-react";
import Recomandation from "./Recomandation";

const MainVideoview = () => {
  const { register, handleSubmit, resetField } = useForm();
  const currentVideo = useSelector((state) => state.video.currentVideo);
  const onSubmit = async () => {
    await axios
      .post(`${import.meta.env.VITE_SOME_KEY}/comment`, {
        desc: comment,
        videoId: currentVideo?._id,
        userId: currentUser?.other._id,
      })
      .then((res) => {
        setcomment(""), resetField("comment");
        setshowComment(true);
      })
      .catch((err) => console.log(err));

    await axios
      .get(`${import.meta.env.VITE_SOME_KEY}/comment/${currentVideo?._id}`)
      .then((res) => {
        setdescComment(res.data);
      })
      .catch((err) => console.log(err));
  };

  const currentUser = useSelector((state) => state.user.current);
  const [commentLine, setcommentLine] = useState(false);
  const [showSubmint, setshowSubmint] = useState(false);
  const [showComment, setshowComment] = useState(false);
  const [comment, setcomment] = useState("");
  const [descComment, setdescComment] = useState([]);
  const [channel, setchannel] = useState({});
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  const handleLike = async () => {
    await axios.put(
      `${import.meta.env.VITE_SOME_KEY}/user/like2/${currentVideo?._id}`,
      {
        token: currentUser?.other._id,
      }
    );
    dispatch(like(currentUser?.other._id));
  };

  const handleDislike = async () => {
    await axios.put(
      `${import.meta.env.VITE_SOME_KEY}/user/dislike2/${currentVideo?._id}`,
      {
        token: currentUser?.other._id,
      }
    );
    dispatch(dislike(currentUser?.other._id));
  };

  const handleSuscribe = async () => {
    currentUser.suscribedUsers?.includes(channel._id)
      ? await axios.put(
          `${import.meta.env.VITE_SOME_KEY}/user/unsub/${channel._id}`,
          {
            token: currentUser?.other._id,
          }
        )
      : await axios.put(
          `${import.meta.env.VITE_SOME_KEY}/user/sub/${channel._id}`,
          {
            token: currentUser?.other._id,
          }
        );
    dispatch(suscribPtion(channel._id));
  };

  const [videoUrl, setvideoUrl] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const videoRes = await axios.get(
          `${import.meta.env.VITE_SOME_KEY}/video/find/${path}`
        );
        console.log(videoRes.data);
        const userRes = await axios.get(
          `${import.meta.env.VITE_SOME_KEY}/user/find/${videoRes.data.userId}`
        );

        setchannel(userRes.data);
        dispatch(fetchSuscess(videoRes.data));
        setvideoUrl(videoRes.data.videoUrl);
        setimageUrl(videoRes.data.imgUrl);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SOME_KEY}/comment/${currentVideo?._id}`)
      .then((res) => {
        setdescComment(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentVideo?._id]);

  console.log(imageUrl);
  return (
    <>
      <div className="md:w-[calc(100%-4rem)] w-full grid  py-5 md:grid-cols-2 grid-cols-1  gap-5 p-4 ml-auto  h-full">
        <div className="h-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            {/* <Player autoPlay>
              <source src={videoUrl} />
            </Player> */}

            <Media>
              <Video
                loading="visible"
                poster={`${
                  imageUrl
                    ? imageUrl
                    : "https://static.vecteezy.com/system/resources/thumbnails/004/844/749/original/icon-loading-round-gradient-angle-loop-out-animation-with-dark-background-gradient-line-style-for-game-animation-and-others-free-video.jpg"
                }`}
                controls
                preload="true"
              >
                <video
                  loading="visible"
                  poster={`${
                    imageUrl
                      ? imageUrl
                      : "https://static.vecteezy.com/system/resources/thumbnails/004/844/749/original/icon-loading-round-gradient-angle-loop-out-animation-with-dark-background-gradient-line-style-for-game-animation-and-others-free-video.jpg"
                  }`}
                  src={videoUrl}
                  // src={video}
                  autoPlay
                  preload="none"
                  data-video="0"
                  controls
                />
              </Video>
            </Media>

            <div className="flex flex-col md:gap-3 gap-5 items-start">
              <div className="flex  gap-2">
                <div>{currentVideo?.title}</div>
              </div>

              <div className="flex bg-gray-200 p-2 rounded-md  gap-2">
                <div className="w-full">{currentVideo?.desc}</div>
              </div>

              <div className="flex md:flex-row flex-col md:gap-4 gap-8 w-full">
                <div className="flex items-center gap-2 md:w-[50%]">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 bg-black flex rounded-full items-center justify-center">
                      <h1 className="text-center text-white uppercase">
                        {" "}
                        {channel.name ? channel.name[0] : " "}{" "}
                      </h1>
                    </div>
                    <h1 className="text-xl">{channel.name} </h1>
                  </div>
                  <div>{currentVideo?.videoViews}</div>
                </div>

                <div className="flex gap-2 md:w-[50%]">
                  <button
                    onClick={handleLike}
                    className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-200 text-xl"
                  >
                    {currentVideo?.likes?.includes(currentUser?.other._id) ? (
                      <AiFillLike />
                    ) : (
                      <AiOutlineLike />
                    )}
                    {/* <SlLike /> */}
                  </button>
                  <button
                    onClick={handleDislike}
                    className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-200 text-xl"
                  >
                    {currentVideo?.dislike?.includes(currentUser?.other._id) ? (
                      <AiFillDislike />
                    ) : (
                      <AiOutlineDislike />
                    )}
                    {/* <SlDislike /> */}
                  </button>
                  <button
                    onClick={handleSuscribe}
                    className="w-24 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    {currentUser?.suscribedUsers?.includes(channel._id)
                      ? "Suscribed"
                      : "Suscibe"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  min-h-[5rem] flex flex-col gap-10">
            {/* comment input */}
            <div className="w-full flex flex-col gap-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={`
                 ${commentLine ? "border-b-black transition-all  " : " "}
                 w-full p-2  border-b-2 transition-opacity delay-100  border-gray-200 
               outline-none   `}
                  type="text"
                  autoComplete="off"
                  onKeyUp={(e) => {
                    setcomment(e.target.value);
                  }}
                  // onChange={(e) => {handleChange(e)}}
                  {...register("comment")}
                  placeholder="Add Comment"
                  onFocus={() => {
                    setcommentLine(true), setshowSubmint(true);
                  }}
                  onBlur={() => {
                    setcommentLine(false);
                  }}
                />

                {showSubmint && (
                  <div className="w-full mt-[1.6rem] flex gap-4 items-end justify-end">
                    <button
                      onClick={() => {
                        resetField("comment"),
                          setshowSubmint(false),
                          setcommentLine(false),
                          setcomment("");
                      }}
                      className="bg-gray-200 p-2 rounded-full
            hover:bg-gray-300
             w-[6rem]"
                    >
                      Cancle
                    </button>

                    <button
                      type="submit"
                      disabled={comment.length > 0 ? false : true}
                      className={` p-2 rounded-full w-[6rem]
                ${
                  comment.length > 0
                    ? "bg-[blue] text-white cursor-pointer"
                    : "cursor-not-allowed bg-gray-200`"
                }
                `}
                    >
                      Comment
                    </button>
                  </div>
                )}

                <div
                  onClick={() => {
                    setshowComment(!showComment);
                  }}
                  className="w-full cursor-pointer flex justify-end items-center gap-2 p-4"
                >
                  <h1>{showComment ? `Hide Comments` : "Show Comments"}</h1>
                  <div>
                    {showComment ? (
                      <IoMdArrowDropup className="text-xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-xl" />
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* all comment */}

            {showComment && (
              <div className="w-full transition-all flex  flex-col gap-5 min-h-full ">
                {descComment.map((data) => (
                  <div
                    className="w-full bg-gray-00  p-1 rounded-md flex gap-2 items-center "
                    key={data._id}
                  >
                    <div>
                      {" "}
                      <RxAvatar className="text-2xl" />{" "}
                    </div>
                    <h1 className="md:text-xl text-md">{data.desc}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className=" w-full grid-cols-1 gap-2 h-full">
        <Recomandation tags={currentVideo?.tags} />
          {/* <div className="w-full h-full flex flex-col gap-5">
            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            /> 
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainVideoview;
