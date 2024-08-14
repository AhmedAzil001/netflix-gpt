import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const movieKey = useSelector((store) => store.movie?.playVideo?.key);

  return (
    <div className="overflow-hidden aspect-video bg-black">
      <iframe
        className="w-[300%] h-[100%] ml-[-100%] mt-[-7%]"
        src={
          "https://www.youtube.com/embed/"+movieKey+"?&loop=1&autoplay=1&mute=1&controls=0"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
