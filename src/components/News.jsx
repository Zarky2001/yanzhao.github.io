import React from "react";
import "../css/All.css";

function News() {
    const news = [
        {
            time: "2025.01",
            content: <>
                🎉Our paper <a href="#dpa-ei" className="news-ref">“DPA-EI: Long-Tailed Classification by Dual Progressive Augmentation from Explicit and Implicit Perspectives”</a> was accepted by <strong>Knowledge-Based Systems (KBS)</strong>.
            </>,
        },
        {
            time: "2024.03",
            content: <>
                🎉Our paper <a href="#hcnn" className="news-ref">“Hierarchical Convolutional Neural Network with Knowledge Complementation for Long-Tailed Classification”</a> was accepted by <strong>ACM Transactions on Knowledge Discovery from Data (TKDD)</strong>.
            </>,
        },
    ];

    return (
        <div className="News" id="news">
            <div className="card-title">News</div>
            <ul className="news-list">
                {news.map((item) => (
                    <li key={item.time}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default News;
