import React, { useState } from "react";
import MovieCard from "./MovieCard";
import movies from "./moviesData";
import "./App.css";
function App() {
  const [watchlist, setWatchlist] = useState([]);
  function handleToggleWatchlist(movieId) {
    if (watchlist.includes(movieId)) {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  }
  return (
    <div className="app">
      <h1 className="app-title"> Tamil Movie Picks</h1>
      <p className="app-subtitle">Your weekend watchlist starts here</p>
      <div className="cards-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isAdded={watchlist.includes(movie.id)}
            onToggleWatchlist={() => handleToggleWatchlist(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
