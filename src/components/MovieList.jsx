import MovieCard from "./MovieCard";
import { FaAngleRight } from "react-icons/fa";

const MovieList = ({ title, data }) => {
  return (
    <div className="px-10 py-5">
      <div>
        <h1 className="text-2xl mb-7 font-medium flex gap-5 hover:gap-7 items-center">
          {title} <FaAngleRight />{" "}
        </h1>
      </div>
      <div className="flex gap-3 overflow-x-scroll no-scrollbar">
        {data &&
          data.map((val) => (
            <MovieCard
              key={val.id}
              img={val.poster_path}
              title={val.original_title}
            />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
