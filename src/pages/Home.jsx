import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const randomTerms = ["Venom", "Avengers", "Love", "War", "Spider", "Batman"];

  useEffect(() => {
    const randomWord =
      randomTerms[Math.floor(Math.random() * randomTerms.length)];
    loadMovies(randomWord);
  }, []);

  const loadMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query);
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    loadMovies(searchQuery);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] px-8 py-6">
      <form onSubmit={handleSearch} className="flex gap-3 justify-center mb-8">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 text-white w-full max-w-md"
          placeholder="Search movies..."
        />

        <button className="bg-red-500 px-4 py-2 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-white text-center">Loading...</p>}

      {error && <p className="text-center text-red-400 mt-10">{error}</p>}

      {!loading && !error && (
        <div className="flex flex-wrap justify-center gap-6">
          {/* {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))} */}
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
