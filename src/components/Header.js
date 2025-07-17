function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <div className="header-content">
        <h1>Ross Oliver</h1>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
