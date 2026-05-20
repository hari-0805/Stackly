const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";
export async function searchMovies(query, page = 1) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error || "No movies found.");
  }
  return {
    movies: data.Search,         
    totalResults: parseInt(data.totalResults), 
  };
}
export async function getMovieDetails(imdbID) {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found.");
  }
  return data;
}
