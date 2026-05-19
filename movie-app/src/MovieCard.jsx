import React from "react";
import StarRating from "./StarRating";
function MovieCard({ movie, isAdded, onToggleWatchlist }) {
  return (
    <div className="card">
      <div className="card-poster-wrap">
        <img
          src={movie.poster}
          alt={movie.title}
          className="card-poster"
        />
        <span className="card-genre-badge">{movie.genre}</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-meta">{movie.year} &nbsp;•&nbsp; {movie.runtime}</p>
        <StarRating rating={movie.rating} />
        <p className="card-description">{movie.description}</p>
        <button
          className={`watchlist-btn ${isAdded ? "added" : ""}`}
          onClick={onToggleWatchlist}
        >
          {isAdded ? " Added" : " Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}
export default MovieCard;
