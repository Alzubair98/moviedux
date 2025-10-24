import { useState, useEffect } from "react";
import axios from "axios";

export const MoviesGrid = () => {
  const [movies, setMovies] = useState<string[]>([]);

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

  return <div>{movies.length}</div>;
};
