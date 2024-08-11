import useVideoData from "../hooks/useVideoData";

const VideoTitle = ({ title, overview, id }) => {
  useVideoData(id);
  return (
    <div className="w-full h-[101vh] pt-96 pl-10 bg-gradient-to-r from-black text-white absolute">
      <h1 className="text-4xl mb-2 font-bold">{title}</h1>
      <p className="mb-2 w-1/4">{overview}</p>

      <div className="flex gap-2">
        <button className="py-2 px-10 bg-white text-black rounded-sm">
          Play
        </button>
        <button className="py-2 px-7 bg-white text-black rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
