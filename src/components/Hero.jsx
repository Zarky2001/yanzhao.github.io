import React from "react";
import "../css/Hero.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiOrcid } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Hero() {
    return (
        <div className="hero-grid">
            <div className="hero-left">
                <div className="profile-placeholder" aria-label="Zarky profile placeholder">
                    ZY
                </div>
                <div className="hero-meta">
                    <div className="meta-name">Zarky · 赵妍</div>
                    <div className="meta-title">Ph.D. Student in Computer Science</div>
                    <div className="current-location">
                        <MdLocationOn aria-hidden="true" />
                        <span>Hefei, China</span>
                    </div>
                    <div className="meta-description">
                        <div>Chain-of-Thought Reasoning</div>
                        <div>Multimodal Reasoning</div>
                        <div>Long-Tailed Image Classification</div>
                    </div>
                    <div className="contact-small">
                        <a
                            href="https://github.com/Zarky2001"
                            className="icon-link github-link"
                            aria-label="Zarky's GitHub profile"
                            title="GitHub: Zarky2001"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:zhaoyan_2001cn@163.com"
                            className="icon-link"
                            aria-label="Email Zarky"
                            title="zhaoyan_2001cn@163.com"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="mailto:2026010132@mail.hfut.edu.cn"
                            className="icon-link"
                            aria-label="Email Zarky"
                            title="2026010132@mail.hfut.edu.cn"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="mailto:g2023062010@stu.mnnu.edu.cn"
                            className="icon-link previous-email"
                            aria-label="Former email address at Minnan Normal University"
                            title="Former email: g2023062010@stu.mnnu.edu.cn"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://orcid.org/0009-0001-2295-7570"
                            className="icon-link orcid-link"
                            aria-label="Zarky's ORCID profile"
                            title="ORCID: 0009-0001-2295-7570"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiOrcid />
                        </a>
                    </div>
                    <div className="small-text">Additional social profiles and CV will be added later.</div>
                    <div className="small-text">Last updated: August 2026</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
