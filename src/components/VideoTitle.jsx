import useVideoData from "../hooks/useVideoData";

const VideoTitle = ({ title, overview, id }) => {
  useVideoData(id);
  return (
    <div className="w-full h-[115vh] pt-[22rem] pl-20 bg-gradient-to-r from-black text-white absolute">
      <h1 className="text-5xl mb-2 font-bold">{title}</h1>
      <p className="mb-2 ml-1 w-1/3 text-[0.95rem] leading-6">{overview}</p>

      <div className="flex gap-6 mt-4">
        <button className="py-2 px-10 bg-slate-100 hover:bg-slate-300  text-black rounded-sm font-medium">
          Play
        </button>
        <button className="py-2 px-7 bg-slate-100 hover:bg-slate-300 text-black rounded-sm font-medium">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
