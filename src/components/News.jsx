import React from "react";
import "../css/All.css";

function News() {
    const news = [
        {
            time: "2026.10",
            content: <>
                🎉Our paper <a href="#dfdf" className="news-ref">“Dynamic Joint Learning Framework with Dual-Task Feature Fusion for Medical Image Classification”</a> was accepted by <strong>Applied Soft Computing (ASOC)</strong>.
            </>,
        },
       {
            time: "2026.09",
            content: <>
                🎉Our paper <a href="#mmki" className="news-ref">“Multi-Scale and Multi-Level Knowledge Integration for Long-Tailed Classification”</a> was accepted by <strong>Information Sciences (INS)</strong>.
            </>,
        },
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
