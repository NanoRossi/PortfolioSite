import React from 'react';
import Education from './Education';
import WorkHistory from './WorkHistory';
import Projects from './Projects';

function MainContent() {
  return (
    <div className="main-content">
      <Education />
      <WorkHistory />
      <Projects />
    </div>
  );
}

export default MainContent;
