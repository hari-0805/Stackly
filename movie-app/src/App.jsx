import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";
import movies from "./moviesData";
import "./App.css";
function App() {
  const [searchQuery,   setSearchQuery]   = useState("");    
  const [selectedGenre, setSelectedGenre] = useState("All"); 
  const [watchlist,     setWatchlist]     = useState([]);    
  const [isDark,        setIsDark]        = useState(false); 
  const genres = [...new Set(movies.map((m) => m.genre))];
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre  = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });
  function handleToggleWatchlist(movieId) {
    if (watchlist.includes(movieId)) {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    } else {
      setWatchlist([...watchlist, movieId]);
    }
  }
  return (
    <div className={`app-root ${isDark ? "dark" : "light"}`}>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main className="main">
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
        <div className="genre-filter">
          <button
            className={`genre-btn ${selectedGenre === "All" ? "active" : ""}`}
            onClick={() => setSelectedGenre("All")}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <div className="cards-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isAdded={watchlist.includes(movie.id)}
              onToggleWatchlist={() => handleToggleWatchlist(movie.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;
