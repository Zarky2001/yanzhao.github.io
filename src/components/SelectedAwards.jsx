import React from "react";
import "../css/All.css";

export default function SelectedAwards() {
    const awards = [
        "National Scholarship for Graduate Students",
        "First Prize, 21st Huawei Cup China Graduate Mathematical Contest in Modeling (National)",
        "Second Prize, 16th Lanqiao Cup Software and Information Technology Competition (Provincial)",
        "Third Prize, China College Students Service Outsourcing Innovation and Entrepreneurship Competition, Category A (National)",
        "Second Prize, China Collegiate Computing Competition — 2021 Network Technology Challenge Finals (National)",
        "National College Student Innovation and Entrepreneurship Training Program",
        "Second Prize, 12th China College Students Service Outsourcing Innovation and Entrepreneurship Competition, Eastern Region",
        "First Prize, 2020 National College Student Software Testing Competition (Provincial)",
        "Second Prize, 9th Hikvision Cup Zhejiang College Student Service Outsourcing Innovation Application Competition",
        "Third Prize, 16th Zhejiang College Student E-Commerce Competition",
        "Third Prize, 3rd Zhejiang College Student Environmental Ecology Science and Technology Innovation Competition",
        "Top Ten Student, School of Information Engineering, Hangzhou Dianzi University (2021)",
        "National Scholarship (2020–2021)",
        "Zhejiang Provincial Government Scholarship (2019–2020, 2021–2022)",
        "Champion, Integrity-Themed Debate Competition",
    ];

    return (
        <div className="card" id="awards" style={{ marginTop: "1rem" }}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award) => (
                    <div key={award} className="award-item">
                        <span className="award-icon">✦</span>{" "}
                        <span className="award-text">{award}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
