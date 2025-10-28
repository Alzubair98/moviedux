import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CinematicLoader } from "./components/CinmaticLoader";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import type { Movie } from "./types/movie";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watchlist, setWatchlist] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);

    const fetchMovies = async () => {
      try {
        const response = await axios.get("movies.json");
        setMovies(response.data);
      } catch (error) {
        console.log(error, "useEffect error");
      }
    };

    fetchMovies();
  }, []);

  const toggleWatchlist = useCallback((movieId: number) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  }, []);

  return (
    <>
      <CinematicLoader isLoading={isLoading} />
      {!isLoading && (
        <div className="App">
          <div className="container">
            <Router>
              <nav className="text-white py-3 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                  <Link
                    to="/"
                    className="text-xl font-bold hover:text-yellow-400"
                  >
                    🎬 MovieDux
                  </Link>
                  <div className="flex gap-6">
                    <Link to="/" className="hover:text-yellow-400">
                      Home
                    </Link>
                    <Link to="/WatchList" className="hover:text-yellow-400">
                      WatchList
                    </Link>
                  </div>
                </div>
              </nav>

              <Header />

              <AppRoutes
                movies={movies}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              />
            </Router>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
