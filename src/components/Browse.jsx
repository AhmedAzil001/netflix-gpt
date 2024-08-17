import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "./mainContainer";
import SecondContainer from "./SecondContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const gpt= useSelector((store) => store.gpt);
  useNowPlayingMovie();


  return (
    <div>
      <Header />
      {gpt.gptShow ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
