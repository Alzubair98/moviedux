import type { Movie } from "../types/movie";

export const WatchList = ({
  watchlist,
  movies,
  toggleWatchlist,
}: {
  watchlist: number[];
  movies: Movie;
  toggleWatchlist: void;
}) => {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
    </div>
  );
};
