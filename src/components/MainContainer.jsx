import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoPlayer from "./videoPlayer";


const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movie) return;
  const mainMovie = movie[1];
  
  const {original_title,overview,id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} id={id}/>
      <VideoPlayer/>
    </div>
  );
};

export default MainContainer;