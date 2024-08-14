import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";

const SecondContainer = () => {
  usePopularMovie();
  useTopRatedMovie();
  const data = useSelector((store) => store.movie);

  return (
    <div className="flex flex-col bg-black">
      <div className="-mt-[17rem] z-20 text-white">
        <MovieList data={data?.nowPlayingMovies} title={"Now Playing Movies"} />
        <MovieList data={data?.popularMovies} title={"Popular Movies"} />
        <MovieList data={data?.topRatedMovies} title={"Top Rated Movies"} />
      </div>
    </div>
  );
};

export default SecondContainer;
