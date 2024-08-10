import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      browse
    </div>
  );
};

export default Browse;
