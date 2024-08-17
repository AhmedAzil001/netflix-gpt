import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/language";
import client from "../utils/openAiConfig";
import { useRef } from "react";
import { API_OPTION } from "../utils/constants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config);
  const searchText = useRef(null);

  const getMovieDetails = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    return data.results;
  };
  const getData = async () => {
    const query =
      "Suggest me some movies for the genre : " +
      searchText +
      ". Only give me names of 6 movies and it should be comma separated";
    const data = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const movies = data.choices.split(",");

    const promiseArray = movies.map((data) => getMovieDetails(data));

    const tmdbList = Promise.all(promiseArray);
    console.log(tmdbList);
  };

  return (
    <div className="p-2 mt-8 mr-2 bg-black w-1/2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-1 w-full flex items-center gap-3"
      >
        <input
          ref={searchText}
          className="p-3 outline-none  rounded w-[80%] "
          type="text"
          placeholder={lang[language.lang].placeholder}
        />
        <button
          onClick={getData}
          className="bg-red-600 p-3 w-[20%] rounded text-white font-medium"
        >
          {lang[language.lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
