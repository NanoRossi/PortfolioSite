import CoachBuilder from "../Entries/Projects/CoachBuilder";
import DiscogsDashboard from "../Entries/Projects/DiscogsDashboard";
import LyricsGame from "../Entries/Projects/LyricsGame";
import PortfolioWebsite from "../Entries/Projects/PortfolioWebsite";

export default function Projects() {
  return (
    <div className="projects-list">
      <DiscogsDashboard />
      <PortfolioWebsite />
      <LyricsGame />
      <CoachBuilder />
    </div >
  );
}