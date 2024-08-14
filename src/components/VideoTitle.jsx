import useVideoData from "../hooks/useVideoData";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview, id }) => {
  useVideoData(id);
  return (
    <div className="w-full h-[115vh] pt-[17rem] pl-14 bg-gradient-to-r from-black text-white absolute">
      <h1 className="text-5xl mb-2 font-bold">{title}</h1>
      <p className="mb-2 ml-1 w-1/3 text-[0.95rem] text-slate-400 leading-6">
        {overview}
      </p>

      <div className="flex gap-6 mt-4">
        <button className="py-2 px-10 text-md bg-slate-100 hover:bg-slate-300 flex items-center gap-1 text-black rounded-sm font-medium">
          <FaPlay/>Play
        </button>
        <button className="py-2 px-7 text-md bg-gray-600 bg-opacity-30 hover:bg-opacity-50 flex items-center gap-1 text-white rounded-sm font-medium">
          <AiOutlineInfoCircle/>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
