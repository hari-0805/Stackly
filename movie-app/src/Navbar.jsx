// import React from "react";
// function Navbar({ isDark, onToggleTheme }) {
//   return (
//     <nav className="navbar">
//       <h1 className="nav-title"> Tamil Movie Picks</h1>
//       <button className="theme-toggle" onClick={onToggleTheme}>
//         {isDark ? " Light Mode" : " Dark Mode"}
//       </button>
//     </nav>
//   );
// }
// export default Navbar;
// AFTER

function Navbar({ isDark, onToggleTheme, watchlistCount }) {
  return (
    <nav className="navbar">
      <h1 className="nav-title"> Movie picks</h1>
      <div className="nav-right">
        <span className="nav-watchlist">
           Watchlist
          {watchlistCount > 0 && (
            <span className="nav-badge">{watchlistCount}</span>
          )}
        </span>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {isDark ? " Light" : " Dark"}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;