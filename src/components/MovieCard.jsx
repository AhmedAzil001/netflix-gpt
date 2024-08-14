import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ img, title }) => {
  return (
    <img src={IMG_CDN_URL + img} alt={title} className="rounded-md w-[11rem]" />
  );
};

export default MovieCard;
