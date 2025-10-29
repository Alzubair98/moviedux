import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export const WatchList = ({
  watchlist,
  movies,
  toggleWatchlist,
}: {
  watchlist: number[];
  movies: Movie[];
  toggleWatchlist: (movieId: number) => void;
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const watchlistedMovies = movies.filter((movie) =>
    watchlist.includes(movie.id)
  );

  useEffect(() => {
    if (watchlistedMovies.length === 0) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        iconRef.current,
        { y: -40, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" }
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );

      gsap.to(iconRef.current, {
        textShadow: "0 0 30px rgba(255, 255, 0, 0.6)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, [watchlistedMovies.length]);

  return (
    <div ref={containerRef} className="mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        🎬 Your Watchlist
      </h1>

      {watchlistedMovies.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center ">
          <div
            ref={iconRef}
            className="text-7xl mb-6 select-none inline-block bg-transparent relative"
          >
            🍿
          </div>

          <p
            ref={textRef}
            className="text-gray-600 dark:text-gray-300 text-lg mb-6"
          >
            Your Watchlist is empty right now 😔
          </p>

          <button
            ref={btnRef}
            onClick={() => navigate("/")}
            className="px-8 py-3 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg tracking-wide"
          >
            🎥 Browse Movies
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlistedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};
