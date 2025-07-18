// App.js
import { useState, useEffect } from 'react';
import '../css/App.css';
import '../css/CollapsibleSection.css';
import '../css/Header.css';
import '../css/Section.css';
import '../css/Sidebar.css';

import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="content-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;