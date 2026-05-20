TASK - 3 19/05/2026
Project structure
--------------------

movie-app/
  │
  ├── src/
  │
  ├── assets/                 
  │   ├── jana-nayagan.jpg
  │   ├── karuppu.jpg
  │   ├── lik.jpg
  │   ├── coolie.jpg
  │   ├── parasakthi.jpg
  │   └── projecthailmary.jpg
  │
  ├── App.jsx                 
  ├── App.css                  
  │
  ├── Navbar.jsx               
  ├── SearchBar.jsx            
  ├── MovieCard.jsx            
  ├── StarRating.jsx          
  │
  ├── moviesData.js            
  ├── index.css                
  └── main.jsx                

Brief explanation of your implementation approach
-------------------------------------------------

1. SearchBar.jsx — New Component
 A text input where the user types a movie name and the cards filter in real time.
User types "Jana" → only Jana Nayagan card shows
const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
Highlights the border in blue when focused


2. A row of buttons (All, Action, Thriller, Drama, Romance) to filter cards by genre.
Genres are auto-read from the movie data — no hardcoding needed
const genres = [...new Set(movies.map((m) => m.genre))];
Active button is highlighted in blue
Combines with search — both filters work together at the same time


3. Navbar.jsx — New Component
A sticky top bar with the app title and a Dark/Light mode toggle button.
<button onClick={onToggleTheme}>
  {isDark ? "Light Mode" : "Dark Mode"}
</button>
Sticks to the top while scrolling (position: sticky)
Button label switches based on current theme


4. moviesData.js — Expanded from 3 → 6 Movies
Before: 3 movies 
Now: 6 movies 
This lets the search and genre filter have more data to work with and makes the grid look fuller.

5. App.css — Completely Rewritten
The biggest change. The old CSS was plain and static. The new one has:
a) CSS Variables for Dark/Light Theme
css.light { --bg: #f0f2f8;  --text-primary: #111; ... }
.dark  { --bg: #13131f;  --text-primary: #f0f0ff; ... }
Every color in the app reads from these variables. Switching theme just swaps the color.

b) Responsive CSS Grid
css/* Before — fixed flex row */
display: flex; flex-wrap: wrap;
/* Now — smart grid that auto-adjusts columns */
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
On desktop → 3-4 columns. On tablet → 2 columns. On mobile → 1 column. Automatic.

c) Fade-in Animation on Cards
css@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
Every card gently slides up and fades in when it appears.

d) Poster Zoom on Hover
css.card:hover .card-poster { transform: scale(1.04); }
The poster image zooms in slightly when hover the card.

e) Genre Badge Moved onto the Poster
 Before — badge was below the poster in the card body
 Now — badge sits on top of the poster image (top-left corner)
<div className="card-poster-wrap">
  <img ... />
  <span className="card-genre-badge">{movie.genre}</span>
</div>

6. App.jsx — 4 State Variables Now
Before: only 1 state
jsxconst [watchlist, setWatchlist] = useState([]);
Now: 4 states managing everything
jsxconst [searchQuery,    setSearchQuery]    = useState("");    
const [selectedGenre,  setSelectedGenre]  = useState("All"); 
const [watchlist,      setWatchlist]      = useState([]);     
const [isDark,         setIsDark]         = useState(false);  
The filtering logic combines both search and genre together:

TASK - 4  20/05/2026

1. OMDb API Integration 
Created a dedicated api.js file that handles all API communication. Two functions were written — searchMovies() to search movies by title and getMovieDetails() to fetch full details of a selected movie using its IMDb ID. The API key is stored securely in a .env file using VITE_OMDB_API_KEY.

2. Dynamic Search with Debounce - useDebounce.js
Created a custom React hook useDebounce that delays the API call by 500ms after the user stops typing. This prevents unnecessary API calls on every keystroke and improves performance.

3. API Movie Cards - MovieCard.jsx
Updated MovieCard.jsx to use OMDb API response fields (movie.Title, movie.Poster, movie.Year, movie.imdbID) instead of local static data. Each card is now clickable and opens a detailed popup.

4. Movie Detail Popup - MovieModal.jsx
Added a new MovieModal.jsx component that shows full movie details when a card is clicked. It displays the poster, title, year, rating, genre, director, cast, full plot, and a watchlist button. The modal closes when clicking outside or pressing the Escape key.

5. Loading and Error Handling - App.jsx
Added proper loading and error states. A spinning loader appears while fetching data. An error message box appears if the API returns an error such as invalid key or no results found.

6. Pagination - Pagination.jsx
Added a Pagination.jsx component. Since OMDb returns 10 results per page, Previous and Next buttons allow the user to navigate through all results. The current page resets to 1 automatically whenever the search query changes.

7. Watchlist Count in Navbar - Navbar.jsx
Updated Navbar.jsx to accept a watchlistCount prop. A purple badge showing the count appears next to the Watchlist label whenever the user adds movies.