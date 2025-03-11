import React from "react";
import { FaCircleInfo, FaPlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:m-0 flex items-center">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 flex justify-between items-center gap-2">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-500 p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hidden md:flex justify-between items-center gap-2">
          <FaCircleInfo /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
