import React from "react";
import "../css/All.css";

const schoolAsset = (filename) => `${import.meta.env.BASE_URL}schools/${filename}`;

export default function Education() {
    const education = [
        {
            university: "Hefei University of Technology",
            degree: "Ph.D. in Computer Science and Technology",
            period: "2026 - Present",
            location: "Hefei, China",
            advisor: "Prof. Xueliang Liu",
            logo: schoolAsset("hfut.png"),
        },
        {
            university: "Minnan Normal University",
            degree: "Academic M.Sc. in Computer Application Technology",
            period: "2023 - 2026",
            location: "Zhangzhou, China",
            advisor: "Prof. Hong Zhao",
            logo: schoolAsset("mnnu.png"),
        },
        {
            university: "School of Information Engineering, Hangzhou Dianzi University",
            degree: "B.Eng. in Software Engineering",
            period: "2019 - 2023",
            location: "Hangzhou, China",
            advisor: null,
            logo: schoolAsset("hdu-ie.png"),
        },
    ];

    return (
        <div className="card" id="education" style={{ marginTop: "1rem" }}>
            <div className="card-title">Education</div>
            <div className="education-list">
                {education.map((edu) => (
                    <div key={edu.university} className="education-item">
                        {edu.logo && (
                            <img className="education-logo" src={edu.logo} alt={`${edu.university} logo`} />
                        )}
                        <div className="education-content">
                            <div className="education-header">
                                <h3 className="education-university">{edu.university}</h3>
                                <div className="education-period">
                                    {edu.period}
                                    <div className="education-location">{edu.location}</div>
                                </div>
                            </div>
                            <div className="education-details">
                                <p className="education-degree">{edu.degree}</p>
                                {edu.advisor && <p className="education-advisor">Advisor: {edu.advisor}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
