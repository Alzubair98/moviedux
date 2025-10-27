import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MoviesGrid } from "./components/MoviesGrid";
import { CinematicLoader } from "./components/CinmaticLoader";
import { WatchList } from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
              <nav className="bg-gray-900 text-white py-3 shadow-md">
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

              <Routes>
                <Route path="/" element={<MoviesGrid />} />
                <Route path="/WatchList" element={<WatchList />} />
              </Routes>
            </Router>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
