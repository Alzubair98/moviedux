import type { Movie } from "../types/movie";
import type { SyntheticEvent } from "react";

const MovieCard = ({
  movie,
  isWatchlisted,
  toggleWatchlist,
}: {
  movie: Movie;
  isWatchlisted: boolean;
  toggleWatchlist: (movieId: number) => void;
}) => {
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
        <div>
          <h3 className="movie-card-title">{movie.title}</h3>
          <span className="movie-card-genre">{movie.genre}</span>
          <span
            className={`movie-card-rating ${getRatingClass(
              parseInt(movie.rating)
            )}`}
          >
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "in Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
