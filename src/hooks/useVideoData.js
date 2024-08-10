import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideo } from "../utils/movieSlice";

const useVideoData = (movieId) => {
  const dispatch = useDispatch();

  console.log(movieId);
  const getVideoData = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const data = await response.json();

    const filteredData = data?.results?.filter((val) => val.type === "Trailer");
    const playMovie =
      filteredData.length === 0 ? data?.results[0] : filteredData[0];
    dispatch(addVideo(playMovie));
    console.log(playMovie);
  };

  useEffect(() => {
    getVideoData();
  });
};

export default useVideoData;
