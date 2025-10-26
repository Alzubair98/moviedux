import { useState, useEffect } from "react";
import axios from "axios";
import type { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
