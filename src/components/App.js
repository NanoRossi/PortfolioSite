// App.js
import { useState, useEffect } from 'react';
import '../css/App.css';
import '../css/Content.css';
import '../css/Header.css';
import '../css/Sidebar.css';
import '../css/Footer.css';

import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

export default function App() {
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
        <div className="main-content">
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}