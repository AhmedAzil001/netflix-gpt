import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    dispatch(addTopRatedMovie(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovie;
