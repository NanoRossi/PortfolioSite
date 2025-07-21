import Education from './Education';
import WorkHistory from './WorkHistory';
import Projects from './Projects';
import CollapsibleSection from "./CollapsibleSection";

function MainContent() {
  return (
    <div>
      <CollapsibleSection title="Work History" className="section"><WorkHistory /></CollapsibleSection>
      <CollapsibleSection title="Projects" className="section"><Projects /></CollapsibleSection>
      <CollapsibleSection title="Education" className="section"><Education /></CollapsibleSection>
    </div>
  );
}

export default MainContent;