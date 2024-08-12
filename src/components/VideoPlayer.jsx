import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const movieKey = useSelector((store) => store.movie?.playVideo?.key);

  return (
    <div className="overflow-hidden aspect-video">
      <iframe
        className="w-[300%] h-[100%] ml-[-100%] mt-[-3%]"
        src={
          "https://www.youtube.com/embed/"+movieKey+"?&autoplay=1&mute=1&controls=0&loop=1"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
