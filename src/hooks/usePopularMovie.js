import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    dispatch(addPopularMovie(data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularMovie;
