
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
