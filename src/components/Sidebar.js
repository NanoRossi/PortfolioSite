import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-theme">About Me</h2>
      <p className="text-theme">Short bio goes here.</p>
      <h3 className="text-theme">Connect</h3>
      <ul>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="mailto:you@example.com">Email</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
