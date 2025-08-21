export default function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <div className="header-content">
        <h1>Ross Oliver</h1>
        <div className="dark-mode-toggle">
          <label>Dark Mode:</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </header>
  );
}