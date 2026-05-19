function GenreFilter({ genre, setGenre }) {
  return (
    <select className="genre-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
      <option value="All">All</option>
      <option value="Action">Action</option>
      <option value="Drama">Drama</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Thriller">Thriller</option>
    </select>
  );
}

export default GenreFilter;
