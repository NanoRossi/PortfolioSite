import { useState } from "react";

export default function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="collapsible-section">
            <div className="collapsible-header" onClick={toggle}>
                <h2 className="text-theme">{title}</h2>
                <span className="toggle-icon">{isOpen ? "▾" : "▸"}</span>
            </div>
            {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
    );
}