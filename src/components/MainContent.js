import Education from './MainContentSections/Education';
import WorkHistory from './MainContentSections/WorkHistory';
import Projects from './MainContentSections/Projects';
import CollapsibleSection from "./Templates/CollapsibleSection";

export default function MainContent() {
  return (
    <div>
      <CollapsibleSection title="Work History" className="section"><WorkHistory /></CollapsibleSection>
      <CollapsibleSection title="Projects" className="section"><Projects /></CollapsibleSection>
      <CollapsibleSection title="Education" className="section"><Education /></CollapsibleSection>
    </div>
  );
}