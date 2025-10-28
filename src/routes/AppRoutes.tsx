import { Routes, Route } from "react-router-dom";
import { WatchList } from "../components/Watchlist";
import { MoviesGrid } from "../components/MoviesGrid";
import { PageWrapper } from "../components/pageWrapper/PageWrapper";
import { NotFound } from "../components/404/NotFound";
import type { Movie } from "../types/movie";

export const AppRoutes = ({
  movies,
  watchlist,
  toggleWatchlist,
}: {
  movies: Movie;
  watchlist: number[];
  toggleWatchlist: void;
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <MoviesGrid
              movies={movies}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          </PageWrapper>
        }
      />
      <Route
        path="/WatchList"
        element={
          <PageWrapper>
            <WatchList
              movies={movies}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          </PageWrapper>
        }
      />
      <Route
        path="*"
        element={
          <PageWrapper>
            <NotFound />
          </PageWrapper>
        }
      />
    </Routes>
  );
};
