import { lazy, Suspense, useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import axios from "axios";
import type { Movie } from "../types/movie";
import { motion } from "framer-motion";
import { Loader } from "./loader";

// lazy loading
const MovieCard = lazy(() => import("./MovieCard"));

export const MoviesGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <div>
          <input
            className="search-input"
            placeholder="Search movies..."
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </div>
        </div>
      </Suspense>
    </>
  );
};
