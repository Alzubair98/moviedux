import type { Movie } from "../types/movie";
import type { SyntheticEvent } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "images/default.jpg";
  };

  const getRatingClass = (rating: number) => {
    return rating >= 8
      ? "rating-good"
      : rating >= 5
      ? "rating-ok"
      : "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card cursor-pointer">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
        loading="lazy"
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p
          className={`movie-card-rating ${getRatingClass(
            parseInt(movie.rating)
          )}`}
        >
          {movie.rating}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
