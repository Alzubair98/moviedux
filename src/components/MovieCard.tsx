import type { Movie } from "../types/movie";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div key={movie.id} className="movie-card cursor-pointer">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-rating">{movie.rating}</p>
      </div>
    </div>
  );
};
