import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const movieKey = useSelector((store) => store.playVideo?.key);
  return (
    <div className="w-[100%] overflow-hidden aspect-video">
      <iframe
        className="w-[300%] h-[100%] ml-[-100%] mt-[-3%]"
        src={
          "https://www.youtube.com/embed/Idh8n5XuYIA?si=" +
          movieKey +
          "?&autoplay=1&mute=1&controls=0"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
