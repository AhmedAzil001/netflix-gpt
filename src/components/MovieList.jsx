import usePopularMovie from "../hooks/usePopularMovie";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {

    console.log(data)
  return (
    <div className="px-14 py-5">
      <div>
        <h1 className="text-2xl mb-7 font-medium">{title}</h1>
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
