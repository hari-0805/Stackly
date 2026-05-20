// src/App.jsx
// Root component — all state and API calls live here

import React, { useState, useEffect } from "react";
import Navbar       from "./Navbar";
import SearchBar    from "./SearchBar";
import MovieCard    from "./MovieCard";
import MovieModal   from "./MovieModal";
import Pagination   from "./Pagination";
import useDebounce  from "./useDebounce";
import { searchMovies, getMovieDetails } from "./api";
import "./App.css";

function App() {

  const [query,        setQuery]        = useState("batman");      // search text
  const [movies,       setMovies]       = useState([]);            // list from API
  const [totalResults, setTotalResults] = useState(0);             // for pagination
  const [currentPage,  setCurrentPage]  = useState(1);             // current page
  const [loading,      setLoading]      = useState(false);         // loading state
  const [error,        setError]        = useState("");             // error message
  const [selectedMovie, setSelectedMovie] = useState(null);        // modal data
  const [modalLoading,  setModalLoading]  = useState(false);       // modal loading
  const [watchlist,    setWatchlist]    = useState([]);             // saved movie IDs
  const [isDark,       setIsDark]       = useState(false);         // theme

  
  const debouncedQuery = useDebounce(query, 500);

  
  useEffect(() => {
    if (!debouncedQuery.trim()) return; 

    async function fetchMovies() {
      setLoading(true);
      setError("");
      setMovies([]);
      try {
        const data = await searchMovies(debouncedQuery, currentPage);
        setMovies(data.movies);
        setTotalResults(data.totalResults);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [debouncedQuery, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery]);

  async function handleViewDetails(imdbID) {
    setModalLoading(true);
    setSelectedMovie({}); 
    try {
      const data = await getMovieDetails(imdbID);
      setSelectedMovie(data);
    } catch (err) {
      setError(err.message);
      setSelectedMovie(null);
    } finally {
      setModalLoading(false);
    }
  }

  function handleToggleWatchlist(imdbID) {
    if (watchlist.includes(imdbID)) {
      setWatchlist(watchlist.filter((id) => id !== imdbID));
    } else {
      setWatchlist([...watchlist, imdbID]);
    }
  }
  return (
    <div className={`app-root ${isDark ? "dark" : "light"}`}>

      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        watchlistCount={watchlist.length}
      />
      <main className="main">
        <SearchBar query={query} onChange={setQuery} />
        {loading && (
          <div className="status-box">
            <div className="spinner"></div>
            <p>Searching movies...</p>
          </div>
        )}
        {error && !loading && (
          <div className="error-box">
             {error}
          </div>
        )}
        {!loading && (
          <div className="cards-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isAdded={watchlist.includes(movie.imdbID)}
                onToggleWatchlist={handleToggleWatchlist}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
        {!loading && movies.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            onPageChange={setCurrentPage}
          />
        )}
        {!loading && !error && movies.length === 0 && debouncedQuery && (
          <div className="status-box">
            <p> No movies found. Try again!</p>
          </div>
        )}
      </main>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isAdded={watchlist.includes(selectedMovie.imdbID)}
          onToggleWatchlist={handleToggleWatchlist}
          onClose={() => setSelectedMovie(null)}
          loading={modalLoading}
        />
      )}
    </div>
  );
}
export default App;
