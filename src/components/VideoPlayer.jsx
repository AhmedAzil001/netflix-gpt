import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const movieKey = useSelector((store) => store.playVideo?.key);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/Idh8n5XuYIA?si=" +
          movieKey +
          "?&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
