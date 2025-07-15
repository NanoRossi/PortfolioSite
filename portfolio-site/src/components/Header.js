// Header.js
import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <div className="header-content">
        <h1>Your Name</h1>
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
