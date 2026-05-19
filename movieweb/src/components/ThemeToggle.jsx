function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
