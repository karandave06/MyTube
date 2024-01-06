import React from "react";
import { Player } from "video-react";
import video from "../../public/vido/demo_video.mp4";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import image from "../../public/images/youtubeImage.avif";
import SideVideo from "./SideVideo";

const MainVideoview = () => {
  return (
    <>
      <div className="md:w-[calc(100%-4rem)] w-full grid  py-5 md:grid-cols-2 grid-cols-1  gap-5 p-4 ml-auto  h-full">
        <div className="h-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            <Player autoPlay>
              <source src={video} />
            </Player>

            <div className="flex flex-col gap-3 items-start">
              <div className="flex  gap-2">
                <div>Video Title and this is the video title</div>
              </div>

              <div className="flex gap-4 w-full">
                <div className="flex gap-2 w-[50%]">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 bg-black flex rounded-full items-center justify-center">
                      <h1 className="text-center text-white "> K </h1>
                    </div>
                    <h1 className="text-xl">Karan Dave </h1>
                  </div>
                </div>

                <div className="flex gap-2 w-[50%]">
                  <button className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-200 text-xl">
                    <SlLike />
                  </button>
                  <button className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-200 text-xl">
                    <SlDislike />
                  </button>
                  <button className="w-24 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                    Suscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>This is the comment section</div>
          </div>
        </div>

        <div className=" w-full grid-cols-1 gap-2 h-full">
          <div className="w-full h-full flex flex-col gap-5">
            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            />

            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            />

            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            />

            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            />

            <SideVideo
              image={image}
              videoTitle={
                " video name is hear Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Repellat eos quo maiores?"
              }
              ChennalName={"Chennal name is going to hear"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainVideoview;
