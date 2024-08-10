import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    dispatch(addNowPlayingMovie(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovie;
