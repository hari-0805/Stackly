import React from "react";
function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav className="navbar">
      <h1 className="nav-title"> Tamil Movie Picks</h1>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {isDark ? " Light Mode" : " Dark Mode"}
      </button>
    </nav>
  );
}
export default Navbar;
