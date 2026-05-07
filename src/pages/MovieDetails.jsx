import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/api";
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { imdbID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(imdbID);
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="w-64 h-96 object-cover rounded-lg shadow-lg"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{movie.Title}</h1>

          <div className="flex gap-3 text-sm text-gray-400">
            <span>{movie.Year}</span>
            <span>•</span>
            <span>{movie.Runtime}</span>
            <span>•</span>
            <span>{movie.Genre}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-white font-semibold">{movie.imdbRating}</span>
            <span className="text-gray-400 text-sm">/ 10</span>
          </div>

          <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>

          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            <div>
              <span className="text-gray-400">Director: </span>
              <span>{movie.Director}</span>
            </div>
            <div>
              <span className="text-gray-400">Cast: </span>
              <span>{movie.Actors}</span>
            </div>
            <div>
              <span className="text-gray-400">Language: </span>
              <span>{movie.Language}</span>
            </div>
            <div>
              <span className="text-gray-400">Country: </span>
              <span>{movie.Country}</span>
            </div>
            <div>
              <span className="text-gray-400">Awards: </span>
              <span>{movie.Awards}</span>
            </div>
            <div>
              <span className="text-gray-400">Box Office: </span>
              <span>{movie.BoxOffice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
