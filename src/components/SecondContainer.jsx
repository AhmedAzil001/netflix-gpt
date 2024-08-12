import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovie from "../hooks/usePopularMovie";

const SecondContainer = () => {
  usePopularMovie();
  const data = useSelector((store) => store.movie);

  return (
    <div className="flex flex-col bg-black">
      <div className="-mt-[12rem] z-20 text-white">
        <MovieList data={data?.nowPlayingMovies} title={"Now Playing Movies"} />
        <MovieList data={data?.popularMovies} title={"Popular Movies"} />
        <MovieList data={data?.nowPlayingMovies} title={"Now Playing Movies"} />
      </div>
    </div>
  );
};

export default SecondContainer;
