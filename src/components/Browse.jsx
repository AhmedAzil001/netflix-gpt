import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./mainContainer";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
