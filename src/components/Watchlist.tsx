import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

export const WatchList = ({
  watchlist,
  movies,
  toggleWatchlist,
}: {
  watchlist: number[];
  movies: Movie[];
  toggleWatchlist: (movieId: number) => void;
}) => {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
};
