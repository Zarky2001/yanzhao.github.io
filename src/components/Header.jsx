import React, { useState } from "react";
import "../css/Header.css";

const brandLogo = `${import.meta.env.BASE_URL}brand/zarky-girl-blue.png`;

const NAV = [
    { id: "about", label: "About" },
    { id: "news", label: "News" },
    { id: "publications", label: "Publications" },
    { id: "education", label: "Education" },
    { id: "more", label: "More" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-container">
                <button className="header-brand" type="button" onClick={() => handleClick("about")} aria-label="Back to top">
                    <img className="brand-logo" src={brandLogo} alt="" aria-hidden="true" />
                    <span className="brand-wordmark">Zarky</span>
                    <span className="brand-divider" aria-hidden="true" />
                    <span className="brand-cn">赵妍</span>
                </button>

                {/* 汉堡按钮 */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </button>

                {/* 导航栏 */}
                <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className="nav-item"
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
