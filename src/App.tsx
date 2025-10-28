import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MoviesGrid } from "./components/MoviesGrid";
import { CinematicLoader } from "./components/CinmaticLoader";
import { WatchList } from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageWrapper } from "./components/pageWrapper/PageWrapper";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800);
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

              <AppRoutes />
            </Router>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
