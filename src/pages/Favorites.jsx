import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { Favorites } = useMovieContext();
  if (Favorites) {
    return (
      <>
        <div className="min-h-screen bg-[#0a0e1a]">
          <div className="text-2xl text-center font-bold text-red-500 pt-3">
            <h2>Favorites Movies</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {Favorites.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Favorites;
