import React from "react";
import { FaCircleInfo, FaPlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80 flex justify-between items-center gap-2">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-500 p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg flex justify-between items-center gap-2">
          <FaCircleInfo /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
