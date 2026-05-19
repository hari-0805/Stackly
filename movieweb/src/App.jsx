import { useState } from "react";
import moviesData from "./data/movies";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  const filteredMovies = moviesData.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || movie.genre === genre)
    );
  });

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <div className="logo">IMDb</div>
        <div className="controls">
          <GenreFilter genre={genre} setGenre={setGenre} />
          <SearchBar search={search} setSearch={setSearch} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>
      
      <main className="main-content">
        <h2 className="section-title">What to watch</h2>
        <h3 className="section-subtitle">Top picks for you</h3>
        <MovieList movies={filteredMovies} />
      </main>
    </div>
  );
}

export default App;
