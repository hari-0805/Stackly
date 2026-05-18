import React from "react";
import StarRating from "./StarRating";
import "./MovieCard.css";
function MovieCard({ movie, isAdded, onToggleWatchlist }) {
  return (
    <div className="card">
      <img
        src={movie.poster}
        alt={movie.title}
        className="card-poster"
      />
      <div className="card-body">
        <span className="card-genre">{movie.genre}</span>
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-meta">{movie.year} &nbsp;•&nbsp; {movie.runtime}</p>
        <StarRating rating={movie.rating} />
        <p className="card-description">{movie.description}</p>
        <button
          className={`watchlist-btn ${isAdded ? "added" : ""}`}
          onClick={onToggleWatchlist}
        >
          {isAdded ? " Added to Watchlist" : " Add to Watchlist"}
        </button>

      </div>
    </div>
  );
}
export default MovieCard;
