import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MoviesGrid } from "./components/MoviesGrid";
import { CinematicLoader } from "./components/CinmaticLoader";
import { WatchList } from "./components/Watchlist";

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
            <Header />
            <MoviesGrid />
            <WatchList />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
