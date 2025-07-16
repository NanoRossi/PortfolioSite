import { DiGithubBadge } from 'react-icons/di';

const gitHubLabel = "GitHub Repo"

function Projects() {
  return (
    <div className="section">
      <div className="item-entry">
        <div className="item-header">
          <div className="item-title">
            <h3 >Portfolio Website</h3>
            <a
              key={gitHubLabel}
              aria-label={gitHubLabel}
              title={gitHubLabel}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NanoRossi/PortfolioSite"
              className="github-icon">
              <DiGithubBadge />
            </a>
          </div>
        </div>
        <ul className="item-description">
          <li>A bunch of stuff</li>
        </ul>
      </div>

      <div className="item-entry">
        <div className="item-header">
          <div className="item-title">
            <h3>Lyrics Game</h3>
            <a
              key={gitHubLabel}
              aria-label={gitHubLabel}
              title={gitHubLabel}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NanoRossi/LyricsGame"
              className="github-icon">
              <DiGithubBadge />
            </a>
          </div>
        </div>
        <ul className="item-description">
          <li>A bunch of stuff</li>
        </ul>
      </div>

      <div className="item-entry">
        <div className="item-header">
          <div className="item-title">
            <h3>EA College Football 26 - Coach Planner</h3>
            <a
              key={gitHubLabel}
              aria-label={gitHubLabel}
              title={gitHubLabel}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NanoRossi/CFB-Coach-Planner"
              className="github-icon">
              <DiGithubBadge />
            </a>
          </div>
        </div>
        <ul className="item-description">
          <li>A bunch of stuff</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
