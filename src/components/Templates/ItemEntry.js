import { useState } from "react";

export default function ItemEntry({ title, company, dates, children, defaultOpen = true }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="item-entry">
            <div className="item-header" onClick={toggle}>
                <div className="item-left-section">
                    <h3 className="item-title">{title}</h3>
                    <p className="company-name">{company}</p>
                    <div className="item-dates">
                        <span>{dates}</span>
                    </div>
                </div>
                <div className="item-toggle">
                    <span className="toggle-icon">{isOpen ? "▾" : "▸"}</span>
                </div>
            </div>
            {isOpen && <div className="item-details">{children}</div>}
        </div>
    );
}