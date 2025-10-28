import { Routes, Route } from "react-router-dom";
import { WatchList } from "../components/Watchlist";
import { MoviesGrid } from "../components/MoviesGrid";
import { PageWrapper } from "../components/pageWrapper/PageWrapper";
import { NotFound } from "../components/404/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <MoviesGrid />
          </PageWrapper>
        }
      />
      <Route
        path="/WatchList"
        element={
          <PageWrapper>
            <WatchList />
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
