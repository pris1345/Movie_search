const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  console.log(data); 
  return data;
};

export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );

  const data = await response.json();
  return data;
};

