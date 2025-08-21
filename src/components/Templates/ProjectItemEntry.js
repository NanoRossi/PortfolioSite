import { useState } from "react";
import ProjectHeader from "./ProjectHeader";

export default function ProjectItemEntry({ title, repoLink, hostingLink, children, defaultOpen = true }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="item-entry">
            <div className="item-header" onClick={toggle}>
                <div className="item-left-section">
                    <ProjectHeader
                        title={title}
                        repoLink={repoLink}
                        hostingLink={hostingLink}
                    />
                </div>
                <div className="item-toggle">
                    <span className="toggle-icon">{isOpen ? "▾" : "▸"}</span>
                </div>
            </div>
            {isOpen && <div className="item-details">{children}</div>}
        </div>
    );
}