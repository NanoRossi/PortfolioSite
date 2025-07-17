import ProjectHeader from "./ProjectHeader";

function Projects() {
  return (
    <div className="section">
      <div className="item-entry">
        <ProjectHeader
          title="Portfolio Website"
          repoLink="https://github.com/NanoRossi/PortfolioSite"
        />
        <div className="item-details">
          <p><strong>Summary:</strong> This is the site you're currently viewing.</p>
          <p><strong>Purpose:</strong> I needed a space to consolidate and explain the projects I was working on.</p>
          <p><strong>Technologies:</strong> ReactJS</p>
        </div>
      </div>


      <div className="item-entry">
        <ProjectHeader title="Lyrics Game" repoLink="https://github.com/NanoRossi/LyricsGame" />
        <ul className="item-description">
          <li>A bunch of stuff</li>
        </ul>
      </div>

      <div className="item-entry">
        <ProjectHeader title="EA College Football 26 - Coach Planner" repoLink="https://github.com/NanoRossi/CFB-Coach-Planner" />
        <ul className="item-description">
          <li>A bunch of stuff</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
