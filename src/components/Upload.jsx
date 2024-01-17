import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popState } from "../Redux/VideoPopup";
import { useForm } from "react-hook-form";
import app from "../firebase";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const UserId = useSelector((state) => state.user.current);
  const [showModal, setShowModal] = useState(true);
  const VideoPopup = useSelector((state) => state.popupVideo.Popupvalue);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(popState());
  };

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setvideoper(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setvideoUrl(url);
        });
      }
    );
  };

  const uploadImage = (file) => {
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setImageper(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setimgUrl(url);
        });
      }
    );
  };

  const { register, handleSubmit, resetField } = useForm();
  const [image, setImage] = useState(undefined);
  const [imageper, setImageper] = useState(0);
  const [video, setvideo] = useState("");
  const [videoper, setvideoper] = useState(0);
  const [imgUrl, setimgUrl] = useState("");
  const [videoUrl, setvideoUrl] = useState("");
  console.log(videoper, "videoper ");
  console.log(imageper, "imageper ");

  const handleChange = (e) => {
    console.log("cliking is continue");
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await axios
      .post(`${import.meta.env.VITE_SOME_KEY}/video`, {
        token: UserId.other._id,
        imgUrl: imgUrl,
        videoUrl: videoUrl,
        title: data.title,
        desc: data.desc,
        tags: data.tags,
      })
      .then((res) => {
        dispatch(popState());
        navigate(`/video/${res.videoUrl}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    video && uploadFile(video);
  }, [video]);

  console.log(video && video);
  console.log(image);

  useEffect(() => {
    image && uploadImage(image);
  }, [image]);

  return (
    <>
      {VideoPopup ? (
        <>
          <div
            className="justify-center items-center flex
          overflow-hidden 
           overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  my-6 mx-auto w-[50%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Upload Video</h3>
                  <h3
                    onClick={handleClick}
                    className="text-xl font-semibold cursor-pointer"
                  >
                    X
                  </h3>
                </div>

                <div className="relative w-full p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="video-input">Video :</label>
                      {videoper > 0 ? (
                        "Uploading" + videoper + "%"
                      ) : (
                        <input
                          onChange={(e) => {
                            setvideo(e.target.files[0]);
                          }}
                          id="video-input"
                          className="outline-none border-black border-[1px] p-1 w-full"
                          type="file"
                          placeholder="Video Tital"
                        />
                      )}
                    </div>

                    <div className="w-full">
                      <input
                        id="title"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        {...register("title")}
                        className="outline-none border-black border-[1px] p-1 w-full"
                        type="text"
                        placeholder="Title"
                      />
                    </div>

                    <div className="w-full">
                      <textarea
                        id="desc"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        {...register("desc")}
                        className="outline-none border-black border-[1px] p-1 w-full"
                        type="text"
                        placeholder="Descpration"
                        rows={5}
                      />
                    </div>

                    <div className="w-full">
                      <input
                        id="tags"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        {...register("tags")}
                        className="outline-none border-black border-[1px] p-1 w-full"
                        type="text"
                        placeholder="Separate tags with commas"
                      />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="video-input">Image :</label>
                      {imageper > 0 ? (
                        "Uploading" + imageper + "%"
                      ) : (
                        <input
                          accept="image/*"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          id="video-input"
                          className="outline-none border-black border-[1px] p-1 w-full"
                          type="file"
                          placeholder="Video Tital"
                        />
                      )}
                    </div>

                    <button className="w-full bg-gray-300 p-1 cursor-pointer font-bold">
                      Upload
                    </button>
                  </form>
                </div>

                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    // onClick={() => setShowModal(false)}
                    onClick={handleClick}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Upload;
