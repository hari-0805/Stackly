// import React from "react";
// import StarRating from "./StarRating";
// function MovieCard({ movie, isAdded, onToggleWatchlist }) {
//   return (
//     <div className="card">
//       <div className="card-poster-wrap">
//         <img
//           src={movie.poster}
//           alt={movie.title}
//           className="card-poster"
//         />
//         <span className="card-genre-badge">{movie.genre}</span>
//       </div>
//       <div className="card-body">
//         <h2 className="card-title">{movie.title}</h2>
//         <p className="card-meta">{movie.year} &nbsp;•&nbsp; {movie.runtime}</p>
//         <StarRating rating={movie.rating} />
//         <p className="card-description">{movie.description}</p>
//         <button
//           className={`watchlist-btn ${isAdded ? "added" : ""}`}
//           onClick={onToggleWatchlist}
//         >
//           {isAdded ? " Added" : " Add to Watchlist"}
//         </button>
//       </div>
//     </div>
//   );
// }
// export default MovieCard;
// AFTER — API uses movie.Title, movie.Poster, movie.imdbID (capital letters)


// src/components/MovieCard.jsx
// Displays one movie card — data comes from OMDb API
// Props: movie, isAdded, onToggleWatchlist, onViewDetails

import React from "react";

function MovieCard({ movie, isAdded, onToggleWatchlist, onViewDetails }) {
  const posterSrc =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x450?text=No+Poster";

  return (
    <div className="card" onClick={() => onViewDetails(movie.imdbID)}>

      <div className="card-poster-wrap">
        <img src={posterSrc} alt={movie.Title} className="card-poster" />
        <span className="card-year-badge">{movie.Year}</span>
      </div>
      <div className="card-body">
        <h2 className="card-title">{movie.Title}</h2>
        <p className="card-meta">{movie.Type?.toUpperCase()}</p>
        <button
          className={`watchlist-btn ${isAdded ? "added" : ""}`}
          onClick={(e) => {
            e.stopPropagation(); 
            onToggleWatchlist(movie.imdbID);
          }}
        >
          {isAdded ? " Added" : " Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
