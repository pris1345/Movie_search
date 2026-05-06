import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addtoFavorites, removefromFavorites, isFavorites } =
    useMovieContext();

  const Favorite = isFavorites(movie.imdbID);

  const imageUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (Favorite) removefromFavorites(movie.imdbID);
    else addtoFavorites(movie);
  };

  return (
    <div className="w-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
      <div className="relative">
        <img
          src={imageUrl}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button
            className={`bg-black bg-opacity-60 text-xl rounded-full w-9 h-9 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200 ${
              Favorite ? "text-red-500" : "text-white"
            }`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">
          {movie.Title}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
