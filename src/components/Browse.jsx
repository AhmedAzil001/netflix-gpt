import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./mainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer/>
    </div>
  );
};

export default Browse;
