import type { Movie } from "../types/movie";
import type { SyntheticEvent } from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const MovieCard = ({
  movie,
  isWatchlisted,
  toggleWatchlist,
}: {
  movie: Movie;
  isWatchlisted: boolean;
  toggleWatchlist: (movieId: number) => void;
}) => {
  const heartRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isWatchlisted) {
      const tl = gsap.timeline();
      tl.fromTo(
        heartRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1.3, opacity: 1, duration: 0.3, ease: "back.out(2)" }
      )
        .to(heartRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        })
        .to(heartRef.current, {
          opacity: 0,
          y: -40,
          duration: 0.6,
          ease: "power2.in",
          delay: 0.2,
        });
    }
  }, [isWatchlisted]);

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
      <span
        ref={heartRef}
        className="absolute left-1/2 top-10 -translate-x-1/2 text-4xl opacity-0 pointer-events-none select-none"
      >
        ❤️
      </span>

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
              {isWatchlisted ? "In Watchlist ❤️" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default MovieCard;
